import { useEffect } from 'react';
import { useState } from 'react'
import './index.css'

function App() {
  const [users, setUsers] = useState([]);

  const convertDate = (data) => { const [ano, mes, dia] = data.split("-"); return `${dia}/${mes}/${ano}`; }; 

  async function getUsers(){
    try{
      const res = await fetch('https://dummyjson.com/users');
      const data = await res.json();
      setUsers(data.users)
    } catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <div className="App">
      <h1>Usuários</h1>
      <ul>
        {users.map((usr) => (<li> 
          <h3>{usr.firstName} {usr.maidenName} {usr.lastName}</h3>
          <img src={usr.image} alt="imagem do usuário" />
          <p>{usr.age} anos de idade</p>
          <p>Sexo: {usr.gender}</p>
          <p>E-mail: {usr.email}</p>
          <p>Data de nascimento: {convertDate(usr.birthDate)}</p>
          <p>Tipo sanguíneo: {usr.bloodGroup}</p>
          <p>Altura: {usr.height}</p>
          <p>Peso: {usr.weight}</p>
          <p>Cidade: {usr.company.address.city}</p>
        </li>))}
      </ul>
    </div>
  )
}

export default App
