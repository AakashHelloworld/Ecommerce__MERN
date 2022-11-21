

const reducer = (state, action)=>{
    switch(action.type){
        case "UPDATE_USER": {
            const geting_data = action.payload;
            return {...state, ...geting_data}
        }
        case "UPDATE__CART":{
            const Cart = action.payload;
            return {...state, Cart}
        }
        default:{
            return{...state}
        }

    }
}

export default reducer