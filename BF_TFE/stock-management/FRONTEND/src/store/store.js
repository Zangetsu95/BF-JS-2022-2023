import { applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    cart: cartReducer
})

const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk))

export default store