// Exporta una constante llamada `solicitud` que es una función asíncrona.
// Esta función toma un parámetro `url`, que es la dirección a la que se hará la solicitud HTTP.
export const solicitud = async url => {
  // Inicia un bloque `try` para manejar posibles errores durante la ejecución del código.
  try {
    // Realiza una solicitud HTTP usando `fetch` a la URL proporcionada.
    // `await` pausa la ejecución hasta que la promesa de `fetch` se resuelva.
    const peticion = await fetch(url);
    // Convierte la respuesta de la solicitud en formato JSON.
    // `await` pausa la ejecución hasta que la promesa de `.json()` se resuelva.
    const data = await peticion.json();
    // Retorna los datos obtenidos en formato JSON.
    return data 
  } catch (error) {
    // Si ocurre un error en el bloque `try`, se ejecuta este bloque `catch`.
    // Muestra una alerta en el navegador con el error capturado.
    alert(error);
  }
}
