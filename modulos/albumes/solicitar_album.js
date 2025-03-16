import { solicitud } from "../helpers/solicitud.js";

export const getAlbum = async(URL)=>{
    const albums = await solicitud(`${URL}/albums`);
    return albums;
}