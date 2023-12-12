export const addToken =(tokenVal) =>{
    return{
        type: 'ADD_TOKEN',
        payload: {
            token: tokenVal
        }
    }
};

export const addItems =(item,count) =>{
    return{
        type: 'ADD_ITEM',
        payload: {
            name: item.product_name,
            price: item.price,
            count: count,
        }
    }
};