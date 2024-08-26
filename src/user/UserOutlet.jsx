import React from 'react'
import Header from '../componet/header/Header'
import Footer from '../componet/footer/Footer'
import {Outlet} from 'react-router-dom'

const UserOutlet = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
     <Footer/>
    </div>
  )
}

export default UserOutlet