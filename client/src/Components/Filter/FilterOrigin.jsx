import styles from './FilterOrigin.module.css'
import { useDispatch } from "react-redux"
import { filterOrigins } from '../../redux/actions'

const FilterForOrigin = () => {
    const dispatch = useDispatch()

    function handleFilterOrigin (e) {
        dispatch(filterOrigins(e.target.value))
        console.log("value", e.target.value)
    }


    return(
        <div>
    <select onChange={e => handleFilterOrigin(e)} className={styles.selector}>
                    <option value="api">Api</option>
                    <option value="data base">Data base</option>
                </select>
                </div>
    )
}

export default FilterForOrigin