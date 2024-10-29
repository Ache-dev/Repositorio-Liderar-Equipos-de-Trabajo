import PropTypes from 'prop-types';

function ProjectCard({ title, creationDate, description, documentUrl, videoUrl }) {
  // Función para construir la URL de previsualización de Google Drive
  const getDrivePreviewUrl = (url) => {
    if (!url) return '';
    const match = url.match(/\/d\/(.*?)\//);
    return match ? `https://drive.google.com/file/d/${match[1]}/preview` : '';
  };

  // Función para construir la URL de inserción de YouTube
  const getYoutubeEmbedUrl = (url) => {
    if (!url) return '';
    const match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : '';
  };

  return (
    <div className="max-w-full sm:max-w-4xl mx-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden">
      <div className="p-6 md:p-8">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">{title}</h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Fecha de realizacion: {creationDate}</p>
        <p className="mt-4 text-gray-700 dark:text-gray-300">{description}</p>

        {documentUrl && (
          <div className="mt-6">
            <iframe
              className="w-full h-96 md:h-[600px] border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm"
              src={getDrivePreviewUrl(documentUrl)}
              title="Documento del proyecto"
              frameBorder="0"
              allow="autoplay"
            ></iframe>
          </div>
        )}

        {videoUrl && (
          <div className="mt-6">
            <iframe
              className="w-full h-96 md:h-[600px] border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm"
              src={getYoutubeEmbedUrl(videoUrl)}
              title="Video del proyecto"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}

        {(!documentUrl && !videoUrl) && (
          <p className="mt-6 text-gray-500 dark:text-gray-400">No hay documentos o videos disponibles para esta entrada.</p>
        )}
      </div>
    </div>
  );
}

// PropTypes para validar las props del componente
ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  creationDate: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  documentUrl: PropTypes.string,
  videoUrl: PropTypes.string,
};

export default ProjectCard;
