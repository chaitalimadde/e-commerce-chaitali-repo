const initialState ={
    add: [],
}

const addTokenReducer =(state= initialState, action) =>{

    switch(action.type){
       
        case 'ADD_TOKEN':
            return {
                ...state, token:action.payload
            }
        
        case 'ADD_ITEM':
            return {
                    ...state, Item:[action.payload]
            }
        
        default: return state;
    }
}

export default addTokenReducer;