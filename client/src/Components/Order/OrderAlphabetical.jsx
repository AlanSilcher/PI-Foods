import { alphabeticalOrder} from "../../redux/actions";
import { useDispatch } from "react-redux";
import styles from './OrderAlphabetical.module.css'

const OrderAlphabetical = ({setorderName}) => {  
    const dispatch = useDispatch()
   
    function handleSort (e){
        e.preventDefault()
        dispatch(alphabeticalOrder(e.target.value))
        setorderName(`ordenado ${e.target.value}`)
    }

    return(
        <div>
            <select onChange={e => handleSort(e)} className={styles.selector}>
                    <option value="a-z">A-Z</option>
                    <option value="z-a">Z-A</option>
                </select> 
        </div>
        
    )

}

export default OrderAlphabetical

