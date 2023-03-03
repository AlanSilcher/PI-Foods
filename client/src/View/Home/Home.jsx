import CardCountainer from "../../Components/CardCountainer/CardCountainer"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { getRecipes } from "../../redux/actions"
import Paginated from "../../Components/Paginated/Paginated"
import OrderAlphabetical from "../../Components/Order/OrderAlphabetical"
import OrderHealthScore from "../../Components/Order/OrderHealthScore"
import FilterForDiets from "../../Components/Filter/FilterDiets"
import SearchBar from "../../Components/SearchBar/SearchBar"
import styles from './Home.module.css'
import { Link } from "react-router-dom"
import FilterForOrigin from "../../Components/Filter/FilterOrigin"

const Home = () => { 
    const [ currentPage, setcurrentPage] = useState(1)
    const [ postPerPage, setpostPerPage] = useState(9)
    const[orderName, setorderName] = useState('')
    const[orderHealtScore, setorderHealtScore] = useState('') 
    

    const recipes = useSelector(state => state.recipes)
    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(getRecipes())
    },[])

   

    if(recipes === "there are no recipes with that name"){
        return(
            <div className={styles.homeNotRecipes}>
        <SearchBar/>
        <div className={styles.container}>
        <OrderAlphabetical setorderName={setorderName}/>
        <OrderHealthScore setorderHealtScore={setorderHealtScore}/>
        <FilterForDiets/>
        <FilterForOrigin/>
        <Link to="/form">
            <button className={styles.formButton}>Create recipe</button>
        </Link>
        </div>
        <h1 className={styles.notRecipes}>There are no recipes with that name</h1>
        </div>
        ) 
    }

    const lastPostIndex = currentPage * postPerPage 
    const firtPostIndex = lastPostIndex - postPerPage 
    const currentPosts = recipes.slice(firtPostIndex, lastPostIndex)


    return (
        <div className={styles.home}>
        <SearchBar/>
        <div className={styles.container}>
        <OrderAlphabetical setorderName={setorderName}/>
        <OrderHealthScore setorderHealtScore={setorderHealtScore}/>
        <FilterForDiets/>
        <FilterForOrigin/>
        <Link to="/form">
            <button className={styles.formButton}>Create recipe</button>
        </Link>
        </div>
        <CardCountainer recipes={currentPosts}/>   
        <Paginated totalPosts={recipes.length} postPerPage={postPerPage} setcurrentPage={setcurrentPage}/>
        </div>
    )
}

export default Home