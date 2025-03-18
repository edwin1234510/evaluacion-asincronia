// Importa la función `getPost` desde el archivo "../posts/solicitar_posts.js".
// Esta función se utiliza para obtener la lista de posts.
import { getPost } from "../posts/solicitar_posts.js";
// Exporta una función asíncrona llamada `getPostId`.
// Esta función toma dos parámetros: `URL` (base de la API) y `user` (objeto que contiene el ID del usuario).
export const getPostId = async(URL,user) =>{
    // Obtiene la lista completa de posts usando la función `getPost`.
    const posts = await getPost(URL);
    // Filtra la lista de posts para encontrar aquellos cuyo `userId` coincide con el `id` del usuario proporcionado.
    const post_user = posts.filter((post) => post.userId == user.id)
    // Retorna los posts que coinciden con el ID del usuario.
    return post_user
}