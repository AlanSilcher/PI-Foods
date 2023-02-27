import styles from "./Card.module.css"
import { Link } from "react-router-dom"

const Card = (props) => {
    return(
        <Link to={`/detail/${props.id}`} className={styles.link}>
        <div key = {props.id} className={styles.card}>
           <img className={styles.image} src={props.image}/>
            <p className={styles.title}>{props.name}</p>
            <div className={styles.diets}>
           <p className={styles.listItem}>{Array.isArray(props.diets)? props.diets.join(', '): "It does not belong to any diet"}</p>
           </div>
        </div>
        </Link>
    )
}


export default Card