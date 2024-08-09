import React from 'react'
import { NavLink, Outlet } from 'react-router'

function HelpLayout() {
  return (
    <div className='help-layout'>
        <h2>Website Help</h2>      
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod animi nam quisquam totam ad, itaque sit aspernatur, praesentium, unde facere blanditiis nostrum at officia officiis voluptatum ea recusandae tenetur. Beatae.</p>

        <nav>
            <NavLink to="faq">View the Faq</NavLink>
            <NavLink to="contact">Contact Us</NavLink>
        </nav>

        <Outlet />
    </div>
  )
}

export default HelpLayout
