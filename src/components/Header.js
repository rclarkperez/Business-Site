import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import Dropdown from "./Dropdown";
import '../style/ComponentStyle/Header.css';

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
    return (
        <div className="ui secondary pointing menu header floating" id="header">
            <Link className='item' to='/'><h2>Amanda K. Clark Law</h2></Link>
            <Link className='item' to='/'><label id='labelHeader'>Home</label></Link>
            <Link className='item' to='about'><label id='labelHeader'>About</label></Link>
            <div className="ui item" >
                    <Dropdown 
                    labelId={'labelHeader'}
                    options ={options}
                    selected={'Services'}/>
            </div>
            <Link className='item' to='contact'><label id="labelHeader">Contact</label></Link>
        </div>
    );
};

export default Header;