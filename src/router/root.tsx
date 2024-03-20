import React from 'react';
import {createBrowserRouter, RouteObject} from "react-router-dom";
import MainPage from "../pages/MainPage";
import ButtonPage from "../pages/ButtonPage";
import FloatButtonsPage from "../pages/FloatButtonsPage";
import CarouselPage from "../pages/CarouselPage";
import CalendarPage from "../pages/CalendarPage";
import CalendarDotsPage from "../pages/CalendarDotsPage";



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
    },
    {
        path: '/carousel',
        element: <CarouselPage/>
    },
    {
        path: '/calendar',
        element: <CalendarPage/>
    },
    {
        path: '/calendar-dots',
        element: <CalendarDotsPage/>
    }
]

const root = createBrowserRouter(routes)

export default root;