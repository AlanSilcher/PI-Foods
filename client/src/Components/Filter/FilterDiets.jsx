import { useDispatch } from "react-redux"
import { filterDiets } from "../../redux/actions"
import styles from './FilterDiets.module.css'

const FilterForDiets = () => {
    const dispatch = useDispatch()

    function handleFilterTypeDiet (e) {
        dispatch(filterDiets(e.target.value))
        console.log("value", e.target.value)
    }


    return(
        <div>
    <select onChange={e => handleFilterTypeDiet(e)} className={styles.selector}>
                    <option value="all">All recipes</option>
                    <option value="gluten free">Gluten free</option>
                    <option value="dairy free">Dairy free</option>
                    <option value="lacto ovo vegetarian">Lacto ovo vegetarian</option>
                    <option value="vegan">Vegan</option>
                    <option value="paleolithic">Paleolithic</option>
                    <option value="primal">Primal</option>
                    <option value="whole 30">Whole 30</option>
                    <option value="pescatarian">Pescatarian</option>
                    <option value="ketogenic">Ketogenic</option>
                    <option value="fodmap friendly">Fodmap friendly</option>
                    <option value="vegetarian">Vegetarian</option>
                </select>
                </div>
    )
}

export default FilterForDiets