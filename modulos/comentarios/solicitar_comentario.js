import { solicitud } from "../helpers/solicitud.js";

export const getComentario = async(URL)=>{
    const coments = await solicitud(`${URL}/comments`);
    return coments
}