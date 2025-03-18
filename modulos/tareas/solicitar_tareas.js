// Importa la función `solicitud` desde el archivo "../helpers/solicitud.js".
// Esta función se utiliza para hacer solicitudes HTTP.
import {solicitud } from "../helpers/solicitud.js"
// Exporta una función asíncrona llamada `listarT`.
// Esta función no toma parámetros y se encarga de listar todas las tareas.
export const listarT =async() =>{
    // Define la URL base de la API desde donde se obtendrán las tareas.
    const URL = "https://jsonplaceholder.typicode.com";
    // Realiza una solicitud HTTP a la ruta `${URL}/todos` usando la función `solicitud`.
    // `await` pausa la ejecución hasta que la promesa se resuelva.
    const tareas = await solicitud(`${URL}/todos`);
    // Retorna la lista de tareas obtenida de la solicitud.
    return tareas;
}