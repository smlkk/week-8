import React from 'react'
import Category from './Category'
import Products from './Products'
import Categories from './Categories'
import { Outlet } from 'react-router-dom'

export default function ProductTemplate() {
  return (
    <>
      <div className="col col-lg-2">
        <Category/>

      </div>
      <div className="col-md-10">
        {/*<Products/>*/}
        {/*<Categories/>*/}
        <Outlet/>
      </div>
    </>
    
  )
}
