'use client'
import type { NextPage } from 'next';
import { useRouter } from 'next/navigation';

const Ebook: NextPage = () => {
  const router = useRouter();


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
          <div className="w-full max-w-4xl p-4 mb-4">
            <iframe
              className="w-full aspect-video"
              src='https://www.youtube.com/embed/dQw4w9WgXcQ?si=vBkTCV06cuO2WZ0R'
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <button
            onClick={() => router.push('/orcamento')}
            className="bg-green-500 hover:bg-green-700 text-white poppins-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Faça seu orçamento
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ebook;
