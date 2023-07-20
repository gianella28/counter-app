
describe('Pruebas en <DemoComponent/>', () => { 
   test( ' esta prueba no debe de fallar ', () => {
      //1. inicializacion
    
      const menssage1='hola mundo';
      //2. estimulo
    
      const menssage2 = menssage1.trim();
    
      //3. observar el comportamiento ... esperado
    
      expect (menssage1 ).toBe(menssage2);


   });

});