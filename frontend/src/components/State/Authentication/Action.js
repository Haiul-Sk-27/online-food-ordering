import axios from "axios"
import { ADD_TO_FAVORITE_REQUEST, GET_USER_REQUEST, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILUARE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType"
import { API_URL } from "../../Config/api"

export const registerUser =  (reqData) => async (dispatch) => {
    
    dispatch({type:REGISTER_REQUEST})

    try{

        const {data} = await axios.post(`${API_URL}/auth/signup`,reqData.userData)

        if(data.jwt) localStorage.setItem("jwt",data.jwt);

        if(data.role == "ROlE_RESTAURANT_OWNER"){
            reqData.navgate("/admin/restaurant")
        }

        else{
            reqData.navigate('/')
        }

        dispatch({type:REGISTER_SUCCESS,payload:data.jwt})

        console.log("Register Success",data)
    }catch(error){
        console.log("Error",error)
    }
}

export const loginUser = (reqData) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  try {
    const { data } = await axios.post(`${API_URL}/auth/signin`, reqData.userData);

    if (data.jwt) localStorage.setItem("jwt", data.jwt);

    if (data.role === "ROLE_RESTAURANT_OWNER") {
      reqData.navigate("/admin/restaurant");
    } else {
      reqData.navigate("/");
    }

    dispatch({ type: LOGIN_SUCCESS, payload: data.jwt });
    console.log("Login Success", data);
  } catch (error) {
    console.log("Error", error);
  }
};

export const getUser =  (jwt) => async (dispatch) => {
    
    dispatch({type:GET_USER_REQUEST})

    try{

        const {data} = await axios.post(`/auth/signin`,{
            headers:{
                Authorization:`Bearer ${jwt}`
            }
        })

        dispatch({type:LOGIN_SUCCESS,payload:data.jwt})

        console.log("user profile",data)

    }catch(error){
        console.log("Error",error)
    }
}

export const addToFavorite =  (jwt) => async (dispatch) => {
    
    dispatch({type:ADD_TO_FAVORITE_REQUEST})

    try{

        const {data} = await axios.post(/*`/api/restaurant/${restaurantId}/add-favorite`*/{},{
            headers:{
                Authorization:`Bearer ${jwt}`
            }
        })

        dispatch({type:LOGIN_SUCCESS,payload:data})

        console.log("Added to favorite",data)

    }catch(error){
        console.log("Error",error)
    }
}

export const logout =  () => async (dispatch) => {
    
    dispatch({type:ADD_TO_FAVORITE_REQUEST})

    try{

        dispatch({type:LOGOUT})

        console.log("Logout Success")

    }catch(error){
        console.log("Error",error)
    }
}