import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';
const Private = () => {
    const token = localStorage.getItem('token')
  return token? <Outlet/> : <Navigate to='/login'></Navigate>
}

export default Private;
