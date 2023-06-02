import React, { useState, useEffect } from 'react'

import './GetInTouch.css';
function GetInTouch() {
    const [GetInTouchData, setData] = useState([])
    const headers = {
        'Authorization': 'Bearer ' + process.env.REACT_APP_STRAPI_BEARER
     };
    
    useEffect(() => async() => {
        const response = await fetch('https://lpunionnc-cms.azurewebsites.net/api/getintouch?populate=*', {method:'GET', headers:headers});
        const json = await response.json();
        setData(json.data.attributes);
    }, []);

    return (
        <section>
            <header className="major">
                <h2>Get in touch</h2>
            </header>
            <p>{GetInTouchData.Details}</p>
            <ul className="contact">
                <li className="icon solid fa-envelope"><a href="#">{GetInTouchData.Email}</a></li>
            </ul>
        </section>
    );
}

export default GetInTouch;