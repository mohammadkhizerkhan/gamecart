import { ACTION_TYPE } from "../Actions";

const ProductReducer=(state,action)=>{
    switch (action.type) {
        case ACTION_TYPE.SORT_TYPE:
            return {...state,sort:action.payload}
        case ACTION_TYPE.CATEGORY:
            return (state.category.includes(action.payload))?{...state,category:state.category.filter(item=>item!==action.payload)}:{...state,category:[...state.category,action.payload]}
        default:
            return state;
    }
}

export {ProductReducer}