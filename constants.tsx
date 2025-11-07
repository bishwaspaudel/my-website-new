
import React from 'react';
import { PortfolioItem, Project, BlogPost } from './types';

export const NAV_LINKS = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Projects', path: '/projects' },
    { name: 'Photography', path: '/photography' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
    { name: 'Resume', path: '/resume' },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
    { id: 1, title: 'AI-Powered Medical Diagnosis Tool', category: 'Healthcare', description: 'A proof-of-concept tool using machine learning to assist in diagnosing common ailments from medical images.', imageUrl: 'https://picsum.photos/seed/health1/600/400', link: '#', type: 'GitHub' },
    { id: 2, title: 'Secure Patient Data Management System', category: 'Cybersecurity', description: 'Developed a secure system for managing patient records with role-based access control and data encryption.', imageUrl: 'https://picsum.photos/seed/cyber1/600/400', link: '#', type: 'GitHub' },
    { id: 3, title: 'Data Visualization for Public Health Trends', category: 'Computer Science', description: 'An interactive dashboard to visualize public health data, built with D3.js and React.', imageUrl: 'https://picsum.photos/seed/cs1/600/400', link: '#', type: 'Demo' },
    { id: 4, title: 'Research Paper on Telemedicine Adoption', category: 'Research', description: 'A comprehensive literature review and analysis of the factors influencing telemedicine adoption post-pandemic.', imageUrl: 'https://picsum.photos/seed/research1/600/400', link: '#', type: 'PDF' },
    { id: 5, title: 'Network Traffic Analysis for Anomaly Detection', category: 'Cybersecurity', description: 'Implemented an IDS using machine learning to detect anomalies in network traffic patterns.', imageUrl: 'https://picsum.photos/seed/cyber2/600/400', link: '#', type: 'GitHub' },
    { id: 6, title: 'Computational Biology: Protein Folding Simulation', category: 'Computer Science', description: 'A simulation project exploring protein folding algorithms.', imageUrl: 'https://picsum.photos/seed/cs2/600/400', link: '#', type: 'GitHub' },
];

export const PROJECTS: Project[] = [
    { id: 1, title: 'Project HealthTrack', description: 'A mobile-first web app to track personal health metrics and visualize progress over time.', technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'], githubUrl: '#', demoUrl: '#', imageUrl: 'https://picsum.photos/seed/project1/600/400' },
    { id: 2, title: 'Creative Lens Gallery', description: 'A personal photography portfolio website built to be fast, responsive, and aesthetically pleasing.', technologies: ['Next.js', 'Vercel', 'Tailwind CSS'], githubUrl: '#', demoUrl: '#', imageUrl: 'https://picsum.photos/seed/project2/600/400' },
    { id: 3, title: 'Code Snippet Manager', description: 'A desktop application for developers to save, tag, and search for frequently used code snippets.', technologies: ['Electron', 'React', 'SQLite'], githubUrl: '#', pdfUrl: '#', imageUrl: 'https://picsum.photos/seed/project3/600/400' },
];

export const BLOG_POSTS: BlogPost[] = [
    { id: 1, title: 'The Future of AI in Personalized Medicine', date: 'October 26, 2023', tags: ['AI', 'Healthcare', 'Technology'], imageUrl: 'https://picsum.photos/seed/blog1/800/400', content: `
AI is poised to revolutionize healthcare by enabling truly personalized medicine. By analyzing vast datasets of genomic information, lifestyle factors, and clinical data, machine learning algorithms can predict individual health risks and tailor treatments with unprecedented precision.

### Key Areas of Impact
- **Predictive Diagnostics:** Identifying diseases before symptoms appear.
- **Drug Discovery:** Accelerating the development of new pharmaceuticals.
- **Treatment Personalization:** Customizing therapies based on a patient's unique genetic makeup.

The ethical implications are significant, but the potential to improve patient outcomes is immense. Collaboration between data scientists, clinicians, and ethicists will be key to unlocking this future.
` },
    { id: 2, title: 'A Photographer\'s Guide to Composition', date: 'September 15, 2023', tags: ['Photography', 'Creative'], imageUrl: 'https://picsum.photos/seed/blog2/800/400', content: `
Composition is the language of photography. It's how you arrange elements within the frame to guide the viewer's eye and tell a story. While there are no hard rules, understanding fundamental principles can dramatically improve your images.

### Essential Principles
1.  **Rule of Thirds:** Place key elements along the lines or at their intersections.
2.  **Leading Lines:** Use natural lines to draw the viewer into the image.
3.  **Framing:** Use elements in the foreground to create a frame around your subject.

Mastering these techniques takes practice, but it's a rewarding journey that transforms snapshots into compelling photographs.
` },
    { id: 3, title: 'My Journey as an International Student in the US', date: 'August 01, 2023', tags: ['Personal', 'Student Life'], imageUrl: 'https://picsum.photos/seed/blog3/800/400', content: `
Moving to the United States for my studies was a monumental step, filled with excitement and challenges. Navigating a new culture, academic system, and social landscape has been an incredible learning experience.

### Lessons Learned
- **Adaptability is Key:** Being open to new experiences and perspectives is crucial.
- **Community Matters:** Finding a supportive group of friends and mentors makes all the difference.
- **Embrace the Discomfort:** Growth happens outside your comfort zone.

Every day presents a new opportunity to learn, not just in the classroom, but from the world around me. It's a journey I'm incredibly grateful for.
` },
];

export const PHOTOS = Array.from({ length: 12 }, (_, i) => `https://picsum.photos/seed/photo${i + 1}/800/600`);

// SVG Icons
export const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

export const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
);

export const GitHubIcon = ({ className = 'h-6 w-6' }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
);

export const LinkedInIcon = ({ className = 'h-6 w-6' }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
);

export const InstagramIcon = ({ className = 'h-6 w-6' }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.644-.07 4.85-.07zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.267.058 1.675.072 4.947.072s3.68-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.267.072-1.675.072-4.947s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg>
);

export const MailIcon = ({ className = 'h-6 w-6' }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/></svg>
);
