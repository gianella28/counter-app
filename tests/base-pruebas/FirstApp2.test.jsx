import { render, screen} from "@testing-library/react"
import { FirstApp } from "../../src/FirstApp"


describe('Pruebas en <firstapp/>',() => {
    const title ='hola soy gia';
    const subTitle= 'Soy un Subtitulo'
    test('debe de hacer watch con el snapshot',()=>{
        
        const {container} = render( <FirstApp title={ title } />);
        expect( container ).toMatchSnapshot();

    });

    test('debe de mostrar el mensaje "hola, soy gia"',()=>{
        render( <FirstApp title={ title }/>);
        expect (screen.getByText(title)).toBeTruthy();

    });

    test('debe de mostrar el titulo en un h1', () =>{
        render( <FirstApp title={ title }/>);
        expect (screen.getByRole('heading',{level:1}).innerHTML).toContain(title);
    });

    test('debe de mostrar el subtitulo enviado por los props',()=>{
        render( 
        <FirstApp 
            title={ title }
            subTitle={subTitle}
        />
        );
        expect( screen.getAllByText(subTitle).length).toBe(2);
    });
});