import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './components/auth/authContext';
import { authReducer } from './components/auth/authReducer';
import { resistencia } from './data/mozos';
import { AppRouter } from './routers/AppRouter';
import "./style.css";

const init = () => {
    return resistencia[0]
}


export const MozoApp = () => {

    const [user, dispatch] = useReducer(authReducer, {}, init)

    useEffect(() => {

        if (!user) return
        localStorage.setItem('user-b', JSON.stringify(user))

    }, [user])


    return (
        <AuthContext.Provider value={{ user, dispatch }}>

            <AppRouter />
        </AuthContext.Provider>
    )
}
