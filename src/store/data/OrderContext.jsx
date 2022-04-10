const { createContext, useContext,useReducer } = require("react");
import {orderReducer} from "../reducer/reducer"
const initialState={
    orderAddress:{},
    orderDetails:{
        totalOriginalPrice:0,
        totalDiscount:0,
        totalDeliveryCharge:0,
        totalAmount:0,
        totalSavedAmount:0
    }
}
const OrderContext=createContext()



const OrderProvider=({children})=>{
    const [orderState, orderDispatch] = useReducer(orderReducer, initialState)
    return <OrderContext.Provider value={{orderState,orderDispatch}}>
        {children}
    </OrderContext.Provider>
}

const useOrder=()=>useContext(OrderContext)

export {useOrder,OrderProvider}