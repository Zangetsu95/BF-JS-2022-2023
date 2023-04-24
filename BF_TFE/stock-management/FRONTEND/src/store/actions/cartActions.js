export const addToCart = (id, name, price, quantity) => ({
    type: "ADD_TO_CART",
    payload: {
        id,
        name,
        price,
        quantity,
    },
})

export const removeFromCart = (itemId) => ({
    type: "REMOVE_FROM_CART",
    payload: itemId
})

export const updateCartItem = (itemId, quantity) => ({
    type: "UPDATE_CART_ITEM",
    payload: { id: itemId, quantity }

})

export const clearCart = () => ({
    type: "CLEAR_CART"
})








