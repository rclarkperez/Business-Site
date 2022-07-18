import React, { useState } from "react";
import Disclaimer from "./pages/Disclaimer";
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="ui center aligned container">
            <h4>Amanda K. Clark Law. </h4><h5>All Rights Reserved</h5>
            <div className="ui center aligned container">
                <Link className='item' to='privacypolicy'>Privacy Policy</Link>
                ||
                <Link className='item' to='disclaimer'>Disclaimer</Link>
            </div>
        </footer>
    );
};

export default Footer;