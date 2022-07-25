import Header from "./components/Header";
import React, { useState } from "react";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Policy from "./components/pages/PrivacyPolicy";
import Disclaimer from "./components/pages/Disclaimer";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/PageNotFound";
import Guardianships from "./components/pages/Guardianships";
import Probates from "./components/pages/Probates";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import history from "./history";


const App = () => {
    const [loader, loaderToggle] = useState(false);

    return (
            <main className="ui form" id="main" >
                    <div className={`${loader? 'ui active dimmer': ''}`}>
                        <div style={{position:'fixed'}} className={`${loader? 'ui text loader': ''}`}>{loader? <h3>Loading</h3>: ''}
                        </div>
                    </div>
            <BrowserRouter history={history}>
                <Header />
                    <div>
                    <Routes>
                        <Route exact path='/' exact element={<Home/>}/>
                        <Route exact path='/about' exact element={<About/>}/>
                        <Route exact path='/disclaimer' exact element={<Disclaimer/>}/>
                        <Route exact path='/privacypolicy' exact element={<Policy/>}/>
                        <Route exact path='/contact' exact element={<Contact loaderToggle={loaderToggle}/>}/>
                        <Route exact path='/guardianships' exact element={<Guardianships/>}/>
                        <Route exact path='/probates' exact element={<Probates/>}/>
                        <Route exact path='/*' exact element={<NotFound/>}/>
                    </Routes>
               
                <div>
                <Footer/>
                </div>
                </div>
            </BrowserRouter>
        </main>
    );
};

export default App;