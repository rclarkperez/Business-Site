import React, { useState } from "react";

const About = () => {
    return (
        <div>
            <h2 className="ui center aligned container">Biography</h2>
            <div>
                <img 
                className="ui segment"
                src='https://images.unsplash.com/photo-1638493489135-34bf34dd320b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80' 
                style= {{ maxHeight: '40vh'}}
                />
            </div>
                <div className="ui segment">
                    <h4>Background</h4>
                    <p>
                        Amanda K. Clark received her law degree from the University of Idaho, College of Law. Prior to her admission to the bar, Amanda was a legal assistant for six years gaining invaluable experience in family and elder law.

                        Amanda's law practice focuses on estate planning, probates, and adult guardianships. Amanda represents families seeking protective arrangements for their loved ones, including guardianships and conservatorships. Her clients appreciate her compassionate and practical approach to the law.

                        Amanda lives in Tacoma with her husband, Ryan. In her spare time, Amanda enjoys spending time with her family, hiking, and exploring the many restaurants and food trucks in the Pacific Northwest.
                    </p>

                <h4>Education</h4>
                <p>
                    University of Idaho College of Law, Boise, Idaho
                    Honors: Dean’s List
                    Washington State University, Pullman, Washington
                    B.A.
                    Honors: cum laude
                    Major: Business Administration
                    Professional Associations
                    Thurston County Bar Association Member 2021-Present
                </p>
            </div>
        </div>
    );
};

export default About;