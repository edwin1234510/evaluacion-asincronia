// Importa la función `getFotos` desde el archivo "./solicitar_fotos.js".
// Esta función se utiliza para obtener la lista de fotos.
import { getFotos } from "./solicitar_fotos.js";
// Exporta una función asíncrona llamada `getFotoAlbum`.
// Esta función toma dos parámetros: `URL` (base de la API) y `album` (objeto que contiene el ID del álbum).
export const getFotoAlbum = async(URL,album)=>{
    // Obtiene la lista completa de fotos usando la función `getFotos`.
    const fotos = await getFotos(URL);
    // Filtra la lista de fotos para encontrar aquellas cuyo `albumId` coincide con el `id` del álbum proporcionado.
    const foto = fotos.filter((foto) => foto.albumId == album.id);
    // Retorna las fotos que coinciden con el ID del álbum.
    return foto
}