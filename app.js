// Importación de funciones desde los módulos correspondientes.
// Estas funciones permiten interactuar con la API para obtener datos de usuarios, tareas, álbumes, fotos, posts y comentarios.
import { solicitar_usuarios, listar_userName, getNamePhone } from "./modulos/usuarios/index.js";
import { solicitar_tarea_p } from "./modulos/tareas/index.js";
import { getAlbumesUsuario } from "./modulos/albumes/index.js";
import { getFotoAlbum } from "./modulos/fotos/index.js";
import { getPostTitle, getPostId } from "./modulos/posts/index.js";
import { getComentPost } from "./modulos/comentarios/index.js";

// URL base de la API desde la cual se obtendrán los datos.
const URL = "https://jsonplaceholder.typicode.com";

// Bucle infinito para mantener el programa en ejecución hasta que el usuario decida salir.
while (true) {
  // Menú de opciones que se muestra al usuario.
  let opcion = prompt(`Seleccione una opción:
1. Listar todas las tareas pendientes por cada usuario registrado en la API.
2. Buscar usuario por nombre de usuario y listar sus datos, álbumes y fotos.
3. Filtrar posts por título y mostrar sus comentarios.
4. Obtener el nombre y teléfono de todos los usuarios.
5. Obtener toda la información de usuarios, posts, comentarios, álbumes y fotos.
0. Salir del programa.`);

  // Opción 1: Listar todas las tareas pendientes de cada usuario.
  if (opcion == 1) {
    // Función asíncrona para obtener las tareas pendientes de cada usuario.
    const tareas_pe = async () => {
      // Obtiene la lista de todos los usuarios.
      const usu = await solicitar_usuarios(URL);
      // Retorna una promesa que resuelve un arreglo de usuarios con sus tareas pendientes.
      return Promise.all(
        usu.map(async (usuario) => {
          // Obtiene las tareas pendientes del usuario actual.
          const tareas_pendiente = await solicitar_tarea_p(URL, usuario);
          // Retorna un objeto que combina los datos del usuario con sus tareas pendientes.
          return { ...usuario, tareas_pendiente };
        })
      );
    };
    // Ejecuta la función y muestra los datos en la consola.
    await tareas_pe().then((data) => {
      console.log(data);
    });
  }

  // Opción 2: Buscar usuario por nombre de usuario y listar sus álbumes con fotos.
  else if (opcion == 2) {
    // Solicita al usuario que ingrese un nombre de usuario.
    let nom = prompt(`Ingrese el nombre de usuario (username):`);
    // Función asíncrona para obtener los datos del usuario y sus álbumes con fotos.
    const usuario_name = async () => {
      // Obtiene los usuarios que coinciden con el nombre de usuario proporcionado.
      const usuarios = await listar_userName(URL, nom);
      // Retorna una promesa que resuelve un arreglo de usuarios con sus álbumes y fotos.
      return Promise.all(
        usuarios.map(async (user) => {
          // Obtiene los álbumes del usuario actual.
          const albumes = await getAlbumesUsuario(URL, user);
          // Obtiene las fotos de cada álbum.
          const albumFotos = Promise.all(
            albumes.map(async (album) => {
              const fotoAlbum = await getFotoAlbum(URL, album);
              return { ...album, fotoAlbum }; // Combina el álbum con sus fotos.
            })
          );
          // Retorna un objeto que combina los datos del usuario con sus álbumes y fotos.
          return { ...user, albumFotos };
        })
      );
    };
    // Ejecuta la función y muestra los datos en la consola.
    await usuario_name().then((datos) => {
      console.log(datos);
    });
  }

  // Opción 3: Filtrar posts por título y agregar sus comentarios.
  else if (opcion == 3) {
    // Solicita al usuario que ingrese un título de post.
    let titulo = prompt("Ingrese el título del post:");
    // Crea una expresión regular con el título proporcionado para realizar la búsqueda.
    const regex = new RegExp(titulo);
    // Función asíncrona para obtener los posts que coinciden con el título y sus comentarios.
    const get_postTitulo = async () => {
      // Obtiene los posts que coinciden con la expresión regular.
      const posts = await getPostTitle(URL, regex);
      // Retorna una promesa que resuelve un arreglo de posts con sus comentarios.
      return Promise.all(
        posts.map(async (post) => {
          // Obtiene los comentarios del post actual.
          const comment = await getComentPost(URL, post);
          // Retorna un objeto que combina el post con sus comentarios.
          return { ...post, comment };
        })
      );
    };
    // Ejecuta la función y muestra los datos en la consola.
    await get_postTitulo().then((data) => {
      console.log(data);
    });
  }

  // Opción 4: Obtener el nombre y teléfono de todos los usuarios.
  else if (opcion == 4) {
    // Ejecuta la función `getNamePhone` para obtener el nombre y teléfono de todos los usuarios.
    await getNamePhone(URL).then((data) => {
      console.log(data); // Muestra los datos en la consola.
    });
  }

  // Opción 5: Obtener toda la información de usuarios, posts, comentarios, álbumes y fotos.
  else if (opcion == 5) {
    // Función asíncrona para obtener toda la información de los usuarios.
    const informacionTotal = async () => {
      // Obtiene la lista de todos los usuarios.
      const usuarios = await solicitar_usuarios(URL);
      // Retorna una promesa que resuelve un arreglo de usuarios con toda su información.
      return Promise.all(
        usuarios.map(async (user) => {
          // Obtiene los posts del usuario actual.
          const posts = await getPostId(URL, user);
          // Obtiene los álbumes del usuario actual.
          const albums = await getAlbumesUsuario(URL, user);
          // Obtiene los comentarios de cada post.
          const postComents = Promise.all(
            posts.map(async (post) => {
              const coments = await getComentPost(URL, post);
              return { ...post, coments }; // Combina el post con sus comentarios.
            })
          );
          // Obtiene las fotos de cada álbum.
          const albumFotos = Promise.all(
            albums.map(async (album) => {
              const fotos = await getFotoAlbum(URL, album);
              return { ...album, fotos }; // Combina el álbum con sus fotos.
            })
          );
          // Retorna un objeto que combina los datos del usuario con sus posts, comentarios, álbumes y fotos.
          return { ...user, postComents, albumFotos };
        })
      );
    };
    // Ejecuta la función y muestra los datos en la consola.
    await informacionTotal().then((data) => {
      console.log(data);
    });
  }

  // Opción 0: Salir del programa.
  else if (opcion == 0) {
    alert("Finalizó el programa"); // Muestra un mensaje de despedida.
    break; // Rompe el bucle while y finaliza el programa.
  }

  // Opción inválida: Si el usuario ingresa una opción no válida.
  else if (opcion > 5 || opcion < 0) {
    alert("Opción no válida. Por favor, seleccione una opción del menú.");
  }

  // Mensaje para continuar.
  alert("Presione continuar para seleccionar un nuevo ejercicio.");
}