import React from 'react';
import miFoto from '../src/images/Foto.jpg'; // Asegúrate de ajustar la ruta según corresponda

const About = () => {
  return (
    <section className="mb-16 text-center">
      <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
        Sobre mí
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
      👋 ¡Hola! Soy Harbey Alexander Camaron Diaz, estudiante en el TDEA y el hijo menor de mi familia. Me apasiona profundamente el mundo de la tecnología y el desarrollo, y disfruto explorando todo lo que la innovación y la creatividad pueden ofrecer. 🚀💻
      </p>
      <img
        src={miFoto} 
        alt="Foto del desarrollador" 
        className="mx-auto rounded-lg mb-4" // Estilos para centrar y redondear la imagen
        style={{ maxWidth: '300px' }} // Ajusta el tamaño máximo según necesites
      />
    </section>
  );
};

export default About;
