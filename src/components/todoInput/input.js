import React from "react";
import './input.css'
export const TodosInput = props => {
    return (
        <div className='addComponents'>
            <input
                type="text"
                placeholder="What needs to be done?"/>
        </div>
    )
}