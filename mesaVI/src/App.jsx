import { Card } from './components/Card'
import data from './data/cities'

function App() {

  return (
    <div className="App">
      <h1>Lista de cidades do Brasil</h1>
      <ul className="container">
        {data.map((item, index) => <Card key={Date.now()+index} country={item.country} city={item.city} population={item.population} color={item. color}></Card>)}
      </ul>
    </div>
  )
}

export default App
