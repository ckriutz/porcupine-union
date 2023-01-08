import React, { useState, useEffect } from 'react'
import MiniArticle from './MiniArticle';
import Banner from './Banner'
const qs = require('qs');

function Home() {
    const [postData, setPostData] = useState([])
    const headers = {
        'Authorization': 'Bearer ' + process.env.REACT_APP_STRAPI_BEARER
     };

    //let posts = [];
    
    useEffect(() => {
        getPosts().then(d => {setPostData(d);});  
    }, []);

    // Function to collect data
    async function getPosts() {
        const query = qs.stringify({
            pagination: {
                start: 0,
                limit: 6,
            },
            sort: ['publishedAt:desc'],
            fields: ['Title', 'Description', 'Slug'],
            encodeValuesOnly: true, // prettify URL
        });
        const response = await fetch('https://lpunionnc-cms.azurewebsites.net/api/posts?' + query, {method:'GET', headers:headers});
        const json = await response.json();
        return json.data;

    };

   return (
        <section>
            <Banner />
            <header className="major">
                <h2>Latest Posts</h2>
            </header>
            <div className="posts">
                {postData.map((element, index) =>
                    <MiniArticle key={index} id={element.id} />
                )};
            </div>
        </section>
    );
}


export default Home;