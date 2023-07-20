// no hcer import { Fragment } from "react";
import PropTypes from 'prop-types';

const getuser=()=>({
  nombre:' giane'
});
const user=getuser();
/*const newMessage= {
  message:'hola mundo',
  title:' gia'
}  */ 
//funciones siempre poner fuera a menos ue sea necesario poner dentro del esport const first
const getResult = (a,b) =>{
  return a+b;
}
export const FirstApp = ( {title,subTitle,name} ) => {
 //console.log(props);

  return (
    <>
    {/*<h1>{JSON.stringify(user)}</h1>}
    {/*<code>{JSON.stringify( newMessage)}</code>
    <h1> {getResult(1,2)}</h1>*/}
    <h1 data-testid="test-title">{ title }</h1>

    <p>{subTitle}</p>
    <p>{subTitle}</p>
    <p>{name}</p>
    </>
  )
}

FirstApp.propTypes = {
   title: PropTypes.string.isRequired,
   subTitle: PropTypes.string,

}
FirstApp.defaultProps = {
  //title: 'no hay titulo',
  subTitle: 'no hay subtitulo',
  name:'gia'
}