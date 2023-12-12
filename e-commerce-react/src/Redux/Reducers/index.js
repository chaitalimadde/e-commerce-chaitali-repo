const initialState ={
    add: [],
}

const addTokenReducer =(state= initialState, action) =>{

    switch(action.type){
        case 'ADD_TOKEN':
            return {
                ...state, token:[...state.add, action.payload]
            }
        
        default: return state;
    }
}

export default addTokenReducer;