import React, { useContext } from 'react'
import { AuthContext } from '../auth/authContext'

export const Navbar = () => {

    const arrowPath = `assets/arrow.png`
    const { user, dispatch } = useContext(AuthContext)
    // const { state } = user
    // console.log(user);
    const change = (rl) => {
        const action = {
            type: rl,
            i: user.id,
        }
        dispatch(action)
    }
    return (
        <>
            <div className=' navbar'>
                <img onClick={() => change('l')} className='arrow-l' src={arrowPath} />
                <div className=''>
                    <h1>

                        {user.nombreClave}
                    </h1>
                </div>
                <img onClick={() => change('r')} className='arrow' src={arrowPath} />
            </div>
        </>
    )
}
