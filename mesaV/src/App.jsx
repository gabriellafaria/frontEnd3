import { Card } from '../components/Card'
import data from '../data/products'
function App() {

  return (
    <div className="App">
      <h1>Produtos</h1>
      <ul>
        {data.map((item, index) => <Card key={index} name={item.name} image={item.image} price={item.price}></Card>)}
      </ul>
    </div>
  )
}

export default App
