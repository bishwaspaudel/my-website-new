
import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS, GitHubIcon, LinkedInIcon, InstagramIcon, MailIcon } from '../constants';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { href: 'https://github.com', icon: <GitHubIcon />, label: 'GitHub' },
        { href: 'https://linkedin.com', icon: <LinkedInIcon />, label: 'LinkedIn' },
        { href: 'https://instagram.com', icon: <InstagramIcon />, label: 'Instagram' },
        { href: 'mailto:bishwas.paudel@example.com', icon: <MailIcon />, label: 'Email' },
    ];

    return (
        <footer className="bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    <div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Bishwas Paudel</h3>
                        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                            Innovation, Empathy, and Creativity in Every Line of Code.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-base font-semibold text-slate-900 dark:text-white">Quick Links</h3>
                        <ul className="mt-4 space-y-2">
                            {NAV_LINKS.slice(1, 5).map(link => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-base font-semibold text-slate-900 dark:text-white">Connect</h3>
                        <div className="mt-4 flex justify-center md:justify-start space-x-6 text-slate-500 dark:text-slate-400">
                            {socialLinks.map(social => (
                                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                                    <span className="sr-only">{social.label}</span>
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-slate-200 dark:border-slate-800 pt-8 text-center text-sm text-slate-500 dark:text-slate-400">
                    <p>&copy; {currentYear} Bishwas Paudel. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
