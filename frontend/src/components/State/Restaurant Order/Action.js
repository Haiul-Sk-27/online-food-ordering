export const updateOrderStatus = ({ordreId,orderStatus,jwt}) => {
    return async (dispatch) => {
        try{
            dispatch({type:UPDATE_ORDER_STATUS_REQUEST})

            const response = await api.put(`/api/admin/orders/${ordreId}/${orderStatus}`,{
                headers:{
                    Authorization:`Bearer${jwt}`
                }
            })

            const updateOrdder = response.data;
            console.log('update order',updateOrdder)

            dispatch({type:UPDATE_ORDER_STATUS_SUCCESS,payload:updateOrdder});

        }catch(error){
            console.log(error)
            console.log({type:UPDATE_ORDER_STATUS_FAILURE,error})
        }
    }
}

export const fetchRestaurantsOrder = ({restaurantId,orderStatus,jwt})=>{
    return async (dispatch) =>{
        try{

            const {data} = await api.get(`/api/admin/order/restaurant/${restaurantId}`,{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                }
            })

            const orders = data;
            console.log("restaurant order----",orders)

            dispatch({type:GET_RESTAURANT_ORDER_SUCCESS,payload:orders})

        }catch(error){
            console.log("catch error:",error)
            dispatch({})
        }
    }
}