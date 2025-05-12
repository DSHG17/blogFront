import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:3000/blog/v1",
    timeout: 5000,
    httpsAgent: false,
  });

  export const searchAllPublications = async() =>{
    try{
        return await apiClient.get(`/publication/getPost`)
    }catch(e){
        return{
            error: error.message
        }
    }
  }

  export const getCommentsByPublication = async (publicationId) => {
    try {
      return await apiClient.get(`/commentary/getCommentary/${publicationId}`);
    } catch (e) {
      return { error: e.message };
    }
  };
  
  export const createComment = async (data) => {
    try {
      return await apiClient.post("/commentary/postCommentary", data);
    } catch (e) {
      return { error: e.message };
    }
  };
  