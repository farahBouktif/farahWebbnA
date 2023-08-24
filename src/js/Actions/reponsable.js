 import { CURRENT_RESPONSABLE, FAIL_RESPONSABLE, GET_RESPONSABLES, LOAD_RESPONSABLE, LOGIN_RESPONSABLE, LOGOUT_RESPONSABLE, REGISTER_RESPONSABLE } from "../ActionsTypes/RESPONSABLETypes"
import { Axioss } from "../instanse/GymServer"
import axios from "axios"

export const getresponsables = () => async (dispatch) => {
    dispatch({type : LOAD_RESPONSABLE})
    try {
        let resault = await Axioss.get("/api/responsable/all/responsable")
        dispatch({type : GET_RESPONSABLES , payload : resault.data})
        
    } catch (error) {
        dispatch({type : FAIL_RESPONSABLE , payload : error.response})
    }
}  

export const addResponsable = (newResponsable,navigate) => async (dispatch) => {
    dispatch({type : LOAD_RESPONSABLE})
    try {
        let resault = await Axioss.post("/api/responsable/register" , newResponsable) 
        dispatch({type:REGISTER_RESPONSABLE , payload : resault.data })

        navigate('/responsable')
    } catch (error) {
        dispatch({type : FAIL_RESPONSABLE , payload : error.response})
    }
}
export const loginResponsable = (RESPONSABLE,navigate) => async (dispatch) => {
    dispatch({type : LOAD_RESPONSABLE})
    try {
        let resault = await Axioss.post("/api/responsable/login" , RESPONSABLE) 
        dispatch({type:LOGIN_RESPONSABLE , payload : resault.data })

        navigate('/responsable')
    } catch (error) {
        dispatch({type : FAIL_RESPONSABLE , payload : error.response})
    }
}

export const current = () => async (dispatch) => {
  dispatch({ type: LOAD_RESPONSABLE });
  try {
    const config = {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    const result = await axios.get("/api/responsable/current", config);
    dispatch({ type: CURRENT_RESPONSABLE, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_RESPONSABLE, payload: error.response.data.errors });
  }
};


export const logout = ()=> async (dispatch)=>{
    dispatch ({type:LOGOUT_RESPONSABLE})
}




export const deleteResponsable = (id) => async (dispatch) => {
    dispatch({type : LOAD_RESPONSABLE})
    try {
        let resault = await Axioss.delete(`/api/responsable/${id}`)
        dispatch(getResponsable())
    } catch (error) {
        dispatch({type : FAIL_RESPONSABLE , payload : error.response})
    }
}

export const editResponsable = (id , newResponsable) => async (dispatch) => {
    dispatch({type : LOAD_RESPONSABLE})
    try {
     await Axioss.put(`/api/responsable/${id}` , newResponsable)
        dispatch()
    } catch (error) {
        dispatch({type : FAIL_RESPONSABLE , payload : error.response})
    }
}

export const getResponsable = (id) => async (dispatch) => {
    dispatch({type : LOAD_RESPONSABLE})
    try {
        let resault = await Axioss.get(`/api/responsable/${id}`)
        dispatch({type : GET_RESPONSABLES , payload : resault.data})
    } catch (error) {
        dispatch({type : FAIL_RESPONSABLE , payload : error.response})
    }
}  