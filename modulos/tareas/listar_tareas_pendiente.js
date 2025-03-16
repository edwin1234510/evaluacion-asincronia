import { listarT } from "./solicitar_tareas.js";
export const solicitar_tarea_p =async(URL,user)=>{
    const tareas = await listarT(URL);
    const tareas_pen = tareas.filter((tarea) => tarea.completed == false && tarea.userId==user.id)
    return tareas_pen
} 
