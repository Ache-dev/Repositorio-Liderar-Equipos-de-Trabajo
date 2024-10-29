import NavBar from '../components/NavBar.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import '../App.css';

function App() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="flex-1 bg-gray-100 dark:bg-gray-900">
        <main className="p-6 text-center mx-auto max-w-7xl mt-16">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
            Bienvenido al repositorio de Proyectos
          </h1>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Durante el semestre, en la clase de "Liderar Equipos de Trabajo", hemos llevado a cabo diversos trabajos que han sido recopilados en este repositorio. Estos proyectos han permitido a los estudiantes aplicar conceptos teóricos en situaciones prácticas, fomentando el desarrollo de habilidades de liderazgo y trabajo en equipo.
          </p>


          {<ProjectCard
              title="PPI"
              description="Este proyecto tiene como objetivo desarrollar un sistema eficiente que permita a los usuarios gestionar las reservas de recursos universitarios en el Tecnológico de Antioquia (TDEA) de manera sencilla y efectiva. A través de un análisis detallado de las necesidades de estudiantes, profesores y personal, crearemos una herramienta intuitiva que facilite el acceso a los recursos necesarios. El sistema incluirá funcionalidades como la visualización de disponibilidad en tiempo real, notificaciones automatizadas y gestión de reservas activas, optimizando así el uso de los recursos disponibles."
              documentUrl="https://drive.google.com/file/d/1YMGctS-gIUUj81poxtNhf5v7WFXgW0RO/view?usp=sharing"
            />}


        </main>
      </div>
    </div>
  );
}

export default App;
