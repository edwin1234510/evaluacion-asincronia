// Importa la función `solicitud` desde el archivo "../helpers/solicitud.js".
// Esta función se utiliza para hacer solicitudes HTTP.
import {solicitud } from "../helpers/solicitud.js"
// Exporta una función asíncrona llamada `solicitar_usuarios`.
// Esta función toma un parámetro `URL`, que es la base de la API.
export const solicitar_usuarios = async(URL)=>{
    // Realiza una solicitud HTTP a la ruta `${URL}/users` usando la función `solicitud`.
  // `await` pausa la ejecución hasta que la promesa se resuelva.
    const usuarios = await solicitud(`${URL}/users`)
    // Retorna la lista de usuarios obtenida de la solicitud.
    return usuarios;
}