import { solicitar_usuarios,listar_userName,getNamePhone } from "./modulos/usuarios/index.js";
import { solicitar_tarea_p } from "./modulos/tareas/index.js";
import {getAlbumesUsuario} from "./modulos/albumes/index.js"
import { getFotoAlbum } from "./modulos/fotos/index.js";
import {getPostTitle,getPostId} from "./modulos/posts/index.js"
import { getComentPost } from "./modulos/comentarios/index.js";


const URL = "https://jsonplaceholder.typicode.com";
while (true) {
    let opcion = prompt(`1. Listar todas las tareas pendientes por cada usuario registrado en la API
2. Pedir por teclado el nombre de usuario y listar los datos del usuario que concuerden
con el nombre de usuario (username), anexo a los datos del usuario se debe listar
en el mismo resultado todos los álbumes del usuario con sus respetivas fotografías.
3. Programar una función que nos sirva para filtrar los posts por su nombre, el nombre
debe ser solicitado por teclado, luego se debe agregar los comentarios.
4. Consultar todos los usuarios y modificar la respuesta, el resultado de esta consulta
debe ser un nuevo arreglo solo con el nombre y teléfono de cada usuario.
5. Solicitar todos los usuarios en una única petición, a estos usuarios le debemos
agregar todos sus posts y a cada post le debemos agregar todos sus comentarios.
Luego a cada usuario le agregamos todos sus álbumes y a cada álbum le
agregamos todas sus fotografías.
0. para salir del programa`);
    if(opcion == 1){
        const tareas_pe = async()=>{
            const usu = await solicitar_usuarios(URL);
           return Promise.all(usu.map(async(usuario)=>{
            const tareas_pendiente = await solicitar_tarea_p(URL,usuario)
            return{...usuario, tareas_pendiente}
            }))
        }
        await tareas_pe().then((data)=>{
            console.log(data);
        })
    }
    else if(opcion == 2){
        let nom = prompt(`ingrese el user name del usuarios`);
        const usuario_name = async()=>{
            const usuarios = await listar_userName(URL,nom)
            return Promise.all(usuarios.map(async(user)=>{

                const albumes = await getAlbumesUsuario(URL,user);
                const albumFotos = Promise.all(albumes.map(async(album)=>{
                    const fotoAlbum = await getFotoAlbum(URL,album);
                    return{...album, fotoAlbum}
                }))
                return{...user,albumFotos}
            }))
        }
        await usuario_name().then((datos)=>{
            console.log(datos);
            
        })
    }
    else if(opcion == 3){
        let titulo = prompt("ingrese el titulo del post");
        const regex = new RegExp(titulo);
        const get_postTitulo = async()=>{
            const posts = await getPostTitle(URL,regex);
            return Promise.all(posts.map(async(post)=>{
                const comment = await getComentPost(URL,post);
                return {...post,comment}
            }))
        }
        await get_postTitulo().then((data)=>{
            console.log(data);
        })
    }
    else if(opcion == 4){
        await getNamePhone(URL).then((data)=>{
            console.log(data);
        })
    }
    else if(opcion == 5){
        const informacionTotal = async() =>{
            const usuarios = await solicitar_usuarios(URL);
            return Promise.all(usuarios.map(async(user)=>{
                const posts = await getPostId(URL,user);
                const albums = await getAlbumesUsuario(URL,user);
                const postComents = Promise.all(posts.map(async(post)=>{
                    const coments = await getComentPost(URL,post)
                    return{...post,coments}
                }))
                const albumFotos = Promise.all(albums.map(async(album)=>{
                    const fotos = await getFotoAlbum(URL,album)
                    return{...album,fotos}
                }))
                return{...user,postComents,albumFotos}
            }))
        } 
        await informacionTotal().then((data)=>{
            console.log(data);
        })
    }
    else if(opcion == 0){
        alert("finalizo el programa")
        break;
        
    }
    else if(opcion > 5 || opcion < 0){
        alert("no contamos con esa opcion")
    }
    alert("precione continuar para seleccionar un nuevo ejercicio");
}