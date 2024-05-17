import React from 'react'
import { MyNav } from '../component/myNav'
import Footer from '../component/Footer'
import { Slider } from '../component/Slider'
import { Header } from '../component/Header'
import { Outlet } from 'react-router-dom'

export const SharedLayout = () => {
  return (
    <>
    <MyNav/>
    <Slider/>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}
