
import React, { useState, useMemo } from 'react';
import { PORTFOLIO_ITEMS } from '../constants';

const PortfolioItemCard: React.FC<{ item: typeof PORTFOLIO_ITEMS[0] }> = ({ item }) => {
    return (
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
            <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover"/>
            <div className="p-6">
                <span className="text-sm text-blue-500 dark:text-blue-400 font-semibold">{item.category}</span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-2">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mt-2 text-sm">{item.description}</p>
                {item.link && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                        View {item.type} &rarr;
                    </a>
                )}
            </div>
        </div>
    );
};


const PortfolioPage: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const categories = ['All', ...Array.from(new Set(PORTFOLIO_ITEMS.map(item => item.category)))];

    const filteredItems = useMemo(() => {
        if (activeFilter === 'All') {
            return PORTFOLIO_ITEMS;
        }
        return PORTFOLIO_ITEMS.filter(item => item.category === activeFilter);
    }, [activeFilter]);

    return (
        <div className="animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 text-center">Academic Portfolio</h1>
            <p className="text-center text-slate-600 dark:text-slate-400 mb-8">A collection of my course projects, research, and classroom work.</p>
            
            <div className="flex justify-center flex-wrap gap-2 mb-8">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setActiveFilter(category)}
                        className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                            activeFilter === category
                                ? 'bg-blue-600 text-white'
                                : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600'
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map(item => (
                    <PortfolioItemCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default PortfolioPage;
