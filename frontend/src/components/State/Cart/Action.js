import { ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, CLEAR_CART_FAILURE, CLEAR_CART_REQUEST, CLEAR_CART_SUCCESS, FIND_CART_FAILURE, FIND_CART_REQUEST, FIND_CART_SUCCESS, GET_ALL_CART_ITEMS_FAILURE, GET_ALL_CART_ITEMS_REQUEST, GET_ALL_CART_ITEMS_SUCCESS, REMOVE_CARTITEM_REQUEST, REMOVE_CARTITEM_SUCCESS, UPDATE_CARTITEM_FAILURE, UPDATE_CARTITEM_REQUEST, UPDATE_CARTITEM_SUCCESS } from "./ActionTypes"

export const findCart = (token) => {
    return async(dispath) =>{
        dispath({type:FIND_CART_REQUEST});

        try{

            const response = await api.get(`/api/cart/`,{
                headers:{
                    Authorization:`Bearer ${token}`,
                }
            })

            console.log("findCart:",response)
            dispath({type:FIND_CART_SUCCESS,payload:response})

        }catch(error){
            dispath({type:FIND_CART_FAILURE,payload:error})
        }
    }
}

export const getAllCaerItems = (resDara) =>{
    return async (dispath) =>{
        dispath({type:GET_ALL_CART_ITEMS_REQUEST})
        try{

            const response = await api.get(`/apl/carts/${reqData.cartId}/items`,{
                headers:{
                    Authorization:`Bearer ${reqData.token}`
                }
            })

            dispath({type:GET_ALL_CART_ITEMS_SUCCESS,payload:response.data})

        }catch(error){
            dispath({type:GET_ALL_CART_ITEMS_FAILURE,payload:Error})
        }
    }
}

export const addItemCart=(reqData)=>{
    return async (dispath) =>{
        dispath({type:ADD_ITEM_TO_CART_REQUEST});
        try{

            const {data} = await api.put(`/api/cart/add`,reqData.cartItem,{
                headers:{
                    Authorization:`Bearer ${reqData.token}`,
                }
            })

            console.log("add item to cart",data)
            dispath({type:ADD_ITEM_TO_CART_SUCCESS,payload:data})

        }catch(error){
            console.log("catch error",error)
            dispath({type:ADD_ITEM_TO_CART_FAILURE,payload:error.message})
        }
    }
}

export const updateCartItem = (reqData) =>{
    return async (dispath) =>{
        dispath({type:UPDATE_CARTITEM_REQUEST})
        try{

            const {data} = await api.put(`/api/cart-item/update`,reqData.data,{
                headers:{
                    Authorization:`Bearer ${reqData.jwt}`,
                }
            })
            
            console.log("update cart item",data)
            dispath({type:UPDATE_CARTITEM_SUCCESS,payload:data})

        }catch(error){
            dispath({type:UPDATE_CARTITEM_FAILURE,payload:error})
        }
    }
}

export const removeCartItem = ({cartItem,jwt})=>{
    return async (dispath) =>{
        dispath({type:REMOVE_CARTITEM_REQUEST})

        try{
            const {data} = await api.delete(`/api/cart-item/${cartItemId}/remove`,{
                headers:{
                    Authorization:`Bearer ${jwt}`
                }
            })

            console.log("remove cartitem",data)
            dispath({type:REMOVE_CARTITEM_SUCCESS,payload:cartItemId})
            
        }catch(error){
            console.log("catch errorl",error)
        }
    }
}

export const clearCartAction = () =>{
    return async (dispath) =>{
        dispath({type:CLEAR_CART_REQUEST});

        try{

            const {data} = await api.put(`/api/cart/clear`,{},{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem("jwt")}`
                }
            })

            dispath({type:CLEAR_CART_SUCCESS,payload:data})
            console.log("clear cart",data);

        }catch(error){
            console.log("catch error",error)
            dispath({type:CLEAR_CART_FAILURE,payload:error.message});
        }
    }
}