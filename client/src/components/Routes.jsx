import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AllProducts from './AllProducts';
import Home from './Home';
import Login from './Login';
import Cart from './Cart';
import SingleProduct from './SingleProduct';

export const RRoutes = ({token, setToken, user, setUser, cart, setCart}) => {
    return (
        <div>
            <Routes>
                <Route path= "/" element= {<Home token={token} setToken={setToken} setUser={setUser} user={user}/>}></Route>
                <Route path="/products" element={<AllProducts token={token} setToken={setToken} setUser={setUser} user={user}/>}> </Route>
                <Route path="/login" element={<Login token={token} setToken={setToken} setUser={setUser} user={user}/>}></Route>
                <Route path="/cart" element={<Cart cart={cart} setCart={setCart} token={token} setToken={setToken} setUser={setUser} user={user}/>}></Route>
                <Route path="/products/me" element={<Home token={token} setToken={setToken} setUser={setUser} user={user}/>}></Route>
                <Route path="/products/single/:id" element={<SingleProduct cart={cart} setCart={setCart} token={token} setToken={setToken} setUser={setUser} user={user}/>}></Route>
            </Routes>
        </div>
    );
};