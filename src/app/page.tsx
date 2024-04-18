'use client'
import type { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';



const Ebook: NextPage = () => {
  const router = useRouter();

  const [playing, setPlaying] = useState(false);

  const videoSrc = "https://www.youtube.com/embed/dQw4w9WgXcQ?si=vBkTCV06cuO2WZ0R"; // Ensure autoplay is on for seamless play

  const startVideo = () => {
    setPlaying(true);
  };

  return (
    <div>
      <div className="relative w-full overflow-hidden" style={{ background: 'linear-gradient(to bottom, #000000 85%, #791212 100%)', minHeight: '100vh' }}>
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center min-h-screen">
          {/* Image replacement for the text "Inteli Jr" */}
          <img 
            src="image.png" 
            alt="Inteli Jr" 
            className="w-32 sm:w-64" // Responsive width adjustments
          />
          <p className="text-sm sm:text-lg text-center text-white fira-sans-bold-italic cursor-default sm:p-8">
            Porque escolher o Inteli Júnior para fazer seu site?
          </p>
          
          {/* Video Embed */}
          <div className="video-container" style={{ position: 'relative', width: '50%', height: '55%' }}>
            { !playing && (
              <img 
                src="thumb.png" 
                alt="Play" 
                style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, cursor: 'pointer' }}
                onClick={startVideo}
              />
            )}
            <iframe
              src={playing ? videoSrc : undefined} 
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              style={{ width: '100%', height: '100%' }}
            ></iframe>
          </div>
          <button
            onClick={() => router.push('/orcamento')}
            className="bg-green-500 hover:bg-green-700 text-white poppins-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-8"
          >
            Faça seu orçamento
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ebook;
