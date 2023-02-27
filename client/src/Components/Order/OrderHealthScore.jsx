import { useDispatch } from "react-redux";
import { healthScoreOrder } from "../../redux/actions";
import styles from './OrderHealthScore.module.css'

const OrderHealthScore = ({setorderHealtScore}) => {  
    const dispatch = useDispatch()
   
    function handleSort (e){
        e.preventDefault();
        dispatch(healthScoreOrder(e.target.value))
        setorderHealtScore(`ordenado ${e.target.value}`)
    }

    return(
        <div>
            <select onChange={e => handleSort(e)} className={styles.selector}>
                    <option value="more-less">Lower health score</option>
                    <option value="less-more">Higher health score</option>
                </select> 
        </div>
        
    )

}

export default OrderHealthScore



/* const OrderAlphabetical = ({setorderName}) => {  
    const dispatch = useDispatch()

    return(
        <div>
            <select onChange={e => handleSort(e)}>
                    <option value="a-z">A-Z</option>
                    <option value="z-a">Z-A</option>
                </select> 
        </div>
        
    )

} */
