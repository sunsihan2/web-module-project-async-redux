import { LOADING, SUCCESS, FAIL } from "../action"
const initialState={
    data:{
        index: "",
        name:"",
        url:""
    },
    isFetching: false,
    error:null
}
export const reducer = (state= initialState, action)=> {
    switch(action.type){
        case(LOADING):
            return({
                ...state,
                isFetching: true
            })
        case(SUCCESS):
            return({
                ...state,
                data: action.payload,
                isFetching: false
            })
        case(FAIL):
            return({
                ...state,
                error: action.payload,
                isFetching: false
            })
        default:
            return state;
    }
}