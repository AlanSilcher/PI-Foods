const { allDiets, filterId, createFood, getAllName } = require('../controllers/Controllers')

const recipesId = async (req, res) =>{
    const {id} = req.params
    const source = isNaN(id) ? "bd" : "api"
    
    try {
        const food = await filterId(id, source)
      res.status(200).json(food)
    } catch (error) {
      res.status(400).json({error: error.message})
    }
}

const listOfRecipes = async (req, res) =>{
    const {name} = req.query
    try {
      const search = await getAllName()
      if(name){
          const filterName = search.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
          filterName.length !== 0 ? res.status(200).json(filterName) 
          : res.status(200).json("there are no recipes with that name")  
        }
        res.status(200).json(search)
    } catch (error) {
      res.status(200).json({error: error.message})
    }
}

const dietsList = async (req, res) =>{
    try {
        const resultDiets = await allDiets()
        res.status(200).json(resultDiets)
      } catch (error) {
        res.status(400).json({error: error.message})
      }
}
   
const createRecipe = async (req, res) =>{
    const {name, image, description, healthScore, steps, diets} = req.body
  try {
      const postRecipe = await createFood(name, image, description, healthScore, steps, diets) 
      res.status(200).json(postRecipe)
  } catch (error) {
    res.status(400).json({error: error.message})
}
}


module.exports = {
    recipesId,
    listOfRecipes,
    dietsList,
    createRecipe
}