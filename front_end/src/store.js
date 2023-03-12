import { legacy_createStore as createStore,combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools } from "redux-devtools-extension";
import { newProductReducer, newReviewReducer, productDetailsReducer, productReducer,productReviewsReducer,productsReducer, reviewReducer } from "./reducers/productReducer";
import { allUserReducer, forgotPasswordReducer, profileReducer, userDetailsReducer, userReducer } from "./reducers/userReducer";
import { cartReducers } from "./reducers/cartReducers";
import {newOrderReducer,myOrdersReducer, orderDetailsReducer, allOrdersReducer, orderReducer} from "./reducers/orderReducers";


const reducer = combineReducers({
    products: productsReducer,
    productDetails:productDetailsReducer,
    user:userReducer,
    profile:profileReducer,
    forgotPassword:forgotPasswordReducer,
    cart:cartReducers,
    newOrder:newOrderReducer,
    myOrders:myOrdersReducer,
    orderDetails:orderDetailsReducer,
    newReview:newReviewReducer,
    newProduct:newProductReducer,
    product:productReducer,
    allOrders:allOrdersReducer,
    order:orderReducer,
    allUsers:allUserReducer,
    userDetails:userDetailsReducer,
    productReviews:productReviewsReducer,
    review:reviewReducer,
});

let initialState = {
    cart : {
        cartItems: localStorage.getItem("cartItems")
          ? JSON.parse(localStorage.getItem("cartItems"))
          : [],
        shippingInfo: localStorage.getItem("shippingInfo")
           ? JSON.parse(localStorage.getItem("shippingInfo"))
           : {},
    }
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware),)
);

export default store;
