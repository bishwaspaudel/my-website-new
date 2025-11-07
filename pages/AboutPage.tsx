
import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8 text-center">About Me</h1>
            
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="w-full md:w-1/3">
                    <img 
                        src="https://picsum.photos/seed/profile/400/400" 
                        alt="Bishwas Paudel"
                        className="rounded-full shadow-lg w-48 h-48 md:w-64 md:h-64 object-cover mx-auto"
                    />
                </div>
                <div className="w-full md:w-2/3 text-slate-600 dark:text-slate-300 text-lg space-y-4">
                    <p>
                        I am an international student currently pursuing my studies at <span className="font-semibold text-blue-600 dark:text-blue-400">Weber State University</span> in the United States. My academic journey is fueled by a profound curiosity for the ways technology can solve complex problems, especially within the healthcare sector.
                    </p>
                    <p>
                        My primary interests lie at the intersection of computer science and medicine, particularly in areas like <span className="font-semibold">AI and data science</span>, and their applications in public health and medical innovation. I am driven by the potential to create technology that is not only powerful but also empathetic and human-centered.
                    </p>
                    <p>
                        Beyond academics, I find a creative outlet in <span className="font-semibold">photography</span>. It's a passion that allows me to capture moments, tell stories, and see the world from different perspectives. This blend of analytical thinking and creative expression defines my approach to problem-solving.
                    </p>
                </div>
            </div>

            <div className="mt-12 text-center">
                <blockquote className="text-xl md:text-2xl italic text-slate-500 dark:text-slate-400 border-l-4 border-blue-500 pl-6 inline-block">
                    “Learning, creating, and connecting — one frame, one idea at a time.”
                </blockquote>
            </div>
        </div>
    );
};

export default AboutPage;
