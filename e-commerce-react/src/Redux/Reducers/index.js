
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
        const existingItem = state.Item.filter(
          (item) => item.name === action.payload.name
        );
        if (existingItem.length > 0) {
          state.Item.forEach((i) => {
            if (i.name === existingItem[0].name) {
              i.count = i.count + 1;
            }
          });
          return {
            ...state,
            Item: [...state.Item],
          };
        }
        return {
          ...state,
          Item: [...state.Item, action.payload],
        };

      case "DELETE_ITEM":
        state.Item.forEach((i) => {
            if (i.name === action.payload.name) {
                if(i.count >1){
                    i.count = i.count - 1;
                }
              else{
                state.item.remove(i)
              }
            }
          });
        return {
          ...state,
          Item: [...state.Item]
        };

      default:
        return state;
    }
}

export default addTokenReducer;