import React from "react";
import { Route, Routes } from "react-router-dom"
import { Home } from '../pages/Home/Home';
import { Login } from '../pages/Login/Login';

export function MainRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
        </Routes>
    )
}