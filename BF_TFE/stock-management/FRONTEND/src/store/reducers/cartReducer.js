const initialState = {
    cartItems: [],
};

/**
 * This is a cart reducer function that handles adding, removing, and updating items in the cart.
 * @param [state] - The current state of the cart, which is an object containing an array of cart items
 * and a total price.
 * @param action - The `action` parameter in the `cartReducer` function is an object that describes the
 * action that is being performed. It has a `type` property that indicates the type of action being
 * performed, and a `payload` property that contains any additional data needed to perform the action.
 * The `action
 * @returns The cartReducer function is returning a new state object based on the action type received.
 * If the action type is "ADD_TO_CART", it checks if the item already exists in the cart and either
 * updates the quantity or adds the new item to the cart. If the action type is "REMOVE_FROM_CART", it
 * removes the item from the cart. If the action type is "UPDATE_CART_ITEM", it
 */
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            // Vérifie si l'article est déjà dans le panier
            const existingCartItemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );

            if (existingCartItemIndex >= 0) {
                // Si l'article existe déjà, mettez à jour la quantité
                const updatedCartItems = [...state.cartItems];
                updatedCartItems[existingCartItemIndex].quantity +=
                    action.payload.quantity;

                return { ...state, cartItems: updatedCartItems };
            } else {
                // Sinon, ajoutez le nouvel article au panier
                return { ...state, cartItems: [...state.cartItems, action.payload] };
            }

        case "REMOVE_FROM_CART":
            const updatedCartItems = state.cartItems.filter(
                (item) => item.id !== action.payload
            );
            return { ...state, cartItems: updatedCartItems };

        case "UPDATE_CART_ITEM":
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );
            if (itemIndex >= 0) {
                const updatedItems = [...state.cartItems];
                updatedItems[itemIndex].quantity = action.payload.quantity;
                return { ...state, cartItems: updatedItems };
            }
            return state;

        default:
            return state;
    }
};

export default cartReducer;
