import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const url = "https://api-aluno.vercel.app/aluno";
  const [students, setSetstudents] = useState([]);
  const [name, setName] = useState("");
  const [registration, setRegistration] = useState("");
  const [course, setCourse] = useState("");
  const [period, setPeriod] = useState("");
  const [id, setId] = useState("");
  
  function clear() {
    setId("");
    setName("");
    setRegistration("");
    setCourse("");
    setPeriod("");
  }
  
  function fill(student){
    setId(student._id);
    setName(student.nome);
    setRegistration(student.matricula);
    setCourse(student.curso);
    setPeriod(student.bimestre);
  }
  
  async function getStudents(){
    try{
      const res = await axios.get(url);
      setSetstudents(res.data);
      console.log(res.data);
    } catch (err){
      console.log(err);
    }         
  }
  
  async function addStudents(e){
    e.preventDefault();
    try{
      const res = await axios.post(url, {
        nome: name,
        matricula: registration,
        curso: course,
        bimestre: period,
      });
      clear();
      getStudents();
    } catch(err){
      console.log(err);
    }
  }
  
  async function editStudent(e){
    e.preventDefault();
    try{
      await axios.put(`https://api-aluno.vercel.app/aluno/${id}`, {
        nome: name,
        matricula: registration,
        curso: course,
        bimestre: period,
      })
      clear();
      getStudents();
    } catch(err){
      console.log(err);
    }
  }

  async function deleteStudent(id){
    try{
      await axios.delete(`https://api-aluno.vercel.app/aluno/${id}`);
      getStudents();
    } catch (err) {
      console.log(err);
    }
  } 

  useEffect(() =>{
    getStudents()
  }, [])


  return (
    <div className='content'>
      <div className='formDiv'>
      <h1>Exibição de Alunos</h1>

      <form onSubmit={id ? editStudent : addStudents}>
        <input type="text" value={name} placeholder="Digite o nome" onChange={(e) => setName(e.target.value)}/>
        <input type="text" value={registration}  placeholder="Digite a matrícula" onChange={(e) => setRegistration(e.target.value)}/>
        <input type="text" value={course} placeholder="Digite o curso" onChange={(e) => setCourse(e.target.value)} />
        <input type="text" value={period} placeholder="Digite o bimestre" onChange={(e) => setPeriod(e.target.value)} />
        <input type="submit" className='submitInput' value={id ? "Editar" : "Salvar"} />
      </form>
      </div>
      <div className='ulDiv'>
      <ul> {students.map((it) => (
        <li key={it._id}>
          <h2>{it.nome}</h2>
          <p>Matricula: {it.matricula}</p>
          <p>Curso: {it.curso}</p>
          <p>Bimestre: {it.bimestre}</p>
          <button className='formButton' onClick={() => fill(it)}>Editar</button>
          <button className='formButton' onClick={() => deleteStudent(it._id)}>Deletar</button>
        </li>
      ))}
      </ul>
      </div>
    </div>
  )
}

export default App
