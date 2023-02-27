import { Link } from "react-router-dom"
import styles from './Landing.module.css'

const Landing = () => {
    return (
        <div className={styles.landing}>
        <h1 className={styles.welcome}>Welcome</h1>
            <Link to= '/home'> 
            <button className={styles.button}>Start</button>
            </Link>
        </div>
    )
}

export default Landing