import { CREATE_MENU_ITEM_FAILURE, CREATE_MENU_ITEM_REQUEST, CREATE_MENU_ITEM_SUCCESS, DELETE_MENU_ITEMS_FAILURE, DELETE_MENU_ITEMS_REQUEST, DELETE_MENU_ITEMS_SUCCESS, GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE, GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST, GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS, SEARCH_MENU_ITEMS_REQUEST, SEARCH_MENU_ITEMS_SUCCESS, UPDATE_MENU_ITEMS_AVAILABITY_FAILURE, UPDATE_MENU_ITEMS_AVAILABITY_REQUEST, UPDATE_MENU_ITEMS_AVAILABITY_SUCCESS } from "./ActionType"

export const createMenuItem = ({menu,jwt}) =>{
    return async (dispatch) => {
        dispatch({type:CREATE_MENU_ITEM_REQUEST});

        try{

            const {data} = await applyMiddleware.post("api/admin.food",menu,{
                headers:{
                    Authorization:`Bearer ${jwt}`
                }
            })

            console.log("created menu",data);
            dispatch({type:CREATE_MENU_ITEM_SUCCESS,payload:data})

        }catch(error){
            console.log("error",error);
            dispatch({type:CREATE_MENU_ITEM_FAILURE,pat})
        }
    }
}

export const getMenuItemsByRestaurentId = (reqData) =>{
    return async (dispatch) => {
        dispatch({type:GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST})

        try{
            const { data } = await api.get(`/api/food/restaurant/${reqData.restaurantId}?vegetarian=${reqData.vegetarian}&nonveg=${reqData,nonveg}&seasonal=${reqData.seasonal}&food_categoty=${reqData.foodCategory}`,{
                headers:{
                    Authorization:`Bearer${reqData.jwt}`
                }
            })
            console.log("menu iteam by restaurants",data);
            dispatch({type:GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS,payload:data})

        }catch(error){
            console.log("")
            dispatch({type:GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE,payload:error})
        }
    }
}

export const searchMenuItem = ({keyword,jwt}) =>{
    return async (dispatch) =>{
        try{

            const {data} = await api.get(`api/food/search?name=${keyword}`,{
                headers:{
                    Authorization:`Bearer ${jwt}`
                }
            })

            console.log("data----------------",data);
            dispatch({type:SEARCH_MENU_ITEMS_SUCCESS,payload:data})

        }catch(error){
            console.log("error",error)
            dispatch({type:SEARCH_MENU_ITEMS_REQUEST,payload:error})
        }
    }
}


export const updateMenuItemsAvailability = ({foodId,jwt}) =>{
    return async (dispatch) =>{
        dispatch({type:UPDATE_MENU_ITEMS_AVAILABITY_REQUEST})

        try{

            const {data} = await api.put(`/api/admin/food/${foodId}`,{},{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                }
            })

            console.log("update menuitems availability",data)
            dispatch({type:UPDATE_MENU_ITEMS_AVAILABITY_SUCCESS,payload:data})

        }catch(error){
            console.log('update menuitems availability',error)
            dispatch({type:UPDATE_MENU_ITEMS_AVAILABITY_FAILURE,payload:error})
        }
    }
}

export const deleteFoodAction = ({foodId,jwt}) => {
    async (dispatch) =>{
        dispatch({type:DELETE_MENU_ITEMS_REQUEST})

        try{

            const {data} = await api.delete(`/api/admin/food/${foodId}`,{
                headers:{
                    Authorization:  `Bearer ${jwt}`
                }
            })

            console.log("delete food",data)
            dispatch({type:DELETE_MENU_ITEMS_SUCCESS,payload:foodId})

        }catch(error){
            console.log("error",error)
            dispatch({type: DELETE_MENU_ITEMS_FAILURE,payload:error})
        }
    }
}