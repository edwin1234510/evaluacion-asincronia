// Importa la función `getPost` desde el archivo "./solicitar_posts.js".
// Esta función se utiliza para obtener la lista de posts.
import { getPost } from "./solicitar_posts.js";
// Exporta una función asíncrona llamada `getPostTitle`.
// Esta función toma dos parámetros: `URL` (base de la API) y `RegExp` (expresión regular para buscar en los títulos).
export const getPostTitle = async(URL,RegExp)=>{
    // Obtiene la lista completa de posts usando la función `getPost`.
    const posts = await getPost (URL);
    // Filtra la lista de posts para encontrar aquellos cuyo título coincide con la expresión regular proporcionada.
    const postTitle = posts.filter((post) => RegExp.test(post.title));
    // Retorna los posts cuyos títulos coinciden con la expresión regular.
    return postTitle;
}