import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import { format } from 'date-fns'
const qs = require('qs');

function Post(props) {
    const { slug } = useParams();
    const [postData, setPostData] = useState([])
    const headers = {
        'Authorization': 'Bearer ' + process.env.REACT_APP_STRAPI_BEARER
     };

    useEffect(() => {
        getPost().then(d => {setPostData(d);});  
    }, []);

    // Function to collect data
    async function getPost() {
        const query = qs.stringify({
            filters: {
                Slug: {
                  $eq: slug,
                },
              },
            populate: '*',
            encodeValuesOnly: true, // prettify URL
        });
        const response = await fetch('https://lpunionnc-cms.azurewebsites.net/api/posts?' + query, {method:'GET', headers:headers});
        const json = await response.json();
        console.log(json.data);
        return json.data;

    };
    console.log(postData);
    if((Object.keys(postData).length === 0))
    {
        return (<header className="main"><h1>Loading...</h1></header>)
    }
    return (
        <section>
            <header className="main"><h1>{postData[0].attributes.Title}</h1></header>
            <p class="fw-light">{format(new Date(postData[0].attributes.publishedAt), 'MMMM do yyyy')}</p>
            <span className="image main" style={{ maxWidth: 620 }}><img src={postData[0].attributes.Image.data.attributes.formats.small.url} alt="" /></span>
            <div>{postData[0].attributes.Body}</div>
        </section>
    );
}

export default Post;