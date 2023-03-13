import { useState } from 'react'
import Card from './components/Card'

function App() {
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [pokemon, setPokemon] = useState("");

  const data = {
    name,
    age,
    pokemon
  }

  function add(){
    setList([...list, data])
    setAge("");
    setName("");
    setPokemon("");
  }

  return (
    <div className="App">
      <h1>Formulário</h1>
      <form>
        <input type="text" placeholder='Nome completo' value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder='Idade' value={age} onChange={(e) => setAge(e.target.value)}/>
        <input type="text" placeholder='Pokemon favorito' value={pokemon} onChange={(e) => setPokemon(e.target.value)}/>
        <input type="button" className='button' value="Registrar" onClick={add}/>
      </form>
        <ul> {list.map((list, index) => <Card key={Date.now()+index} name={list.name} age={list.age} pokemon={list.pokemon}></Card>)} </ul>
    </div>
  )
}

export default App
