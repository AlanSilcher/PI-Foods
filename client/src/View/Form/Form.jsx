import { useState } from "react"
import axios from "axios"
import styles from './Form.module.css'

const Form = () => {
    const dietOptions = ['vegetarian','gluten free','dairy free','lacto ovo vegetarian','vegan','paleolithic','primal','whole 30','pescatarian','ketogenic', 'fodmap friendly']
    
    const [form, setForm] = useState({
        name:"",
        image:"",
        description:"",
        healthScore:"",
        steps:"",
        diets:[]
    })

    const [errors, setErrors] = useState({
        name:"",
        image:"",
        description:"",
        healthScore:"",
        steps:"",
        diets:""
    })

    const changeHandler = (event) => {
        const property = event.target.name
        const value = event.target.value

        if (property === "diets") {
            // manejar la selección de dietas
            const isChecked = event.target.checked
            const diet = event.target.value

            let updatedDiets = []
            if (isChecked) {
                updatedDiets = [...form.diets, diet]
            } else {
                updatedDiets = form.diets.filter(item => item !== diet)
            }

            setForm({...form, diets: updatedDiets})
        } else {
            validate({...form, [property]: value})
            setForm({...form, [property]: value})
        }
    }

    const validate = (form) => {
        let newErrors = { name: "", image: "", description: "", healthScore: "", steps: "", diets: "" };
      
        if (!/^[A-Za-z]+$/.test(form.name)) {
          newErrors.name = "Name cannot be empty and must not contain numbers";
        }
      
        if (form.description === "") {
          newErrors.description = "Empty description";
        }
      
        if (form.healthScore === "" || form.healthScore < 0 || form.healthScore > 100) {
          newErrors.healthScore = "There can only be one health score value between 0 and 100";
        }
      
        setErrors(newErrors);
      };

    const submitHandler = (event) => {
        event.preventDefault()
        if (Object.values(errors).some(error => error !== "")) {
            alert("you can't upload the recipe without it has errors")
          }else{
            axios.post("http://localhost:3001/recipes",form)
            alert("the recipe was uploaded")
            .then(res=>alert(res))
            .catch(err=>alert(err))
          }
    }

    

    return (
        <form onSubmit={submitHandler} className={styles.form}>
        <div>
            <label className={styles.label}>Name: </label>
            <input type="text" value={form.name} onChange={changeHandler} name="name" className={styles.text}/>
            {errors.name && <span>{errors.name}</span>}
        </div>

        <div>
            <label className={styles.label}>Image: </label>
            <input type="text" value={form.image} onChange={changeHandler} name="image" className={styles.text}/>
        </div>

        <div>
            <label className={styles.label}>Health score: </label>
            <input type="number" value={form.healthScore} onChange={changeHandler} name="healthScore" className={styles.text}/>
            {errors.healthScore && <span>{errors.healthScore}</span>}
        </div>

        <div>
            <label className={styles.label}>Diets: </label>
            {dietOptions.map(el => (
    <label key={el}>
      <input type="checkbox" name="diets" value={el} checked={form.diets.includes(el)} onChange={changeHandler} className={styles.checkbox}/>
      {el}
    </label>
  ))}
        </div>

        <div>
            <label className={styles.label}>Description: </label>
            <input type="text" value={form.description} onChange={changeHandler} name="description" className={styles.text}/>
            {errors.description && <span>{errors.description}</span>}
        </div>

        <div>
            <label className={styles.label}>Steps: </label>
            <input type="text" value={form.steps} onChange={changeHandler} name="steps" className={styles.text}/>
        </div>

        <button type="submit" className={styles.button}>Submit</button>
        </form>
        
        
    )
}

export default Form
        