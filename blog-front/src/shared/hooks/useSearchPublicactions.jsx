import { useState, useEffect, useCallback } from "react";
import toast from "react-hot-toast";
import { searchAllPublications } from "../../services";

export const useSearchPublications = () => {
  const [publications, setPublications] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const fetchPublications = useCallback(async () => {
    setIsFetching(true);
    const response = await searchAllPublications();

    if (response.error) {
      toast.error("Error al cargar publicaciones.");
      setPublications([]);
    } else {
      const adapted = response.data.map((p) => ({
        id: p._id,
        title: p.title,
        description: p.description,
        class: p.class,
        author: p.author,
        date: p.date,
        publicationPicture: p.publicationPicture || null,
        status: p.status
      }));

      setPublications(adapted);
    }

    setIsFetching(false);
  }, []);

  useEffect(() => {
    fetchPublications();
  }, [fetchPublications]);

  return {
    publications,
    isFetching,
    fetchPublications,
  };
};
