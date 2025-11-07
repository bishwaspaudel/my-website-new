
export interface PortfolioItem {
    id: number;
    title: string;
    category: string;
    description: string;
    imageUrl: string;
    link?: string;
    type: 'GitHub' | 'PDF' | 'Demo';
}

export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    githubUrl?: string;
    pdfUrl?: string;
    demoUrl?: string;
    imageUrl: string;
}

export interface BlogPost {
    id: number;
    title: string;
    date: string;
    tags: string[];
    imageUrl: string;
    content: string; // Markdown content
}
