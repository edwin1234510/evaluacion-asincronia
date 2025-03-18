// Importa la función `getAlbum` desde el archivo "./solicitar_album.js".
// Esta función se utiliza para obtener la lista de álbumes.
import { getAlbum } from "./solicitar_album.js"
// Exporta una función asíncrona llamada `getAlbumesUsuario`.
// Esta función toma dos parámetros: `URL` (base de la API) y `usuario` (objeto que contiene el ID del usuario).
export const getAlbumesUsuario = async(URL,usuario)=>{
    // Obtiene la lista completa de álbumes usando la función `getAlbum`.
    const albums = await getAlbum (URL) 
    // Filtra la lista de álbumes para encontrar aquellos cuyo `userId` coincide con el `id` del usuario proporcionado.
    const albums_users = albums.filter((album) => album.userId == usuario.id);
    // Retorna los álbumes que coinciden con el ID del usuario.
    return albums_users;
}