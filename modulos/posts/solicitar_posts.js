import { solicitud } from "../helpers/solicitud.js";

export const getPost = async(URL)=>{
    const posts = await solicitud(`${URL}/posts`);
    return posts;
}