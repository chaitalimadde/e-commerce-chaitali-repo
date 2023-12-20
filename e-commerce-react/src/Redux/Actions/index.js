export const addToken =(tokenVal) =>{
    return{
        type: 'ADD_TOKEN',
        payload: {
            token: tokenVal
        }
    }
};

export const addItems =(item,id) =>{
    return{
        type: 'ADD_ITEM',
        payload: {
            id:id,
            name: item.product_name,
            price: item.price,
        }
    }
};

export const deleteItems =(item, id) =>{
    return{
        type: 'DELETE_ITEM',
        payload: {
            id: id,
            name: item.product_name,
            price: item.price,
        }
    }
};