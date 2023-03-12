export function Card(props){
    const {name, image, price} = props;
    return(
        <li>
            <h2>{name}</h2>
            <img src={image} alt={name} />
            <h2>{price}</h2>
        </li>
    )
}