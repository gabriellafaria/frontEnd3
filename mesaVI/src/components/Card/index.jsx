import styles from "./style.module.css"

export function Card(props) {
    const {country, city, population, color} = props;
    return(
        country !== "BRA" ? null : (
            <li className={styles} style={{backgroundColor: color}}>
                <h2>{country}</h2>
                <h2>{city}</h2>
                <p>Population: {population}</p>
            </li>
        )
    )
}