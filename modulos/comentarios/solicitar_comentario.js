// Importa la función `solicitud` desde el archivo "../helpers/solicitud.js".
// Esta función se utiliza para hacer solicitudes HTTP.
import { solicitud } from "../helpers/solicitud.js";
// Exporta una función asíncrona llamada `getComentario`.
// Esta función toma un parámetro `URL`, que es la base de la API.
export const getComentario = async(URL)=>{
    // Realiza una solicitud HTTP a la ruta `${URL}/comments` usando la función `solicitud`.
    // `await` pausa la ejecución hasta que la promesa se resuelva.
    const coments = await solicitud(`${URL}/comments`);
    // Retorna la lista de comentarios obtenida de la solicitud.
    return coments
}