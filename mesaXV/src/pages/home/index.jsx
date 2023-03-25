import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function HomePage() {
    const url = "https://api-aluno.vercel.app/aluno";
    const [students, setStudents] = useState([]);
    const [name, setName] = useState("");
    const [registration, setRegistration] = useState("");
    const [course, setCourse] = useState("");
    const [period, setPeriod] = useState("");
    const [id, setId] = useState("");
    const navigate = useNavigate();

    // function clear() {
    //     setId("");
    //     setName("");
    //     setRegistration("");
    //     setCourse("");
    //     setPeriod("");
    // }

    async function getStudents() {
        try {
            const res = await axios.get("https://api-aluno.vercel.app/aluno");
            setStudents(res.data)
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    async function deleteStudent(id){
        try{
            await axios.delete(`https://api-aluno.vercel.app/aluno/${id}`);
            getStudents();
        } catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        getStudents();
    })

    return (
        <div className='ulDiv'>
            <h1>Exibição de Alunos</h1>
            <button className="navigateButton" onClick={() => navigate('/form')}>Formulário</button>
            <ul> {students.map((it) => (
                <li key={it._id}>
                    <h2>{it.nome}</h2>
                    <p>Matricula: {it.matricula}</p>
                    <p>Curso: {it.curso}</p>
                    <p>Bimestre: {it.bimestre}</p>
                    <button className='formButton' onClick={() => { 
                        navigate(`form/${it._id}`)}}>Editar</button>
                    <button className='formButton' onClick={() => deleteStudent(it._id)}>Deletar</button>
                </li>
            ))}
            </ul>
        </div>
    )

}