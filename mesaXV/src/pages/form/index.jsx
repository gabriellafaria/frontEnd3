import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

export default function FormPage() {
    const [students, setStudents] = useState([]);
    const [name, setName] = useState("");
    const [registration, setRegistration] = useState("");
    const [course, setCourse] = useState("");
    const [period, setPeriod] = useState("");
   // const [sId, setSId] = useState("");
    const navigate = useNavigate();

    const {id} = useParams();

    function clear() {
      //  setId("");
        setName("");
        setRegistration("");
        setCourse("");
        setPeriod("");
    }


    // function fill(id) {
    //     getStudentsId(id);
    //     setSId(students._id);
    //     setName(students.nome);
    //     setRegistration(students.matricula);
    //     setCourse(students.curso);
    //     setPeriod(students.bimestre);
    // }

    async function addStudents(e) {
        e.preventDefault();
        try {
            await axios.post("https://api-aluno.vercel.app/aluno", {
                nome: name,
                matricula: registration,
                curso: course,
                bimestre: period,
            });
            clear();
            navigate("/")
        } catch (err) {
            console.log(err);
        } 
    }

    async function getStudentsId(id){
        try{
            const res = await axios.get(`https://api-aluno.vercel.app/aluno/${id}`);
            console.log(res.data);
            //setStudents(res.data);
            
            setName(res.data.nome);
            setRegistration(res.data.matricula);
            setCourse(res.data.curso);
            setPeriod(res.data.bimestre);
        } catch(err){
            console.log(err);
        }
    }

    id ?  useEffect(()=> {getStudentsId(id)}, []) : '';

    async function editStudent(e) {
        e.preventDefault();
        try {
            await axios.put(`https://api-aluno.vercel.app/aluno/${id}`, {
                nome: name,
                matricula: registration,
                curso: course,
                bimestre: period,
            });
            clear();
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='formDiv'>
            <h1>Formulário para {id ? 'editar' : 'cadastrar'} alunos</h1>
            <form onSubmit={id ? editStudent : addStudents}>
                <input type="text" value={name} placeholder="Digite o nome" onChange={(e) => setName(e.target.value)} />
                <input type="text" value={registration} placeholder="Digite a matrícula" onChange={(e) => setRegistration(e.target.value)} />
                <input type="text" value={course} placeholder="Digite o curso" onChange={(e) => setCourse(e.target.value)} />
                <input type="text" value={period} placeholder="Digite o bimestre" onChange={(e) => setPeriod(e.target.value)} />
                <input type="submit" className='submitInput' value={id ? "Editar" : "Salvar"} />
            </form>
        </div>
    )
}