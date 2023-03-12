import { useState } from 'react'
import { Card } from './components/Card'

function App() {
  const [number, setNumber] = useState([])
  function handleClik() {
    setNumber([...number, number.length+1])
  }

  return (
    <div className="App">
      <h1>Lista de numéros</h1>
     <ul>{number.map((number, index) => <Card key={Date.now()+index} number={number}>teste</Card>)}</ul>
     <button onClick={handleClik}>Clique aqui</button>
    </div>
  )
}

export default App
