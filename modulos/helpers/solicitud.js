export const solicitud = async url => {// Función asíncrona que realiza una solicitud HTTP y devuelve los datos en formato JSON.
  try {
    const peticion = await fetch(url);// Se hace la solicitud a la URL.
    const data = await peticion.json();// Se convierte la respuesta en formato JSON.
    return data // Se devuelve la data obtenida.
  } catch (error) {
    alert(error);
  }
}
