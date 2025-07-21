import React, { useState } from "react";
import PropTypes from 'prop-types';

export const CommentForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, content });
    setName("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-black">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Tu nombre"
        required
        className="w-full border border-gray-300 p-2 rounded text-black bg-white placeholder-gray-500"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Tu comentario"
        required
        className="w-full border border-gray-300 p-2 rounded text-black bg-white placeholder-gray-500"
      />
      <button
        type="submit"
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
      >
        Enviar Comentario
      </button>
    </form>
  );
};

CommentForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
