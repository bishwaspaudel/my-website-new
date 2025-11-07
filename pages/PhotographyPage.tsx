
import React, { useState } from 'react';
import { PHOTOS } from '../constants';
import Lightbox from '../components/Lightbox';

const PhotographyPage: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const openLightbox = (imageUrl: string) => {
        setSelectedImage(imageUrl);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    return (
        <div className="animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 text-center">Photography Gallery</h1>
            <p className="text-center text-slate-600 dark:text-slate-400 mb-12">A collection of moments captured through my lens.</p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {PHOTOS.map((photoUrl, index) => (
                    <div 
                        key={index} 
                        className="group relative cursor-pointer"
                        onClick={() => openLightbox(photoUrl)}
                    >
                        <img 
                            src={photoUrl} 
                            alt={`Gallery image ${index + 1}`}
                            className="w-full h-full object-cover rounded-lg shadow-md transform group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <Lightbox imageUrl={selectedImage} onClose={closeLightbox} />
            )}
        </div>
    );
};

export default PhotographyPage;
