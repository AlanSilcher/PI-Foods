import Card from "../Card/Card"
import styles from "./CardCountainer.module.css"

const CardCountainer = ({recipes}) => {
    console.log("esto es recipes", recipes)
    if (!recipes.length) {
      return  <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className={styles.spinner}></div>
            </div>
    }

    return (
       <div className={styles.container}>
        {recipes.map(el =>{
            return <Card
            image= {el.image}
            name= {el.name}
            diets= {el.diets}
            id= {el.id}
            />
        })}

       </div>
    )
}

export default CardCountainer