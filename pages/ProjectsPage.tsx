
import React from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden flex flex-col">
            <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover" />
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-300 flex-grow">{project.description}</p>
                <div className="mt-4">
                    <h4 className="font-semibold text-sm text-slate-700 dark:text-slate-200">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {project.technologies.map(tech => (
                            <span key={tech} className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="mt-6 flex items-center space-x-4">
                    {project.githubUrl && <a href={project.githubUrl} className="font-semibold text-blue-600 hover:underline">GitHub</a>}
                    {project.pdfUrl && <a href={project.pdfUrl} className="font-semibold text-blue-600 hover:underline">PDF</a>}
                    {project.demoUrl && <a href={project.demoUrl} className="font-semibold text-blue-600 hover:underline">Demo</a>}
                    <a href="#" className="ml-auto bg-slate-700 text-white px-4 py-2 rounded-md hover:bg-slate-900 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-white transition-colors">View More</a>
                </div>
            </div>
        </div>
    );
};

const ProjectsPage: React.FC = () => {
    return (
        <div className="animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 text-center">Projects</h1>
            <p className="text-center text-slate-600 dark:text-slate-400 mb-12">Showcasing some of my personal and academic endeavors.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROJECTS.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;
