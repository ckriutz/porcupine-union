import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

function AboutUs() {
    const [AboutData, setData] = useState([])

    const headers = {
        'Authorization': 'Bearer ' + process.env.REACT_APP_STRAPI_BEARER
     };
    
    useEffect(() => async() => {
        const response = await fetch('https://lpunionnc-cms.azurewebsites.net/api/about?populate=*', {method:'GET', headers:headers});
        const json = await response.json();
        await setData(json.data.attributes);
    }, []);

    return (
        <section>
            <h1>{AboutData.Title}</h1>
            <div>
                <ReactMarkdown children={AboutData.Body} />      
            </div>
        </section>
        
    )
}
export default AboutUs;