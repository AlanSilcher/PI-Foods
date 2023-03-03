import { useEffect } from "react";
import { useDispatch  , useSelector} from "react-redux";
import { useParams } from "react-router-dom";
import { getRecipesById } from "../../redux/actions";
import styles from "./Detail.module.css"

const Detail = (props) => {
    const {id} = useParams()

    const dispatch = useDispatch() 

    useEffect (() => {
        dispatch(getRecipesById(id))
    } ,[]) 

  const detail = useSelector(state => state.details)

  let sol = `${detail.description}`
  let summary = sol.replace(/<\/?b>/g,'').replace(/<\/?a[^>]*>/g, '')

  return(
        <div className={styles.container}>
        <div className={styles.card}>
            <img src={detail.image}  className={styles.image}/>
            <h1 className={styles.title}>{detail.name}</h1>
            <h3 className={styles.data}>Id: {detail.id}</h3>
            <h3 className={styles.data}>healthScore: {detail.healthScore}</h3>
            <h3 className={styles.data}>Types of diets: {Array.isArray(detail.dietName)? detail.dietName.join(', '): "It does not belong to any diet"}</h3>
            <h4 className={styles.text}>Description: {summary}</h4>
            <h3 className={styles.text}>Steps: {Array.isArray(detail.steps)? detail.steps.map(el => el.step)
                :"it doesn't have any steps"}</h3>
        </div>
        </div>
    )
}

export default Detail