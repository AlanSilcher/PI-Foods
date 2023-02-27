import axios from "axios"

export const GET_RECIPES = "GET_RECIPES"
export const getRecipes = () => {
    return async function(dispatch) {
        const apiData = await axios.get("http://localhost:3001/recipes")
        const recipes = apiData.data
        dispatch({type: GET_RECIPES, payload: recipes})
    }
}

export const RECIPE_ID = "RECIPE_ID"
 export const getRecipesById = (id) => {
    return async function (dispatch) {
        const apiData = await axios.get(`http://localhost:3001/recipes/${id}`)
        const recipeId = apiData.data
        dispatch({type: RECIPE_ID, payload: recipeId})
    }
}

export const GET_BY_NAME = "GET_BY_NAME"
export const getRecipesByName = (search) => {
    return async function(dispatch){
        const apiData = await axios.get(`http://localhost:3001/recipes?name=${search}`);
    return dispatch( {type : GET_BY_NAME, payload: apiData})
}
}

export const ALPHABETICAL_ORDER = "ALPHABETICAL_ORDER"
export const alphabeticalOrder = (payload) => {
    return {type: ALPHABETICAL_ORDER, payload}
}

export const ORDER_BY_HEALTH_SCORE = "ORDER_BY_HEALTH_SCORE"
export const healthScoreOrder = (payload) => {
    return {type: ORDER_BY_HEALTH_SCORE, payload}
}

export const FILTER_BY_DIETS = "FILTER_BY_DIETS"
export const filterDiets = (payload) => {
    return {type: FILTER_BY_DIETS, payload}
}

export const FILTER_BY_ORIGINS = "FILTER_BY_ORIGINS"
export const filterOrigins = (payload) => {
    return {type: FILTER_BY_ORIGINS, payload}
}


