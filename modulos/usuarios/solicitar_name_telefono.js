// Importa la función `solicitud` desde el archivo "../helpers/solicitud.js".
// Esta función se utiliza para hacer solicitudes HTTP.
import { solicitud } from "../helpers/solicitud.js";
// Exporta una función asíncrona llamada `getNamePhone`.
// Esta función toma un parámetro `URL`, que es la base de la API.
export const getNamePhone = async (URL)=>{
    // Realiza una solicitud HTTP a la ruta `${URL}/users` para obtener la lista de usuarios.
    const users = await solicitud(`${URL}/users`);
    // Retorna una promesa que resuelve un arreglo de objetos con el nombre y teléfono de cada usuario.
    return Promise.all(users.map(async(user)=>{
        // Mapea cada usuario en la lista para extraer su nombre y teléfono.
        return {
            "nombre" : user.name,// Extrae el nombre del usuario.
            "telefono": user.phone// Extrae el teléfono del usuario.
        }
    }))
}