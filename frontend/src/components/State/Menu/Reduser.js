const initialState = {
    menuItems:[],
    loading:false,
    error:null,
    search:[],
    message:null
}

const menuItemReduser = (state = initialState,action) =>{
    switch (action.type) {
        case actionTypes.CREATE_MUNU_ITEM_REQUEST:
        case actionTypes.GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST:
        case actionTypes.DELETE_MUNU_ITEM_REQUEST:
        case actionTypes.SEARCH_MENU_ITEM_REQUEST:
        case actionTypes.UPDATE_MENU_ITEMS_AVAILABLITY_REQUEST:

        return{
            ...state,
            loading:null,
            menuItems:[...state.menuItems,action.payload],
        }

        case actionTypes.CREATE_MUNU_ITEM_SUCCESS:
        return{
            ...state,
            loading:false,
            menuItems:[...state.menuItems,action.payload],
            message:"Food create successfully"
        }

        case actionTypes.GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS:
            return{
                ...state,
                loading:false,
                menuItems:action.payload
            }
        
        case actionTypes.DELETE_MUNU_ITEM_SUCCESS:
            return {
                ...state,
                loading:false,
                menuItems:state.menuItems.filter(
                    (menuItem) => menuItem.id !== action.payload
                )
            }

        case actionTypes.UPDATE_MENU_ITEMS_AVAILABLITY_SUCCESS:
            return{
                ...state,
                loading:false,
                menuItems:state.menuItems.map(
                    (menuItem) => menuItem.id === action.payload.id?action.payload:menuItem
                )
            }

        case actionTypes.SEARCH_MENU_ITEM_SUCCESS:
            return{
                ...state,
                loading:false,
                search:action.payload
            }

        case actionTypes.CREATE_MUNU_ITEM_FAILURE:
        case actionTypes.GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE:
        case actionTypes.DELETE_MUNU_ITEM_FAILURE:
        case actionTypes.DELETE_MUNU_ITEM_FAILURE:
        case actionTypes.SEARCH_MENU_ITEM_FAILURE:
        case actionTypes.UPDATE_MENU_ITEMS_AVAILABLITY_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload,
                message:null
            }

        default:
            return state;
    }
}

export default menuItemReduser;