import React from 'react';
import LoginPage from '../pages/LoginPage';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import UnAuthorized from '../pages/UnAuthorized';
import AdminPage from '../pages/AdminPage';
import Error from '../pages/Error';
import Home from '../pages/Home';
import ProtectedRoute from '../context/ProtectedRoute';
import UserPage from '../pages/UserPage';
import GuestPage from '../pages/GuestPage';

const RouterData = () => {
    const strictRoute = createBrowserRouter([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/login',
            element: <LoginPage />
        },
        {
            path: '/unauthorized',
            element: <UnAuthorized />
        },
        {
            path: '/admin',
            element: (
                <ProtectedRoute roles={['admin']}>
                    <AdminPage />
                </ProtectedRoute>
            )
        },
        {
            path: '/user',
            element: (
                <ProtectedRoute roles={['admin', 'user']}>
                    <UserPage />
                </ProtectedRoute>
            )
        },
        {
            path: '/guest',
            element: (
                <ProtectedRoute roles={['admin', 'user', 'guest']}>
                    <GuestPage />
                </ProtectedRoute>
            )
        },
        {
            path: '*',
            element: <Navigate to="/login" replace />
        }
    ])
    return strictRoute;
}

export default RouterData;