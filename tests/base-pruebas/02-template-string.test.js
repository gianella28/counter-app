import { getSaludo } from '../../src/base-pruebas/02-template-string';



describe('pruebas en 02-template-string', () => {
    test('getSaludo debe retornar "Hola gia"' ,() => {
     
    const name ='gia';
    const menssage = getSaludo(name);

     expect (menssage).toBe(`Hola ${name}` )
    });
})