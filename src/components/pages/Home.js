import React, { useState } from "react";

const Home = () => {
    return (
        <div className="ui segment">
            <h2 className="ui center aligned container">Attorneys You Can Trust</h2>
            <div className="ui center aligned container">
                <img 
                className="ui segment"
                src='https://images.unsplash.com/photo-1619982842225-871a5d15e73a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80' 
                style= {{ maxHeight: '75vh'}}
                />
            <h3 className="ui center aligned container">Local to Tacoma, WA</h3>
            <br/>
            </div>
            
        </div>
    );
};

export default Home;