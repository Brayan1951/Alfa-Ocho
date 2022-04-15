import React, { useContext } from 'react'
import { AuthContext } from '../auth/authContext'

export const PersonScreen = () => {

    const { user } = useContext(AuthContext)

    return (
        <div className='persona'>
            <div className='carnet'>
                <div className='img'>

                    <img src={`assets/${'hacker'}.png`} />
                </div>
                <div className='descripcion'>
                    <div className='atri'>
                        <h2>Nombre: <span>{user.nombre}</span> </h2>
                    </div>
                    <div className='atri'>
                        <h2>Edad: <span>{user.edad}</span> </h2>
                    </div>
                    <div className='atri'>
                        <h2>Alias: <span>{user.nombreClave}</span> </h2>
                    </div>



                </div>


            </div>

        </div>
    )
}
