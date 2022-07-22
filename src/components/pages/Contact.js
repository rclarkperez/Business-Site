import Dropdown from "../Dropdown";
import States from "../objects/States";
import telephoneCheck from "../functions/TelephoneValidator";
import React, { useState, useEffect } from "react";
import axios from "axios";


const options = [
    {
    label: 'Yes'
    },
    {
    label: 'No',
    }
];


const Contact = ({ loaderToggle }) => {
    const geoStateSelected  ='Select a State';
    const [previousSelected, previousSetSelection] =useState('Yes');
    const [stateSelected, stateSetSelection] =useState(geoStateSelected);
    const [geoCity, cityAssign] =useState('');
    const [inputValue, setValue] =useState('');

    const onChange = (e) => {
        setValue(e.target.value);
    };

    const errorMessage = 'ERROR: You must use a valid phone number'
    
    const geoLocation = () => {
        const error = async () => {
            loaderToggle(false)
        }

        const success = async (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const baseURL = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
           
            await axios.get(baseURL).then((response)=> {
                const state =  response.data.principalSubdivision
                const city = response.data.city
                cityAssign(city)
                stateSetSelection(state)
                loaderToggle(false)

        });
        }
        loaderToggle(true)

        window.navigator.geolocation.getCurrentPosition(success, error)
    }
    
    useEffect(()=> {
        geoLocation()
    }, []);

    return (
        <form className='ui form submit segment' >
            <h2 className="ui center aligned container">Contact Us</h2>
            
            <div className="ui field segment required">
                <label>Name</label>
                <input placeholder={'John Jackson'}></input>
            </div>
            <div className="ui field segment required">
                <label >Email</label>
                <input  placeholder={'email@email.org'}></input>
            </div>
            <div className={`ui field segment required ${inputValue.length ===0 || telephoneCheck(inputValue) ? '' :'error'}`}>
                <label>Phone</label>
                <input 
                    className="ui input"
                     placeholder={'555-555-5555'}
                    value={inputValue}
                    onChange={onChange}
                    />
                <div className="ui field error">
                    {`${inputValue.length ===0 || telephoneCheck(inputValue)? '' : errorMessage}`}
                </div>
            </div>
           
            <div className="ui field segment">
                <label>City</label>
                <input placeholder={' Seattle'} value={geoCity} onChange={(event) => cityAssign(event.target.value)}></input>
            </div>
            <div className="ui field segment">
                <Dropdown 
                geoState= {geoStateSelected}
                options={States}
                labelString={'State'}
                selected={stateSelected}
                setSelection={stateSetSelection}
                type={'selection'}
                />
            </div>
            <div className="ui field segment">
                <Dropdown 
                options={options}
                labelString={'Are you a new client?'}
                selected={previousSelected}
                setSelection={previousSetSelection}
                type={'selection'}
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