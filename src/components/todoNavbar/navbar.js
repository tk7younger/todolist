import React from 'react'
import './navbar.css'
export const TodosNavbar = props => {
    return (
        <div className='header'>
            <h1 className='title'>
                {props.title}
            </h1>

        </div>
    )
}