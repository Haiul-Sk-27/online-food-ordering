const initialState = {
    loading:false,
    error:null,
    orders:[]
}

const restaurantsOrdersReduser = (state= initialState,action) => {
    switch(action.type){
        case GET_RESTAURANTS_ORDER_REQUEST:
        case UPDATE_ORDER_STATUS_REQUEST:
        return{
            ...state,
            loading:true,
            error:null,
        }
        case GET_RESTAURANTS_ORDER_SUCCESS:
            return{...state,loading:false,orders:action.payload}
        case UPDATE_ORDER_STATUS_SUCCESS:
            const updateOrdders = state.orders.map((order) => {
                state.orders.id?action.payload:order
            })
        return{...state,loading:false,orders:updateOrdders};
        case GET_RESTAURANTS_ORDER_FAILURE:
        case UPDATE_ORDER_STATUS_FAILURE:
            return{...state,loading:false,error:action.error}
        default:
            return false;
    }
}
export default restaurantsOrdersReduser;