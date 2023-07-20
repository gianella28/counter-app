import { render } from "@testing-library/react"
import { FirstApp } from "../../src/FirstApp"


describe('Pruebas en <firstapp/>',() => {
    /*test('debe de hacer match con el snapshot',() => {
        const title ='hola soy gia';
        const {container} = render( <FirstApp title={ title } />);
        console.log(container);
        
        expect(container).toMatchSnapshot();
    });*/

    test('debe mostrar el titulo en un h1',()=>{
        const title ='hola soy gia';
        const {container, getByText, getByTestId } = render( <FirstApp title={ title } />);
        expect( getByText(title) ).toBeTruthy();

       /* no es comun hacerlo
        const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain( title );*/

        expect(getByTestId('test-title').innerHTML).toContain(title)

    });

    test('debe de mostrar el subtitulo enviado por props',()=>{
        const title ='hola soy gia';
        const subTitle ='Soy un Subtitulo'
        const {getAllByText } = render( 
        <FirstApp 
            title={ title }
            subTitle= {subTitle}
        />);
        expect( getAllByText(subTitle).length ).toBe(2);

    });
});