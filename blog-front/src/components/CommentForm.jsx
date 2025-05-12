import React, { useState } from "react";

export const CommentForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !content.trim()) return;

    onSubmit({ name, content });
    setName("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-6">
      <input
        className="w-full p-2 border border-black rounded"
        placeholder="Tu nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        className="w-full p-2 border border-black rounded"
        placeholder="Escribe tu comentario..."
        rows={4}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        type="submit"
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
      >
        Comentar
      </button>
    </form>
  );
};
