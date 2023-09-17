import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import { format } from 'date-fns'
import ReactMarkdown from 'react-markdown'
import './Post.css';
const qs = require('qs');

function Posts(props) {
    const [postData, setPostData] = useState([])
    const headers = {
        'Authorization': 'Bearer ' + process.env.REACT_APP_STRAPI_TOKEN
     };

     useEffect(() => {
        getPosts().then(d => {setPostData(d);});  
    }, []);

    // Function to collect data
    async function getPosts() {
        const query = qs.stringify({
            populate: '*',
            encodeValuesOnly: true, // prettify URL
        });
        const response = await fetch(process.env.REACT_APP_STRAPI_API_URL +'/api/posts?' + query, {method:'GET', headers:headers});
        const json = await response.json();
        return json.data;

    };

    return (
        <section>
            <header className="main"><h1>Posts</h1></header>
            <div className="posts">
                {postData.map((post, index) => (
                    <article key={index}>
                        <header>
                            <span className="date">{post.attributes.publishedAt}</span>
                            <h2><a href={"/post/" + post.attributes.Slug}>{post.attributes.Title}</a></h2>
                        </header>
                        <a href={"/post/" + post.attributes.Slug} className="image fit"><img src={post.attributes.Image.data.attributes.formats.small.url} alt="" /></a>
                        <p>{post.attributes.Excerpt}</p>
                        <ul className="actions special">
                            <li><a href={"/post/" + post.attributes.Slug} className="button large">Full Story</a></li>
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Posts;