import { CREATE_INGREDIENT_SUCCESS, GET_INGREDIENT_CATEGORY_SUCCESS, GET_INGREDIENTS, UPDATE_STOCK } from "./ActionTypes"

export const getIngredientsOfRestaurant = ({id,jwt}) => {
    return async (dispatch) => {
        try{
            const response = await api.get(`/api/admin/ingredients/restaurant/${id}`,{
                headers:{
                    Autnorization:`Bearer ${jwt}`
                }
            })

            console.log("Get all ingredients",response.data)
            dispatch({type:GET_INGREDIENTS,payload:response.data})

        }catch(error){
            console.log("catch error",error)
        }
    }
}

export const createIngredient = ({data,jwt}) =>{
    return async (dispatch) =>{
        try{

            const response = await api.get(`/api/admin/ingredients`,data,{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                }
            })

            console.log("Create ingredient",response.data)
            dispatch({type:CREATE_INGREDIENT_SUCCESS,payload:response.data})

        }catch(error){
            console.log("error",error);
        }
    }
}

export const createIngredientCategory = ({data,jwt}) => {
    console.log("data",data,"jwt",jwt);
    return async (dispatch) => {
        try{
            const response = await api.post(`/api/admin/ingredients/category`,data,{
                headers:{
                    Authorization:`Bearer ${jwt}`
                }
            })
            console.log("create ingredient category",response.data)
            dispatch({type:CREATE_INGREDIENT_SUCCESS,payload:response.data})

        }catch(error){
            console.log("error",error)
        }
    }
}

export const getIngredientCategory = ({id,jwt}) =>{
    return async (dispatch) => {
        try{
            const response = await api.get(`/api/admin/ingredients/restaurent/${id}/category`,{
                headers:{
                    Authorization:`Bearer ${jwt}`
                }
            })
            
            console.log("get ingredients category",response.data);
            dispatch({type:GET_INGREDIENT_CATEGORY_SUCCESS,payload:response.data})

        }catch(error){
            console.log("error",error);
        }
    }
}

export const updateStockOfIngredient = ({id,jwt}) => {
    return async (dispatch) =>{
        try{

            const {data} = await api.put(`/api/admin/ingredient/${id}/stoke`,{},{
                headers:{
                    Authorization:`Bearer${jwt}`
                }
            })

            console.log("update ingredients stock",data);
            dispatch({type:UPDATE_STOCK,payload:data});

        }catch(error){
            console.log("catch error",error)
        }
    }
}