// Importa la función `solicitud` desde el archivo "../helpers/solicitud.js".
// Esta función se utiliza para hacer solicitudes HTTP.
import { solicitud } from "../helpers/solicitud.js";
// Exporta una función asíncrona llamada `getFotos`.
// Esta función toma un parámetro `URL`, que es la base de la API.
export const getFotos = async(URL)=>{
    // Realiza una solicitud HTTP a la ruta `${URL}/photos` usando la función `solicitud`.
    // `await` pausa la ejecución hasta que la promesa se resuelva.
    const fotos = await solicitud(`${URL}/photos`)
    // Retorna la lista de fotos obtenida de la solicitud.
    return fotos;
}