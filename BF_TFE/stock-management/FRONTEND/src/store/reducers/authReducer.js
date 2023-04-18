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
        case "ADD_USER":
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true
            }
        case "SET_USER_ROLE":
            return {
                ...state,
                role: action.payload,
            };
        default:
            return state
    }
}

export default authReducer