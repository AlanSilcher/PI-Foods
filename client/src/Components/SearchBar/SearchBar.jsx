import { useDispatch } from "react-redux"
import { getRecipesByName } from "../../redux/actions"
import { getRecipes } from "../../redux/actions"
import { useState } from "react"
import styles from './SearchBar.module.css'

const SearchBar = () => {  
    const[search, setSearch] = useState('')
    const dispatch = useDispatch()

    function handleInputChange (e) {
        setSearch(e.target.value)
      }
    
    function handlerClick (e) {
        e.preventDefault()
        if (search !== '') {
            dispatch(getRecipesByName(search))
        }else{
            dispatch(getRecipes())
        }
    }
    
    return(
        <div className={styles.wrapper}>
            <input type="text" placeholder="Search recipe" onChange={handleInputChange} className={styles.search}/>
            <button onClick={handlerClick} className={styles.button}>Search</button>
        </div>
    )

}

export default SearchBar