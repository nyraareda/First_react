import React from 'react'
import { MyNav } from '../component/myNav'
import Footer from '../component/Footer'
import { Slider } from '../component/Slider'
import { Header } from '../component/Header'
import { Outlet, useRouteLoaderData } from 'react-router-dom'

export const SharedLayout = () => {
  // const layoutData = useRouteLoaderData();
  // console.log(layoutData)

  
  return (
    <>
    {console.log("render shared layout")}
    <MyNav/>
    <Slider/>
    <Header/>
    <Outlet/>
    {/* <Outlet layoutData={layoutData}/> */}
    <Footer/>
    </>
  )
}
