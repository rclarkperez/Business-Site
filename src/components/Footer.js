import React, { useEffect, useState } from "react";
import Map from "./Map"; ///fix api call so page loads properly 
import {Link} from 'react-router-dom';

const Footer = () => {

    useEffect(()=>
        Map()
    ,[]);
    
    return (
        <footer className="ui center aligned container two column grid ">
            <div className="column">
                <a href='/' >
                    <h2 className="ui item header">Amanda K. Clark Law</h2>
                </a>
                <h5>All Rights Reserved</h5>
                <div id="map" style={{height: '250px'}}></div>
            </div>
            
            <div className="ui float right container column">
            <h3>LOCATION</h3>
            <h5>Address:</h5> 
            <p>1348 Dale Avenue</p>
            <p>Tacoma, WA 98402</p>
            <h5>Phone:</h5> <p>(253)732-3090</p>
            <h5>Email:</h5> <p>wewillfightforyou@email.com</p>
            </div>
            <div className="ui center aligned container">
                <a href="privacypolicy"className='item'>Privacy Policy</a>
                ||
                <a className='item' href='disclaimer'>Disclaimer</a>
                <br/>
                <br/>

            </div>
        </footer>
    );
};

export default Footer;