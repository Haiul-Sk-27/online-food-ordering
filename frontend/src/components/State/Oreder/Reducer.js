const initialState ={
    loading:false,
    orders:[],
    error:null,
    notifictation:[],
}

export const orderReduser = (state = initialState,{type,payload}) => {
    switch(type){
        case GER_USERS_REQUEST:
            return{...state,error:null,loading:true};
        case GET_USER_ORDER_SUCCESS:
            return {...state,error:null,loading:false,orders:payload}
        case GET_USERS_ORDERS_SUCCESS:
            return{...state,notifictation:payload,error:null,loading:false}

        case GET_USERS_NOTIFICTATION_FAILURE:
            return {...state,error:payload,loading:false}

        default:
            return state;
    }
}