import { Await } from "react-router-dom"
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_USER_ORDER_REQUEST, GET_USER_ORDER_SUCCESS } from "./ActionTypes"

export const createOrder = (reqData) =>{
    return async (dispatch) =>{
        dispatch({type:CREATE_ORDER_REQUEST})
        try{

            const {data} = await api.post(`/api/order`,reqData.order,{
                headers:{
                    Authorization:`Bearer ${reqData.jwt}`,
                }
            })

            // if(data.payment_url){
            //     window.location.href = data.payment_url;
            // }

            console.log("create order:",data)
            dispatch({type:CREATE_ORDER_SUCCESS,payload:error})

        }catch(error){
            console.log("catch error:",error)
            dispatch({type:CREATE_ORDER_FAILURE,payload:error})
        }
    }
}

export const getUserOrders = (jwt) =>{
    return async (dispatch) => {
        dispatch({type:GET_USER_ORDER_REQUEST})
        try{
            const {data} = await api.get(`/api/order/user`,{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                }
            })
            console.log("user order",data)
            dispatch({type:GET_USER_ORDER_SUCCESS,payload:data})
        }catch(error){
            console.log(error);
            dispatch({type:GET_USER_ORDER_FAILURE,payload:error})
        }
    }
}

// export const getUsersNotificationAction = () => {
//     return async (dispatch) =>{
//         dispatch({type:CREATE_ORDER_REQUEST})
//     }
// }