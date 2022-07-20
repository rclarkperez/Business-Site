import React, { useState } from "react";
import { Link } from "react-router-dom";


const Dropdown = ({labelString, options, selected, setSelection, type, selectionLink, geoState}) => {
    const [open, setAsOpen] = useState(false);   

    
    const renderOptions = options.map((option) => {
        if (option.hasOwnProperty('address')) {
            return (
                <div className="item" 
                key ={option.label}
                onClick={() => setSelection(option.label)}>
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
            onClick={() => setSelection(option.label)}>
                {option.label} 
            </div>
        )
    });

    return (
        <div className="field ui form">
                <label>{labelString}</label>
                <div value={selected} onClick={()=>setAsOpen(!open)}
                className={`ui ${type} dropdown ${open ? 'visible active': ''}`}>

                    <div className="text">{selected}</div>
                    {type? <i className="dropdown icon"></i>: <></>}
                    <div className={`menu ${open ? 'visible transition': ''}`}>
                        {renderOptions}
                    </div>
                </div>
            </div>
    );
};

export default Dropdown;
