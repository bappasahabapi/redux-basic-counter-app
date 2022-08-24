import { DECREMENT, INCREMENT, RESET } from "./actionsTypes";
import { initialState } from "./initialState";

export  const counterReducer =(state=initialState, action)=>{

    switch (action.type) {
        case INCREMENT:
            return{
                ...state,
                value:state.value+1,
            };
        case DECREMENT:
            if (state.value === 0) {
                return state;
            }else{ 
            return{
                ...state,
                value:state.value-1,
            }
        };
        case RESET:
            return{
                ...state,
                value:0
            }
    
        default:
            return state;
    }

}