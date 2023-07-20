import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';
import { HelloWorldApp } from './HelloWorldApp';
import { CounterApp } from './CounterApp';
import './styles.css';
//renderizar la aplicacion
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
       {/* <CounterApp value={20} />
        <FirstApp  title="hola, soy vegeta"/>*/}
        <CounterApp value={10}/>
    </React.StrictMode>
);

