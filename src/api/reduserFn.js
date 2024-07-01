export const reducerFn = (state, action) => {

    if (action.type === "ALL_PRODUCTS") return { ...state, products: action.payload }


    return state
}