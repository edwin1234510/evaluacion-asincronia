import { solicitud } from "../helpers/solicitud.js";

export const getNamePhone = async (URL)=>{
    const users = await solicitud(`${URL}/users`);
    return Promise.all(users.map(async(user)=>{
        return {
            "nombre" : user.name,
            "telefono": user.phone
        }
    }))
}