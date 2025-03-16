import { getAlbum } from "./solicitar_album.js"


export const getAlbumesUsuario = async(URL,usuario)=>{
    const albums = await getAlbum (URL) 
    const albums_users = albums.filter((album) => album.userId == usuario.id);
    return albums_users;
}