import React, { useState } from "react";
import { Link } from "react-router-dom";


const Dropdown = ({labelString, options, selected, setSelection, selectionLink}) => {
    const [open, setAsOpen] = useState(false);   

    const renderOptions = options.map((option) => {
        if (option.hasOwnProperty('address')) {
            return (
                <div className="item" 
                key ={option.label}
                onClick={() => setSelection(option)}>
                    <Link className='item' 
                    to={`${option.label}`}>
                    {option.label}
                    </Link>
                </div>
            )
        }
        return (
            <div className="item" 
            key ={option.label}
            onClick={() => setSelection(option)}>
                {option.label} 
            </div>
        )
    });

    return (
        <div className="field ui form">
                <label>{labelString}</label>
                <div onClick={()=>setAsOpen(!open)}
                className={`ui selection dropdown ${open ? 'visible active': ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition': ''}`}>
                        {renderOptions}
                    </div>
                </div>
            </div>
    );
};

export default Dropdown;
