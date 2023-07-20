
import { fireEvent, render,screen } from "@testing-library/react";
import { CounterApp} from "../../src/CounterApp";


describe('Pruebas en <counterApp/>',() => {
    const inivalue =10;
    
    test('debe de hacer match con el snapshot',()=>{
        
        const {container} = render( <CounterApp value={inivalue} />);
        expect( container ).toMatchSnapshot();

    });

    test(' debe de mostrar el valor inicial de 100',()=>{
        render (<CounterApp value={10}/>);
        expect(screen.getByText(10)).toBeTruthy();
        //o este opcion 2
        //expect (screen.getByRole('heading',{level:2}).innerHTML).toContain('100');
    })

    test('debe de incrementar con el boton +1',()=>{
        render(<CounterApp value={inivalue}/>);
        fireEvent.click( screen.getByText('+1') )

        expect( screen.getByText('11')).toBeTruthy();
    })

    test('debe de decrementar con el boton -1',()=>{
        render(<CounterApp value={inivalue}/>);
        fireEvent.click( screen.getByText('-1') )

        expect( screen.getByText('9')).toBeTruthy();
    })

    test('debe de funcionar el boton de reset', ()=>{
        render(<CounterApp value={ 355 }/>);
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
       // fireEvent.click( screen.getByText('reset'));
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
        expect( screen.getByText(355)).toBeTruthy();
    })
});
