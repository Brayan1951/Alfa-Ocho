import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginScreen } from '../components/loggin/LoginScreen';
import { DashBoardRotes } from './DashBoardRotes';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/integrantes/' element={<DashBoardRotes />} />
                <Route exact path='/*' element={<LoginScreen />} />
            </Routes>
        </BrowserRouter>
    )
}
