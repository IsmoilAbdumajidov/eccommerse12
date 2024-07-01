export const reducerFn = (state, action) => {

    if (action.type === "ALL_PRODUCTS") return { ...state, products: action.payload }

    if (action.type === "CART") return { ...state, cart: action.payload }

    if (action.type === "WISHLIST") return { ...state, wishlist: action.payload }


    return state
}