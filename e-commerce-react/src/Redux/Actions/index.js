export const addToken =(tokenVal) =>{
    return{
        type: 'ADD_TOKEN',
        payload: {
            token: tokenVal
        }
    }
};
