const initialState = {
    isAuthenticated: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_AUTHENTICATED":
            return { ...state, isAuthenticated: action.payload }
        case "SET_UNAUTHENTICATED":
            return {
                ...state,
                isAuthenticated: false,
            };
        default:
            return state
    }
}

export default authReducer