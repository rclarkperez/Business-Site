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
        <div className="ui secondary pointing menu header floating">
            <Link className='item' to='/'><h2>Amanda K. Clark Law</h2></Link>
            <Link className='item' to='/'>Home</Link>
            <Link className='item' to='about'>About</Link>
            <div className="item" style={{ paddingTop: '2%'}}>
                    Services
                    <Dropdown className='item' 
                    options ={options}
                    selected ={selected}
                    setSelection ={setSelection}
                />
            </div>
            <Link className='item' to='contact'>Contact</Link>
        </div>
    );
};

export default Header;