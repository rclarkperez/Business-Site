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
    const [visibility, toggleVisibility] = useState(true);
    const [mobileDisplay, toggleMobile] = useState(false);
    
    const mediaMatch = () => {
        if (window.matchMedia("(max-width: 700px)").matches){
            toggleVisibility(false)
            toggleMobile(true);
        }
        else{
            toggleVisibility(true)
            toggleMobile(false);

        }
    }

    const regularRender = () => {
        return (
            <div className="ui secondary menu header floating" id="header">
                <a id='Link' className='item' href='/'>
                    <h2 id='title'>Amanda K. Clark Law</h2>
                </a>
                <Link onClick={() => {window.matchMedia("(max-width: 700px)").matches? toggleVisibility(false) :toggleVisibility(true) }} id='Link' className='item' to='/'><label id='labelHeader'>Home</label></Link>
                <Link onClick={() => {window.matchMedia("(max-width: 700px)").matches? toggleVisibility(false) :toggleVisibility(true) }}  id='Link' className='item' to='about'><label id='labelHeader'>About</label></Link>
                <div id='Link' className="ui item" >
                        <Dropdown 
                        toggleVisibility={toggleVisibility} 
                        labelId={'labelHeader'}
                        options ={options}
                        selected={'Services'}/>
                </div>
                <Link onClick={() => {window.matchMedia("(max-width: 700px)").matches? toggleVisibility(false) :toggleVisibility(true) }} id='Link' className='item' to='contact'><label id="labelHeader">Contact</label></Link>
        </div>
        
        );
    }

    const openRender = () => {
        return (
            <div className="ui secondary menu header floating" id="header">
               <a id='Link' className='item' href='/'>
                    <h2 id='title'>Amanda K. Clark Law</h2>
                </a>
                <i id="menu-icon" className="fa fa-close" onClick={()=> {toggleVisibility(!visibility)}}></i>
                <Link onClick={() => {window.matchMedia("(max-width: 700px)").matches? toggleVisibility(false) :toggleVisibility(true) }}  id='Link' className='item' to='about'><label id='labelHeader'>About</label></Link>
                <div id='Link' className="ui item" >
                        <Dropdown 
                        toggleVisibility={toggleVisibility} 
                        labelId={'labelHeader'}
                        options ={options}
                        selected={'Services'}/>
                </div>
                <Link onClick={() => {window.matchMedia("(max-width: 700px)").matches? toggleVisibility(false) :toggleVisibility(true) }} id='Link' className='item' to='contact'><label id="labelHeader">Contact</label></Link>
        </div>
        
        );
    }

    const closeRender = () => {
        return (
            <div className="ui secondary menu header floating" id="header">
                <a id='Link' className='item' href='/'>
                    <h2 id='title'>Amanda K. Clark Law</h2>
                </a>
                <i id="menu-icon" className="fa fa-bars" onClick={()=> {toggleVisibility(!visibility)}}></i>
            </div>
        );
    }

    useEffect(() => {
        mediaMatch()
        window.addEventListener('resize', mediaMatch, { capture: true });
    },[]);
    console.log(visibility)
    
    return (
        <div className="ui secondary pointing menu header floating" id="header">
            {!mobileDisplay? regularRender(): (visibility? openRender(): closeRender())}
        </div>
    );
};

export default Header;