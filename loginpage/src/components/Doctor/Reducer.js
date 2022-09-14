export const cartReducer=(state, action)=>{
    switch(action.type){
        case "ADD_TO_CART" :
            return { ...state,cart:[...state.cart,{ ...action.payload,drugQuantity: 1 } ] };
        case "REMOVE_FROM_CART":
            return { ...state,cart:state.cart.filter((drug)=>drug.drugId!==action.payload.drugId)};
        case "CHANGE_CART_QTY":
            return {...state,cart: state.cart.filter((drug) =>drug.drugId === action.payload.drugId ? (drug.drugQuantity = action.payload.drugQuantity) : drug.drugQuantity
                ),
              };
        default:
            return state;
    }
};
export const productReducer = (state, action) => {
    switch (action.type) {
        case "CLEAR_FILTERS":
      return { byStock: false, byFastDelivery: false, byRating: 0 };
    default:
      return state;
  }
};