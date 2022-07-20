import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import Dropdown from "./Dropdown";
import Probates from "./pages/Probates";
import Guardianships from "./pages/Guardianships";

const options = [
    {
        label: 'Probates',
        address: '/probates'
    },
    {
        label: 'Guardianships',
        address: '/guardiansips'
    },
]

const Header = () => {
    const [selected, setSelection] =useState('');

    useEffect(() => {
        setSelection('');
    });

    return (
        <div className="ui secondary pointing menu header floating" style={{ paddingTop: '0%'}}>
            <Link className='item' to='/'><h2>Amanda K. Clark Law</h2></Link>
            <Link className='item' to='/'>Home</Link>
            <Link className='item' to='about'>About</Link>
            <Link className='item' to='contact'>Contact</Link>
            <div className="item menu" >
                    <Dropdown 
                    options ={options}
                    setSelection ={setSelection}
                    selected={'Services'}
                />
            </div>
        </div>
    );
};

export default Header;