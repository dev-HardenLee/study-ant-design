import React from 'react';
import {createBrowserRouter, RouteObject} from "react-router-dom";
import MainPage from "../pages/MainPage";
import ButtonPage from "../pages/ButtonPage";
import FloatButtonsPage from "../pages/FloatButtonsPage";


const routes: RouteObject[] = [
    {
        path: '/',
        element: <MainPage/>
    },
    {
        path: '/buttons',
        element: <ButtonPage/>
    },
    {
        path: '/float-buttons',
        element: <FloatButtonsPage/>
    }
]

const root = createBrowserRouter(routes)

export default root;