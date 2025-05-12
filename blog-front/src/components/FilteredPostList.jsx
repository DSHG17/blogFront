import React, { useState } from "react";
import { useSearchPublications } from "../shared/hooks/useSearchPublicactions";
import { PublicationCard } from "./publicationCard";

const COURSE_TYPES = ["TICS", "TALLER", "TECNO"];

export const FilteredPostList = () => {
  const { publications, isFetching } = useSearchPublications();
  const [selectedCourse, setSelectedCourse] = useState(null);

  const filtered = selectedCourse
    ? publications.filter((pub) => pub.class?.toUpperCase() === selectedCourse)
    : publications;

  return (
    <main className="min-h-screen bg-[#FFFFF0] py-12 px-4">
      {/* Título */}
      <h1 className="text-4xl font-extrabold text-center text-black mb-8">
        Blog de Aprendizaje
      </h1>

      {/* Botones de filtro */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {COURSE_TYPES.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedCourse(type)}
            className={`px-6 py-2 font-semibold rounded-lg transition-all border border-black text-white ${
              selectedCourse === type
                ? "bg-black"
                : "bg-gray-700 hover:bg-gray-800"
            }`}
          >
            {type}
          </button>
        ))}
        <button
          onClick={() => setSelectedCourse(null)}
          className={`px-6 py-2 font-semibold rounded-lg transition-all border border-black text-white ${
            selectedCourse === null
              ? "bg-black"
              : "bg-gray-700 hover:bg-gray-800"
          }`}
        >
          Todos
        </button>
      </div>

      {/* Contenido */}
      {isFetching ? (
        <p className="text-center text-gray-500">Cargando publicaciones...</p>
      ) : filtered.length === 0 ? (
        <p className="text-center text-gray-500">
          No hay publicaciones para {selectedCourse}
        </p>
      ) : (
        <div className="w-full flex flex-wrap justify-center gap-8">
          {filtered.map((pub) => (
            <PublicationCard key={pub._id} publication={pub} />
          ))}
        </div>
      )}
    </main>
  );
};
