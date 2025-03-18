// Importa la función `solicitar_usuarios` desde el archivo "./solicitar_usu.js".
// Esta función se utiliza para obtener la lista de usuarios.
import { solicitar_usuarios } from "./solicitar_usu.js";
// Exporta una función asíncrona llamada `listar_userName`.
// Esta función toma dos parámetros: `URL` (base de la API) y `userName` (nombre de usuario a buscar).
export const listar_userName = async(URL,userName)=>{
     // Obtiene la lista completa de usuarios usando la función `solicitar_usuarios`.
    const usuarios = await solicitar_usuarios(URL);
    // Filtra la lista de usuarios para encontrar aquellos cuyo `username` coincide con userName de la lista de usuarios
    const usuario = usuarios.filter((user) => user.username == userName)
    // Retorna el usuario o usuarios que coinciden con el nombre de usuario proporcionado.
    return usuario;
}