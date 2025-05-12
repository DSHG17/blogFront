import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSearchPublications } from "../shared/hooks/useSearchPublicactions";

export const PostDetail = () => {
  const { id } = useParams();
  const { publication, isFetching, setId } = useSearchPublications();

  useEffect(() => {
    setId(id);
  }, [id]);

  if (isFetching || !publication)
    return <p className="text-center py-10 text-gray-500">Cargando publicación...</p>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 font-sans bg-[#FFFFF0] text-black">
      <h1 className="text-3xl font-bold mb-2">{publication.title}</h1>
      <p className="text-gray-700 mb-4">{publication.description}</p>
      <p className="text-sm text-gray-600 mb-4">
        Curso: <strong>{publication.class}</strong> |{" "}
        {new Date(publication.date).toLocaleDateString()}
      </p>

      {publication.publicationPicture && (
        <img
          src={`http://localhost:5000/uploads/${publication.publicationPicture}`}
          alt="Imagen"
          className="w-full rounded mb-6"
        />
      )}
    </div>
  );
};
