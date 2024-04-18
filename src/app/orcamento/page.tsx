'use client'
import React from 'next';
import { useRouter } from 'next/navigation';

const Orcamento: React.FC = () => {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Form submission logic here
    console.log('Form submitted');
    router.push('/thank-you'); // Optionally redirect after handling the form
  };

  return (
    <div className="relative w-full overflow-hidden" style={{ background: 'linear-gradient(to bottom, #000000 85%, #791212 100%)', minHeight: '100vh' }}>
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center min-h-screen">
        <form onSubmit={handleSubmit} className="bg-black bg-opacity-50 p-8 rounded shadow-lg" style={{ width: '80%', maxWidth: '800px' }}>
          <div className="flex justify-center mb-6">
            <img 
              src="image.png" 
              alt="Inteli Jr" 
              className="w-32 sm:w-64" // Responsive width adjustments
            />
          </div>
          <h1 className="text-xl font-bold text-white poppins-semibold mb-4">Orçamento de Projetos</h1>
          <div className="flex justify-between space-x-4 mb-4"> {/* Flex container for inline fields */}
            <div className="flex-1 min-w-0"> {/* Flex child for name field */}
              <label htmlFor="name" className="block mb-2 poppins-regular text-white">Nome:</label>
              <input type="text" id="name" name="name" placeholder='Rogério' required className="w-full p-2 border rounded" />
            </div>
            <div className="flex-1 min-w-0"> {/* Flex child for email field */}
              <label htmlFor="email" className="block mb-2 poppins-regular text-white">Email:</label>
              <input type="email" id="email" name="email" placeholder='rogerio@gmail.com' required className="w-full p-2 border rounded" />
            </div>
          </div>

          <label htmlFor="description" className="block mb-2 poppins-regular text-white">Project Description:</label>
          <textarea id="description" name="description" placeholder='Descreva aqui o seu projeto. Descreva suas necessidades e especifique quais funcionalidades você gostaria de ter.' rows={4} required className="w-full p-2 mb-4 border rounded"></textarea>

          <label htmlFor="links" className="block mb-2 poppins-regular text-white">Links:</label>
          <input type="text" id="links" name="links" placeholder='Coloque aqui links relevantes para a compreensão do seu projeto.' required className="w-full p-2 mb-4 border rounded" />


          <div className="flex justify-end">  {/* Flex container to align button to the right */}
            <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Orcamento;
