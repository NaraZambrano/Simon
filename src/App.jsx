import { useState, useEffect } from 'react'
import './App.css'


function App() {


 const [colors, setColor] = useState([
   {
     color:'#030AFA',
     opacity: 0.2
   },
   {
     color:'#FAF303',
     opacity: 0.2
   },
   {
     color:'#0AFA03',
     opacity: 0.2
   },
   {
     color:'#FA0E03',
     opacity: 0.2
   }
 ]);
 const [sequence, setSequence] = useState([]);
 const [currentGame, setCurrentGame] = useState([]);
 const [turn, setTurn] = useState(null);
 const [isAllowedToPlay, setIsAllowedToPlay] = useState(false)


 const handleClick = (index) => {
   setCurrentGame([...currentGame, index]);
   //check if index === sequence[turn]
    
 }


 const randomNumber = () => {
  
   const minNumber = 0;
   const maxNumber = 3;
   const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
   setSequence([...sequence, randomNumber]);
  
 }


 useEffect(() => {
   //Check all sequence
   sequence.map((elem, index)=> {
     if(elem === currentGame[index]){
       //
     } else {
       console.log(`ELSE elem ${elem}`)
       console.log(`ELSE game ${currentGame[index]}`)
       //setSequence([]);
       //setCurrentGame([])
       setIsAllowedToPlay(false);
     }     
   })
  
   if(sequence.length === currentGame.length && sequence.length > 0) setIsAllowedToPlay(true);
  
 }, [currentGame])
  useEffect(() => {
   if(isAllowedToPlay){
     randomNumber();
   } else {
     setSequence([]);
     setCurrentGame([]);
    
   }


 }, [isAllowedToPlay])


 useEffect(() => {
   randomNumber();
 }, [])
  useEffect(() => {
   const tempArray = [...colors];
  
   /*sequence.map(index => {
     tempArray[index].opacity = 1;
    
     setColor(tempArray);
     console.log(colors)
     setTimeout(() => {
       console.log("Retrasado por 1 segundo.");
       tempArray[index].opacity = 0.2;
       console.log(tempArray)


       setColor(colors);
     }, 1000);
   })*/ 
 }, [sequence])


 return (
   <>
     <div className='header'>
       <h1>SUPER SIMON</h1>
       <p>Game {sequence}</p>
       <p>Player {currentGame}</p>
     </div>
     <div className='container'>
       {
        
         colors.map((item, index) => {
           return (<div
             key={index}
             className={`pad pad-${index}`}
             style={{backgroundColor:`${item.color}`, opacity:`${item.opacity}`}}
             onClick={() => handleClick(index)}
           >
           </div>)
         })
       } 
     </div> 
    
    
   </>
 )
}


export default App


/*
1.- Interfaz de cartón[SOLVED]
2.- Detectar click en los componentes[SOLVED]
3.- Crear array para almacenar la secuencia del juego[SOLVED]
4.- Crear el color random para añadirlo a la secuencia [SOLVED]
4.5.- Reproducir secuencia modo FAKE
5.- Reproducir la secuencia -- HARD
   a)Iniciar color, activar color
   b)Establecer un timeout, activamos y desactivamos colores
   c)Recorrer secuencia
   f)Al finalizar la secuencia debemos saber que cambia el turno al jugador
6.- Usuario intenta reproducir secuencia
7.- Validar secuencia usuario por cada pulsación
8.- Si acierta la pulsación sigue el juego
9.- Si no acierta el juego termina ylimpiamos la secuencia del juego


OPCIONAL
-Máxima puntuación
-Sonido
-Tiempo










*/

