import { string } from "prop-types";
import { getImagen } from "../../src/base-pruebas/11-async-await";

describe ('prueba en 11-async- await.js', () =>{
    test('getimagen debe retornar un error de no encontrar la imagen ', async() => {
    //const url =await getImagen();
    const resp = await getImagen();
    //console.log(url);
    //expect(typeof url).toBe('string');
    expect(resp).toBe('no se encontro la imagen')
    })
});