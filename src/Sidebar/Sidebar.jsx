import './Sidebar.css'
import Category from './Category/category'
import React from 'react'
import Price from './Price/Price'
import Colors from './Colors/Colors'

export default function Sidebar({handleChange}) {
  
  return (
   <>
   
   <section className="sidebar">
    <div className="logo-container">
        <h1>🛒</h1>
    </div>

    <Category  handleChange={handleChange}/>
    <Price handleChange={handleChange}/>
    <Colors handleChange={handleChange}/>

   </section>

   </>
  )
}
