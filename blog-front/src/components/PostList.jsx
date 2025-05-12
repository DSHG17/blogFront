import React from "react";
import { useSearchPublications } from "../hooks/useSearchPublications";
import { PublicationCard } from "./publicationCard";

export const PostList = () => {
  const { publications, isFetching } = useSearchPublications();

  if (isFetching) return <p className="text-center py-10 text-gray-500">Cargando publicaciones...</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {publications.map((pub) => (
        <PublicationCard key={pub.id} publication={pub} />
      ))}
    </div>
  );
};
