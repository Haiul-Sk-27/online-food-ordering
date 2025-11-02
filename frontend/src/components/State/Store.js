import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./Authentication/Reducer";
import { thunk } from "redux-thunk";
import restaurantReducer from "./Restaurant/Reducer";
import menuItemReduser from "./Menu/Reduser";
import { orderReduser } from "./Oreder/Reducer";

const rooteReducer = combineReducers({
    auth:authReducer,
    restaurant:restaurantReducer,
    menu:menuItemReduser,
    cart:cartReducer,
    order:orderReduser
})

export const store = legacy_createStore(rooteReducer,applyMiddleware(thunk));