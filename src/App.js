import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import AddProduct from './pages/Dashboard/AddProduct/AddProduct';
import ExploreBikes from './pages/Explore/ExploreBikes/ExploreBikes';
import PurchaseProduct from './pages/Purchase/PurchaseProduct/PurchaseProduct';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import UserOrders from './pages/Dashboard/UserOrders/UserOrders';
import Review from './pages/Home/Review/Review';
import AllOrders from './pages/Dashboard/AllOrders/AllOrders';
import AddAdmin from './pages/Dashboard/AddAdmin/AddAdmin';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import AdminRoute from './pages/Login/PrivateRoute/AdminRoute';
import Header from './pages/Shared/Header/Header'
import ManageProducts from './pages/Dashboard/ManageProducts/ManageProducts';
import Payment from './pages/Dashboard/Payment/Payment';
import SellBike from './pages/SecondHandBike/SellBike';
import AllBikesOrders from './pages/SecondHandBike/AllBikesOrders';
import SecondHandBikes from './pages/SecondHandBike/SecondHandBikes';
import NotFound from './pages/Shared/NotFound';
import ManageUsedUserBikes from './pages/SecondHandBike/ManageUsedUserBikes';
const axios = require('axios').default;

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/exploreBikes">
            <ExploreBikes></ExploreBikes>
          </Route>

          <PrivateRoute path="/purchaseProduct/:id">
            <PurchaseProduct></PurchaseProduct>
          </PrivateRoute>

          <PrivateRoute path="/userOrders">
            <UserOrders></UserOrders>
          </PrivateRoute>

          <Route path="/login">
            <Login></Login>
          </Route>

          

          <Route path="/register">
            <Register></Register>
          </Route>

          <Route path="/review">
            <Review></Review>
          </Route>

          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>

          <PrivateRoute path="/payment">
            <Payment></Payment>
          </PrivateRoute>

          <AdminRoute path="/manageAllOrders">
            <AllOrders></AllOrders>
          </AdminRoute>

          <AdminRoute path="/addAdmin">
            <AddAdmin></AddAdmin>
          </AdminRoute>

          <AdminRoute path="/addProduct">
            <AddProduct></AddProduct>
          </AdminRoute>

          <AdminRoute path="/manageProducts">
            <ManageProducts></ManageProducts>
          </AdminRoute>
          
          {/* Second Hand Bikes */}
          <PrivateRoute path="/sellbike">
            <SellBike></SellBike>
          </PrivateRoute>

          <Route path="/allBikesOrders">
            <AllBikesOrders></AllBikesOrders>
          </Route>

          <PrivateRoute path="/secondHandBikes">
            <SecondHandBikes></SecondHandBikes>
          </PrivateRoute>

          <Route path="/manageUsedUserBikes">
            <ManageUsedUserBikes></ManageUsedUserBikes>
          </Route>

          <Route exact path = "*">
            <NotFound></NotFound>
          </Route>

        </Switch>

      </Router>
    </AuthProvider>
  );
}

export default App;
