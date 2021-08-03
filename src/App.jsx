import React from 'react'
import './App.css'

import Result from './componentes/Result'
import Button from './componentes/Button'


// Función Flecha o Arrow Function
const App = () => {

     
    const clickHandler = (text) => {
        console.log(text);
    }
    // Lo que ejecuta la función
    console.log("Renderización de App")
    return (
    <main className='react-calculator'>
        <Result value={undefined}></Result>
        <div className="numbers">
            <Button text="1" clickHandler={clickHandler}></Button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>0</button>
        </div>
        <div className="functions">
            <button>
                clear
            </button>
            <button>
                r
            </button>
        </div>
        <div className="math-operations">
            <button>+</button>
            <button>-</button>
            <button>*</button>
            <button>/</button>
            <button>=</button>
        </div>
    </main>)
}

export default App

