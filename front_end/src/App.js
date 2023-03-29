import './App.css';
import axios from 'axios';
import Header from './component/layout/Header/Header.js';
import Footer from './component/layout/Footer/Footer.js';
import {BrowserRouter as Router,Navigate,Route,Routes} from "react-router-dom";
import Home from "./component/Home/Home.js";
import React, {useEffect,useState}  from 'react';
import ProductDetails from './component/Product/ProductDetails.js';
import Products from './component/Product/Products.js';
import Search from './component/Product/Search.js';
import LoginSignUp from './component/User/LoginSignUp';
import store from './store.js';
import { loadUser } from './actions/userAction';
import UpdateProfile from './component/User/UpdateProfile.js';
import UpdatePassword from './component/User/UpdatePassword.js';
import UserOptions from './component/layout/Header/UserOptions';
import { useSelector } from 'react-redux';
import Profile from './component/User/Profile.js';
import ForgotPassword from './component/User/ForgotPassword.js';
import ResetPassword from './component/User/ResetPassword.js';
import Cart from './component/Cart/Cart.js';
import Shipping from './component/Cart/Shipping.js';
import ConfirmOrder from './component/Cart/ConfirmOrder.js';
import Payment from './component/Cart/Payment.js';
import {Elements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import OrderSuccess from './component/Cart/OrderSuccess.js';
import MyOrders from './Order/MyOrders.js';
import OrderDetails from './Order/OrderDetails.js';
import Dashboard from './component/Admin/Dashboard.js';
import ProductList from './component/Admin/ProductList.js';
import ProtectedRoute from './component/ProtectedRoute';
import NewProduct from './component/Admin/NewProduct';
import UpdateProduct from './component/Admin/UpdateProduct';
import OrderList from './component/Admin/OrderList';
import ProcessOrder from './component/Admin/ProcessOrder';
import UserList from './component/Admin/UserList';
import UpdateUser from './component/Admin/UpdateUser';
import ProductReviews from './component/Admin/ProductReviews';
import About from './component/About_Contact/About';
import Contact from './component/About_Contact/Contact';
import NotFound from './component/Not Found/NotFound';

function App() {

   const {loading,isAuthenticated,user} = useSelector((state)=>state.user);
   const [stripeApiKey,setStripeApiKey] = useState("");

   async function getStripeApiKey(){
    const {data} = await axios.get("/api/v1/stripeapikey");
    setStripeApiKey(data.stripeApiKey);
 
   }

useEffect(()=>{

  store.dispatch(loadUser());
  getStripeApiKey();
},[]);
  return (
    <Router>
    <Header />
    {isAuthenticated && <UserOptions user={user}/>}
   
    
    <Routes>
    <Route exact path='/' element={<Home/>} />
    <Route exact path='/product/:id' element={<ProductDetails/>} />
    <Route exact path='/products' element={<Products/>} />
    <Route exact path='/search' element={<Search />} />
    <Route exact path='/about' element={<About />} />
    <Route exact path='/contact' element={<Contact />} />
    <Route exact path='/products/:keyword' element={<Products />} />
    {/* {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
        <Route exact path='/process/payment' element={!loading && isAuthenticated===false ?  <Navigate to="/login"/>:<Payment /> }/>
        </Elements>
      )} */}
   <Route exact path='/me/update' element={!loading && isAuthenticated===false ?  <Navigate to="/login"/>: <UpdateProfile/>}/>
   <Route exact path='/account' element={!loading && isAuthenticated===false ?  <Navigate to="/login"/>: <Profile/>} />
   <Route exact path='/password/update' element={!loading && isAuthenticated===false ? <Navigate to="/login"/>:  <UpdatePassword />}/>
   <Route exact path='/password/forgot' element={<ForgotPassword />} />
   <Route exact path='/password/reset/:token' element={<ResetPassword />} />
   <Route exact path = '/cart' element={<Cart />} />
   <Route exact path='/login' element={<LoginSignUp />} />
   <Route exact path='/login/shipping' element={!loading && isAuthenticated===false ? <Navigate to="/login"/>:  <Shipping />}/>
   <Route exact path='/order/confirm' element={!loading && isAuthenticated===false ?  <Navigate to="/login"/>:<ConfirmOrder /> }/>
   <Route exact path='/process/payment' element={<ProtectedRoute isAdmin={false}> 
   {stripeApiKey && <Elements stripe={loadStripe(stripeApiKey)}><Payment /> </Elements> 
  }</ProtectedRoute>} />
       
    <Route exact path='/success' element={!loading && isAuthenticated===false ?<Navigate to="/login"/>:  <OrderSuccess /> }/>  
   <Route exact path='/orders' element={!loading && isAuthenticated===false ?  <Navigate to="/login"/>:<MyOrders /> }/>
   <Route exact path='/order/:id' element={!loading && isAuthenticated===false ?  <Navigate to="/login"/>:<OrderDetails /> }/>
   <Route path='/admin/dashboard' element={<ProtectedRoute isAdmin={true}><Dashboard /></ProtectedRoute>}/>
   <Route path='/admin/products' element={<ProtectedRoute isAdmin={true}><ProductList /></ProtectedRoute>}/>
   <Route path='/admin/product' element={<ProtectedRoute isAdmin={true}><NewProduct /></ProtectedRoute>}/>
   <Route path='/admin/product/:id' element={<ProtectedRoute isAdmin={true}><UpdateProduct /></ProtectedRoute>}/>
   <Route path='/admin/orders' element={<ProtectedRoute isAdmin={true}><OrderList /></ProtectedRoute>}/>
   <Route path='/admin/order/:id' element={<ProtectedRoute isAdmin={true}><ProcessOrder /></ProtectedRoute>}/>
   <Route path='/admin/users' element={<ProtectedRoute isAdmin={true}><UserList /></ProtectedRoute>}/>
   <Route path='/admin/user/:id' element={<ProtectedRoute isAdmin={true}><UpdateUser /></ProtectedRoute>}/>
   <Route path='/admin/reviews' element={<ProtectedRoute isAdmin={true}><ProductReviews /></ProtectedRoute>}/>
   <Route path="/404" element={<NotFound />} />
          	<Route path="*" element={<Navigate to="/404" />} />
   {/* <Route exact path='/admin/dashboard' element={<Dashboard/>} />
   <Route exact path='/admin/products' element={<ProductList />} /> */}

    </Routes>

    <Footer />
    </Router>
    
  );
}

export default App;
