
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
    return (
        <div className="flex items-center justify-center text-center py-20 md:py-32">
            <div className="relative w-full max-w-4xl mx-auto animate-fade-in-up">
                 <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-blue-500 via-green-500 to-blue-400 opacity-20 dark:opacity-30 blur-3xl animate-gradient-xy"></div>
                <div className="relative z-10 p-8">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300">
                        Bishwas Paudel
                    </h1>
                    <p className="mt-4 text-lg md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Exploring the intersection of Healthcare, Technology, and Human Creativity.
                    </p>
                    <p className="mt-6 text-md md:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                        As an international student in the United States, I am passionate about building meaningful solutions that connect science with the human experience.
                    </p>
                    <div className="mt-10">
                        <Link
                            to="/projects"
                            className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:-translate-y-1"
                        >
                            View My Work
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
