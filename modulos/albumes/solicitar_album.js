// Importa la función `solicitud` desde el archivo "../helpers/solicitud.js".
// Esta función se utiliza para hacer solicitudes HTTP.
import { solicitud } from "../helpers/solicitud.js";
// Exporta una función asíncrona llamada `getAlbum`.
// Esta función toma un parámetro `URL`, que es la base de la API.
export const getAlbum = async(URL)=>{
    // Realiza una solicitud HTTP a la ruta `${URL}/albums` usando la función `solicitud`.
    // `await` pausa la ejecución hasta que la promesa se resuelva.
    const albums = await solicitud(`${URL}/albums`);
    // Retorna la lista de álbumes obtenida de la solicitud.
    return albums;
}