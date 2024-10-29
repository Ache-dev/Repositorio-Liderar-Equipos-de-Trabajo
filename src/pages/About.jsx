import React from 'react';
import miFoto from '../images/Foto.jpg'; // Asegúrate de ajustar la ruta según corresponda

const About = () => {
  return (
    <section className="mb-16 text-center">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Sobre mí
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
        Mi nombre es Harbey Alexander Camaron Diaz, soy un desarrollador apasionado por la tecnología y el diseño. Me encanta crear soluciones innovadoras y efectivas que resuelvan problemas reales. Con experiencia en desarrollo web y diseño de interfaces, busco siempre aprender nuevas tecnologías y mejorar mis habilidades.
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
