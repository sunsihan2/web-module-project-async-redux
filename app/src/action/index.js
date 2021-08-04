import axios from 'axios'

export const LOADING="LOADING"
export const SUCCESS = "SUCCESS"
export const FAIL= "FAIL"

export const getData = (dispatch) => {
    return dispatch => {
        dispatch({type:LOADING})
        axios.get('https://www.dnd5eapi.co/api/classes')
            .then(res => {
                dispatch({
                    type: SUCCESS,
                    payload: res.data.results[0]
                })
            })
            .catch(err => {
                dispatch({
                    type: FAIL,
                    payload: err
                })
            })
    }
}
export const loading = () =>{
    return({
        type: LOADING
    })
}
export const success=(data) => {
    return({
        type:SUCCESS,
        payload: data
    })
}
export const fail =(error) => {
    return ({
        type:FAIL,
        payload:error
    })
}