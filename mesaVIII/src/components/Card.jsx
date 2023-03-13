export default function Card(props){
    const {name, age, pokemon} = props;
    return (
        <li>
            <h2>{name}</h2>
            <h3>{age}</h3>
            <h3>{pokemon}</h3>
        </li>
    )   
}