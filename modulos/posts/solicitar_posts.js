// Importa la función `solicitud` desde el archivo "../helpers/solicitud.js".
// Esta función se utiliza para hacer solicitudes HTTP.
import { solicitud } from "../helpers/solicitud.js";
// Exporta una función asíncrona llamada `getPost`.
// Esta función toma un parámetro `URL`, que es la base de la API.
export const getPost = async(URL)=>{
    // Realiza una solicitud HTTP a la ruta `${URL}/posts` usando la función `solicitud`.
    // `await` pausa la ejecución hasta que la promesa se resuelva.
    const posts = await solicitud(`${URL}/posts`);
    // Retorna la lista de posts obtenida de la solicitud.
    return posts;
}