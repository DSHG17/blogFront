import React from 'react';
import { Link } from 'react-router-dom';

export const PublicationCard = ({ publication }) => {
  if (!publication) return null;

  return (
    <div className="bg-[#FFFFF0] border-[4px] border-black rounded-2xl w-full max-w-sm mx-auto shadow-2xl font-sans text-black overflow-hidden transition-transform hover:scale-105 duration-300">
      
      {/* Encabezado */}
      <div className="bg-blue-300 px-6 py-4 flex justify-between items-center text-black border-b border-black">
        <h2 className="text-xl font-extrabold truncate">{publication.title}</h2>
        <span className="text-xs font-bold bg-white px-3 py-1 rounded-full border border-black">
          {publication.class}
        </span>
      </div>

      {/* Imagen */}
      <div className="bg-white h-60 flex justify-center items-center border-y border-black">
        {publication.publicationPicture ? (
          <img
            src={`http://localhost:3000/uploads/publication-pictures/${publication.publicationPicture}`}
            alt={publication.title}
            className="h-52 object-contain"
          />
        ) : (
          <span className="text-gray-400 italic">Sin imagen</span>
        )}
      </div>

      {/* Descripción */}
      <div className="px-6 py-4 text-base border-b border-black line-clamp-4">
        <p>{publication.description}</p>
      </div>

      {/* Información adicional */}
      <div className="px-6 py-4 text-sm flex justify-between items-center">
        <div>
          <p><strong>Autor:</strong> {publication.author}</p>
          <p><strong>Fecha:</strong> {new Date(publication.date).toLocaleDateString()}</p>
        </div>
        <Link
          to={`/post/${publication._id}`}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition text-sm"
        >
          Ver más
        </Link>
      </div>
    </div>
  );
};
