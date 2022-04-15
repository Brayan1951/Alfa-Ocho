import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PersonScreen } from '../components/person/PersonScreen'
import { Navbar } from '../components/ui/Navbar'

export const DashBoardRotes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<PersonScreen />} />
            </Routes>
        </>
    )
}
