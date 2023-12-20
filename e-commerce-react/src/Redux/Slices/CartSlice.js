import { createSlice } from "@reduxjs/toolkit"

const initialState={
    Item:[]
}

const CartSlice = createSlice({
name: "cart",
initialState,
reducers:{
    addToCart:(state,action) =>{
        let itemIndex = state.Item.findIndex((i)=>i.product_name ===action.payload.product_name);
        
        if (itemIndex !== -1) {
         const updatedItems = [...state.Item];
         updatedItems[itemIndex].count =updatedItems[itemIndex].count + 1;

        //   return {
        //     ...state,Item:updatedItems,
        //   };
        state.Item[itemIndex] = updatedItems[itemIndex];
        }
        else{
          action.payload.count =1;
            state.Item.push(action.payload);
        }
    },

    deleteFromCart:(state, action)=>{
        let delitemIndex = state.Item.findIndex((i)=>i.product_name ===action.payload.product_name);
          
        if (delitemIndex !== -1) {
         const updatedItems = [...state.Item];
         
         updatedItems[delitemIndex].count =updatedItems[delitemIndex].count - 1;
         state.Item[delitemIndex] = updatedItems[delitemIndex];
        }
        else{
            action.payload.count =0;
              state.Item.push(action.payload);
          }
        

        }
}
})

export const {addToCart,deleteFromCart} = CartSlice.actions;

export default CartSlice.reducer;