
import React, { useState } from 'react';
import { GitHubIcon, LinkedInIcon, InstagramIcon, MailIcon } from '../constants';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, you'd send this to a server.
        console.log('Form submitted:', formData);
        setStatus('Thank you for your message!');
        setFormData({ name: '', email: '', message: '' });
    };

    const socialLinks = [
        { href: 'https://linkedin.com', icon: <LinkedInIcon className="h-8 w-8" />, label: 'LinkedIn' },
        { href: 'https://github.com', icon: <GitHubIcon className="h-8 w-8" />, label: 'GitHub' },
        { href: 'https://instagram.com', icon: <InstagramIcon className="h-8 w-8" />, label: 'Instagram' },
        { href: 'mailto:bishwas.paudel@example.com', icon: <MailIcon className="h-8 w-8" />, label: 'Email' },
    ];


    return (
        <div className="animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 text-center">Get In Touch</h1>
            <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">I'm always open to discussing new projects, creative ideas, or opportunities to be part of an vision. Feel free to reach out.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
                            <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                            <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                            <textarea name="message" id="message" rows={4} required value={formData.message} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
                        </div>
                        <div>
                            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                Send Message
                            </button>
                        </div>
                        {status && <p className="text-center text-green-600 dark:text-green-400">{status}</p>}
                    </form>
                </div>
                <div className="space-y-8">
                     <div className="flex justify-center items-center space-x-6 text-slate-600 dark:text-slate-300">
                        {socialLinks.map(link => (
                            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full hover:text-blue-500 dark:hover:text-blue-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all transform hover:scale-110">
                                <span className="sr-only">{link.label}</span>
                                {link.icon}
                            </a>
                        ))}
                    </div>
                    <div className="w-full h-80 rounded-lg overflow-hidden shadow-md">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.279895049!2d-74.25986548248684!3d40.69767006887533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2snp!4v1698324888123!5m2!1sen!2snp" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen={true}
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map of general US area"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
