
const initialState ={
    Item: [],
    
}

const addTokenReducer =(state= initialState, action) =>{

    switch (action.type) {
      case "ADD_TOKEN":
        return {
          ...state,
          token: action.payload,
        };

      case "ADD_ITEM":
        let itemIndex = state.Item.findIndex((i)=>i.name ===action.payload.name);
        
        if (itemIndex !== -1) {
         const updatedItems = [...state.Item];
         updatedItems[itemIndex].count =updatedItems[itemIndex].count + 1;

          return {
            ...state,Item:updatedItems,
          };
        }
        else{
          action.payload.count =1;
        return {
          ...state,Item: [...state.Item, action.payload],
        };
        }

        case "DELETE_ITEM":
          let delitemIndex = state.Item.findIndex((i)=>i.name ===action.payload.name);
          
          if (delitemIndex !== -1) {
           const updatedItems = [...state.Item];
           
           updatedItems[delitemIndex].count =updatedItems[delitemIndex].count - 1;
  
            return {
              ...state,Item:updatedItems,
            };
          }
          else{
            action.payload.count =0;
          return {
            ...state,Item: [...state.Item, action.payload],
          };
          }


      default:
        return state;
    }
}

export default addTokenReducer;