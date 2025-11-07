
import React from 'react';

const RESUME_PDF_URL = './resume-placeholder.pdf'; // Placeholder URL

const ResumePage: React.FC = () => {
    return (
        <div className="animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8 text-center">My Résumé</h1>
            
            <div className="flex justify-center mb-8">
                <a
                    href={RESUME_PDF_URL}
                    download="Bishwas_Paudel_Resume.pdf"
                    className="inline-flex items-center bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:-translate-y-1"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download PDF
                </a>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden p-2">
                <div className="aspect-w-16 aspect-h-22" style={{ height: 'calc(100vh - 20rem)' }}>
                     <iframe
                        src={`${RESUME_PDF_URL}#toolbar=0&navpanes=0&scrollbar=0`}
                        title="Bishwas Paudel's Résumé"
                        className="w-full h-full border-none rounded-md"
                        // The sandbox attribute is for security. It can be restrictive.
                        // sandbox="allow-scripts allow-same-origin"
                    >
                       <p className="p-4">Your browser does not support PDFs. Please <a href={RESUME_PDF_URL} className="text-blue-500 underline">download the PDF</a> to view it.</p>
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default ResumePage;
