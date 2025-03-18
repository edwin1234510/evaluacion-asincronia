// Importa la función `listarT` desde el archivo "./solicitar_tareas.js".
// Esta función se utiliza para obtener la lista de tareas.
import { listarT } from "./solicitar_tareas.js";
// Exporta una función asíncrona llamada `solicitar_tarea_p`.
// Esta función toma dos parámetros: `URL` (base de la API) y `user` (objeto que contiene el ID del usuario).
export const solicitar_tarea_p =async(URL,user)=>{
    // Obtiene la lista completa de tareas usando la función `listarT`.
    const tareas = await listarT(URL);
    // Filtra la lista de tareas para encontrar aquellas que no están completadas (`completed == false`)
    // y que pertenecen al usuario con el `userId` proporcionado.
    const tareas_pen = tareas.filter((tarea) => tarea.completed == false && tarea.userId==user.id)
    // Retorna las tareas pendientes que coinciden con el ID del usuario.
    return tareas_pen
} 
