import { getComentario } from "./solicitar_comentario.js";

export const getComentPost = async(URL,post)=>{
    const comments = await getComentario(URL);
    const comments_post = comments.filter((comment)=> comment.postId == post.id);
    return comments_post;
}