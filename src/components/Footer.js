import React, { useEffect } from "react";
import Map from "./Map"; 
import '../style/ComponentStyle/Footer.css'

const Footer = () => {

    useEffect(()=> {
        Map() 
    }
    ,[]);
    
    return (
        <footer className="ui segment center aligned two column grid" id="footer">
            <div className="column">   
                <br/>
                <a href='/' >
                    <h2 className="ui item header">Amanda K. Clark Law</h2>
                </a>
                <h5>All Rights Reserved</h5>
                <div id="map" style={{height: '250px'}}></div>
            </div>
            
            <div className=" column">
                <br/>
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