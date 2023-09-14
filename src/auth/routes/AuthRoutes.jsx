import React from 'react'
import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'
import { Route, Routes, Navigate } from 'react-router-dom'
import { RegisterSlider } from '../components/RegisterSlider'

export const AuthRoutes = () => {
    return (
        <div className=''>

            <Routes>
                <Route path='login' element={<LoginPage></LoginPage>}></Route>
                <Route path='/register' element={<RegisterSlider></RegisterSlider>}></Route>
                <Route path='/cube' element={<RegisterSlider></RegisterSlider>} />
                <Route path='/*' element={<Navigate to='/auth/login'></Navigate>}></Route>
            </Routes>

        </div>
    )
}
