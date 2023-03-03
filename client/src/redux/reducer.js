import { GET_RECIPES, RECIPE_ID, GET_BY_NAME, ALPHABETICAL_ORDER, ORDER_BY_HEALTH_SCORE, FILTER_BY_DIETS, FILTER_BY_ORIGINS} from "./actions"

const initialState = {
    recipes: [],
    details: [],
    filteredRecipes: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RECIPES:
            return {...state, recipes: action.payload, filteredRecipes: [...action.payload]}

        case RECIPE_ID:
                return {...state, details: action.payload}

        case GET_BY_NAME:
                return {...state, recipes: action.payload.data}

        case ALPHABETICAL_ORDER:
            let orderByName = action.payload === 'a-z'?
            state.recipes.sort(function (a, b) {
              if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
                return -1;
              }
              if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
                return 1;
              }
              return 0;
            }):
            state.recipes.sort(function (a, b) {
              if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
                return 1;
              }
              if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
                return -1;
              }
              return 0;
            })
              return{...state , recipes : orderByName}

        case ORDER_BY_HEALTH_SCORE:
          let orderHealthScore = action.payload === 'more-less'?
          state.recipes.sort(function( a, b ){ 
            if (a.healthScore < b.healthScore) {
              return -1;
            }
            if (a.healthScore > b.healthScore) {
              return 1;
            }
            return 0; }):
          state.recipes.sort(function (a, b) {
            if (a.healthScore < b.healthScore) {
              return 1;
            }
            if (a.healthScore > b.healthScore) {
              return -1;
            }
            return 0;
          })
          return{...state , recipes : orderHealthScore}

        case FILTER_BY_DIETS:
          const allRecipes = state.filteredRecipes
          const filterByDiets = action.payload === 'all' ? allRecipes:
          allRecipes.filter(el => el.diets.find(el => el === action.payload))
              return {...state, recipes: filterByDiets}

        case FILTER_BY_ORIGINS:
          const allFoods = state.filteredRecipes
          const filterByOrigins = action.payload === 'data base' ? 
          allFoods.filter(el => isNaN(el.id)):
          allFoods.filter(el => !isNaN(el.id))
              return {...state, recipes: filterByOrigins}

        default:
            return {...state}
    }
}

export default rootReducer