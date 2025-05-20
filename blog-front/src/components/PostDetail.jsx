import React from "react";
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import { useComments } from "../shared/hooks/useComments";
import { CommentForm } from "./CommentForm";

export const PostDetail = () => {
  const { id } = useParams();
  console.log("Publicación ID:", id);

  const { comments, isLoading, addComment } = useComments(id);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-black">
      {isLoading ? (
        <p className="text-center">Cargando comentarios...</p>
      ) : comments.length === 0 ? (
        <p className="text-center">Aún no hay comentarios.</p>
      ) : (
        <ul className="space-y-4">
          {comments.map((comment) => (
            <li
              key={comment._id}
              className="border border-gray-300 p-4 rounded bg-white text-black"
            >
              <p className="font-semibold">{comment.name}</p>
              <p className="mt-1">{comment.content}</p>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-8">
        <CommentForm onSubmit={addComment} />
      </div>
    </div>
  );
};

PostDetail.propTypes = {
  publication: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    publicationPicture: PropTypes.string,
  }).isRequired,
};
