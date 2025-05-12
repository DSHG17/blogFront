import { useState, useEffect } from "react";
import { getCommentsByPublication,createComment } from "../../services";

export const useComments = (publicationId) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchComments = async () => {
    setIsLoading(true);
    const res = await getCommentsByPublication(publicationId);
    if (!res.error) setComments(res.data);
    setIsLoading(false);
  };

  const addComment = async (commentData) => {
    const res = await createComment({ ...commentData, publicationId });
    if (!res.error) fetchComments(); // actualiza la lista
  };

  useEffect(() => {
    if (publicationId) fetchComments();
  }, [publicationId]);

  return { comments, isLoading, addComment };
};
