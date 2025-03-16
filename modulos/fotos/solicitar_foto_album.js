import { getFotos } from "./solicitar_fotos.js";

export const getFotoAlbum = async(URL,album)=>{
    const fotos = await getFotos(URL);
    const foto = fotos.filter((foto) => foto.albumId == album.id);
    return foto
}