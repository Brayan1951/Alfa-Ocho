import React from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginScreen = () => {
    const navigate = useNavigate()
    const loggin = () => {

        navigate('/integrantes')
    }
    return (
        <div className='inicio'>
            <div>

                <button className='btn-inicio' onClick={loggin}  >Revolución</button>
            </div>
        </div>
    )
}
