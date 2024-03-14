import { useState } from 'react'
import './App.css'

function App() {
   /* crear un useState*/
  const [Colors, setColor] = useState(['#bd0b51', '#093679', '#32ac17', '#d0e92a']);
  const[sequence, setSequence]= useState([]);
  const handleClick = (index) =>
{
  console,console.log((index));
}
const randomNumber = () => {
  const minNumber = 0;
  const maxNumber = 3;
  /*coger un random entre dos valores mirar cofigo en documentacion que sean inclusivos mochiladeveloper mwd*/
  const randomNumber = Math.random() * (maxNumber - minNumber +1) + minNumber;
  setSequence([...sequence, randomNumber]);/*sequencia hecha con gia de mocilla*/
}
  return (
    <>
      <div className='header'>
        <h1>Super Simon</h1>
        <p>(sequence)</p>
      </div>
      <div className='container'>
        {
          Colors.map((color, index) => {
        return <div 
        key={index} 
        className='pad pad-${index}' 
        style={{
          backgroundColor:`$(color)`}}
        onClock={() => handleClick(index)}
        >
        </div>

      })

      }
    </div>
      

    </>
  )
}

export default App
/*
1. hacer comentarios 
2. 
7. validar 
8. si acepta la validacion  (solved)
*/