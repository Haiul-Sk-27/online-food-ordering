import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./Authentication/Reducer";
import { thunk } from "redux-thunk";
import restaurantReducer from "./Restaurant/Reducer";
import menuItemReduser from "./Menu/Reduser";

const rooteReducer = combineReducers({
    auth:authReducer,
    restaurant:restaurantReducer,
    menu:menuItemReduser
})

export const store = legacy_createStore(rooteReducer,applyMiddleware(thunk));