import Dropdown from "../Dropdown";
import States from "../objects/States";
import telephoneCheck from "../functions/TelephoneValidator";
import React, { useState, useEffect } from "react";


const options = [
    {
    label: 'Yes'
    },
    {
    label: 'No',
    }
];


const Contact = () => {
    const [previousSelected, previousSetSelection] =useState('');
    const [stateSelected, stateSetSelection] =useState('');
    const [inputValue, setValue] =useState('');

    const onChange = (e) => {
        setValue(e.target.value);

    };

    const errorMessage = 'ERROR: You must use a valid phone number'
   

    return (
        <form className="ui form submit" >
            <h2 className="ui center aligned container">Contact Us</h2>
            <div className="ui field segment">
                <label>Name</label>
                <input required placeholder={'John Jackson'}></input>
            </div>
            <div className="ui field segment">
                <label >Email</label>
                <input required placeholder={'email@email.org'}></input>
            </div>
            <div className={`ui field segment${inputValue.length ===0 || telephoneCheck(inputValue) ? '' :'error'}`}>
                <label>Phone</label>
                <input 
                    className="ui input"
                    required placeholder={'555-555-5555'}
                    value={inputValue}
                    onChange={onChange}
                    />
                <div className="ui field error">
                    {`${inputValue.length ===0 || telephoneCheck(inputValue)? '' : errorMessage}`}
                </div>
            </div>
            <div className="ui field segment">
                <Dropdown 
                options={States}
                labelString={'State'}
                selected={stateSelected}
                setSelection={stateSetSelection}
                />
            </div>
            <div className="ui field segment">
                <Dropdown 
                options={options}
                labelString={'Are you a new client?'}
                selected={previousSelected}
                setSelection={previousSetSelection}
                />
            </div>

            <div className="ui field segment">
                <label>Please Describe your Case:</label>
                <textarea placeholder={'It all started...'}></textarea>
            </div>
            <div>
                <button disabled={!telephoneCheck(inputValue)} className="ui submit button primary">Submit</button>
            </div>

        </form>
    );
};

export default Contact;