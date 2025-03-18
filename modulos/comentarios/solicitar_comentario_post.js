// Importa la función `getComentario` desde el archivo "./solicitar_comentario.js".
// Esta función se utiliza para obtener la lista de comentarios.
import { getComentario } from "./solicitar_comentario.js";
// Exporta una función asíncrona llamada `getComentPost`.
// Esta función toma dos parámetros: `URL` (base de la API) y `post` (objeto que contiene el ID del post).
export const getComentPost = async(URL,post)=>{
    // Obtiene la lista completa de comentarios usando la función `getComentario`.
    const comments = await getComentario(URL);
    // Filtra la lista de comentarios para encontrar aquellos cuyo `postId` coincide con el `id` del post proporcionado.
    const comments_post = comments.filter((comment)=> comment.postId == post.id);
    // Retorna los comentarios que coinciden con el ID del post.
    return comments_post;
}