
import React, { useState, useMemo } from 'react';
import { BLOG_POSTS } from '../constants';
import { BlogPost } from '../types';

// A simple markdown to HTML component. For a real app, a library like react-markdown would be better.
const SimpleMarkdown: React.FC<{ content: string }> = ({ content }) => {
    const lines = content.split('\n').map((line, index) => {
        if (line.startsWith('### ')) {
            return <h3 key={index} className="text-xl font-semibold mt-4 mb-2 dark:text-white">{line.substring(4)}</h3>;
        }
        if (line.startsWith('1. ') || line.startsWith('2. ') || line.startsWith('3. ')) {
             return <li key={index} className="ml-5 list-decimal">{line.substring(3)}</li>
        }
        if (line.trim() === '') {
            return <br key={index} />;
        }
        return <p key={index} className="mb-4">{line}</p>;
    });

    return <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">{lines}</div>;
};


const BlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => {
    return (
        <article className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden">
            <img src={post.imageUrl} alt={post.title} className="w-full h-64 object-cover"/>
            <div className="p-6">
                <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                    <time dateTime={post.date}>{post.date}</time>
                </div>
                <h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                    {post.title}
                </h2>
                <div className="mt-4 space-x-2">
                    {post.tags.map(tag => (
                         <span key={tag} className="inline-block bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 text-xs font-medium px-2.5 py-0.5 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="mt-4">
                    <SimpleMarkdown content={post.content} />
                </div>
            </div>
        </article>
    )
}

const BlogPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    const allTags = useMemo(() => ['All', ...Array.from(new Set(BLOG_POSTS.flatMap(p => p.tags)))], []);

    const filteredPosts = useMemo(() => {
        return BLOG_POSTS
            .filter(post => selectedTag === null || selectedTag === 'All' || post.tags.includes(selectedTag))
            .filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }, [searchTerm, selectedTag]);

    return (
        <div className="animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 text-center">Blog</h1>
            <p className="text-center text-slate-600 dark:text-slate-400 mb-8">Reflections on technology, health, creativity, and personal development.</p>
            
            <div className="mb-8 flex flex-col md:flex-row gap-4">
                <input
                    type="text"
                    placeholder="Search posts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full md:w-1/3 p-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800"
                />
                <div className="flex flex-wrap gap-2 items-center">
                    {allTags.map(tag => (
                        <button
                            key={tag}
                            onClick={() => setSelectedTag(tag)}
                            className={`px-3 py-1 text-sm rounded-full transition-colors ${selectedTag === tag ? 'bg-blue-600 text-white' : 'bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600'}`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>

            <div className="space-y-12">
                {filteredPosts.length > 0 ? (
                    filteredPosts.map(post => <BlogPostCard key={post.id} post={post} />)
                ) : (
                    <p className="text-center text-slate-500 dark:text-slate-400 py-10">No posts found.</p>
                )}
            </div>
        </div>
    );
};

export default BlogPage;
