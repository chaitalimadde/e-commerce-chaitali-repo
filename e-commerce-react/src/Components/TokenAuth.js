import  store  from "../Redux/Store/store.js"


const TokenAuth =()=>{

return store.getState().token;
    
}

export default TokenAuth;


