import { solicitar_usuarios } from "./solicitar_usu.js";

export const listar_userName = async(URL,userName)=>{
    const usuarios = await solicitar_usuarios(URL);
    const usuario = usuarios.filter((user) => user.username == userName)
    return usuario;
}