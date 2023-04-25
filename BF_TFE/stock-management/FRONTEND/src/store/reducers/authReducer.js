const initialState = {
    isAuthenticated: localStorage.getItem("jwt") ? true : false,
    userRole: localStorage.getItem("userRole") || null,
}

/**
 * This is a reducer function that handles authentication-related actions and updates the state
 * accordingly.
 * @param [state] - The current state of the authentication reducer. If no state is provided, it will
 * default to the initialState object.
 * @param action - The `action` parameter is an object that contains information about the action being
 * dispatched, including the type of the action and any additional data (payload) that needs to be
 * passed to the reducer. The reducer uses this information to determine how to update the state.
 * @returns The authReducer function is returning a new state object based on the action type received.
 * If the action type is "SET_AUTHENTICATED", it returns a new state object with the isAuthenticated
 * property set to the value of the action payload. If the action type is "SET_UNAUTHENTICATED", it
 * returns a new state object with the isAuthenticated property set to false. If the action type is
 * "ADD
 */
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_AUTHENTICATED":
            return { ...state, isAuthenticated: action.payload }
        case "SET_UNAUTHENTICATED":
            return {
                ...state,
                isAuthenticated: false,
            };
        case "ADD_USER":
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true
            }
        case "SET_USER_ROLE":
            localStorage.setItem("userRole", action.payload);

            return {
                ...state,
                userRole: action.payload,
            };
        case "SET_USER_ID":
            return {
                ...state,
                userId: action.payload,
            };
        default:
            return state
    }
}

export default authReducer