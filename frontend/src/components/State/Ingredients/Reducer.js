import { CREATE_INGREDIENT_CATEGORY_SUCCESS, CREATE_INGREDIENT_SUCCESS, GET_INGREDIENT_CATEGORY_SUCCESS, GET_INGREDIENTS } from "./ActionTypes"

const initialState = {
    ingredient:[],
    update:[],
    category:[],
}

export const ingredientReducer = (state = initialState,action) => {
    switch(action.type){
        case GET_INGREDIENTS:
            return{
                ...state,
                ingredient:action.payload
            }
        
        case GET_INGREDIENT_CATEGORY_SUCCESS:
            return{
                ...state,
                category:action.payload,
            }
        
        case CREATE_INGREDIENT_CATEGORY_SUCCESS:
            return{
                ...state,
                category:[...state.category,action.payload],
            }

        case CREATE_INGREDIENT_SUCCESS:
            return{
                ...state,
                update:action.payload,
                ingredient:state.ingredient.map((item) =>
                    item.id === action.payload.id?action.payload : item
                )
            }

        default:
            return state;
    }
}