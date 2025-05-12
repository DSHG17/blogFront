import React from "react";
import { useParams } from "react-router-dom";
import { useSearchPublications } from "../shared/hooks/useSearchPublicactions";
import { useComments } from "../shared/hooks/useComments";
import { CommentForm } from "./CommentForm";

export const PostDetail = () => {
  const { id } = useParams();

  const { publications, isFetching } = useSearchPublications();
  const publication = publications.find((p) => p._id === id);

  const { comments, isLoading, addComment } = useComments(id);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {isFetching ? (
        <p className="text-center text-gray-500">Cargando publicación...</p>
      ) : publication ? (
        <article className="bg-white border border-black rounded-lg p-6 mb-8">
          <h1 className="text-3xl font-bold mb-2">{publication.title}</h1>
          <p className="text-gray-600 text-sm mb-4">
            Publicado por {publication.author} el{" "}
            {new Date(publication.date).toLocaleDateString()}
          </p>
          <p className="text-lg mb-4">{publication.description}</p>
          {publication.publicationPicture && (
            <img
              src={`http://localhost:3000/uploads/publication-pictures/${publication.publicationPicture}`}
              alt="Imagen"
              className="max-h-96 object-contain mx-auto"
            />
          )}
        </article>
      ) : (
        <p className="text-center text-gray-500">Publicación no encontrada.</p>
      )}

      {/* Comentarios */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Comentarios</h2>

        {isLoading ? (
          <p className="text-gray-500">Cargando comentarios...</p>
        ) : comments.length === 0 ? (
          <p className="text-gray-400 italic">Aún no hay comentarios.</p>
        ) : (
          <ul className="space-y-4 mb-6">
            {comments.map((c) => (
              <li key={c._id} className="border rounded p-4 bg-[#FFFFF0]">
                <p className="font-bold">{c.name}</p>
                <p className="text-sm text-gray-700">{c.content}</p>
                <p className="text-xs text-gray-400 mt-1">
                  {new Date(c.date).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        )}

        <CommentForm onSubmit={addComment} />
      </section>
    </div>
  );
};
