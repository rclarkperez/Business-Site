import React from "react";
import '../../style/PagesStyle/About.css';

const About = () => {
    return (
        <div className="ui center aligned two column grid">
            <br/>
            <div className="ui segment">
                <h1 className="ui center aligned container">Biography</h1>
            </div>
            <div id="about-photo" className="ui segment column"></div>
            <div id='text-content' className="ui column">
                <h3 >Background</h3>
                <p>
                    Amanda K. Clark received her law degree from the University of Idaho, College of Law. Prior to her admission to the bar, Amanda was a legal assistant for six years gaining invaluable experience in family and elder law.
                    Amanda's law practice focuses on estate planning, probates, and adult guardianships. Amanda represents families seeking protective arrangements for their loved ones, including guardianships and conservatorships. 
                    Her clients appreciate her compassionate and practical approach to the law.
                    Amanda lives in Tacoma with her husband, Ryan. In her spare time, Amanda enjoys spending time with her family, hiking, and exploring the many restaurants and food trucks in the Pacific Northwest.
                </p>

                <h4>Education</h4>
                <p>
                    University of Idaho College of Law, Boise, Idaho
                    <br/>
                    Honors: Dean’s List
                    <br/>
                    <br/>
                    Washington State University, Pullman, Washington
                    <br/>
                    B.A.
                    <br/>
                    Honors: cum laude
                    <br/>
                    Major: Business Administration
                     <br/>
                     <br/>
                    Professional Associations
                    <br/>
                    Thurston County Bar Association Member 2021-Present
                </p>
            </div>
        </div>
    );
};

export default About;