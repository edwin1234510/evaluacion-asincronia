
import {solicitud } from "../helpers/solicitud.js"
export const listarT =async() =>{
    const URL = "https://jsonplaceholder.typicode.com";
    const tareas = await solicitud(`${URL}/todos`);
    return tareas;
}