
export const cartHandler = (item, type, name, dispatch) => {
    let cartToLS = JSON.parse(localStorage.getItem(name)) || []

    const filterdCart = cartToLS.find(elem => elem.id === item.id)
    if (filterdCart) {
        cartToLS = cartToLS.filter(elem => {
            return elem.id !== item.id
        })
    }
    else {
        cartToLS = [...cartToLS, { ...item, count: 1 }]
    }
    localStorage.setItem(name, JSON.stringify(cartToLS))
    dispatch({ type: type, payload: cartToLS })
}