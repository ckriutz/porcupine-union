import {Link} from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import './MiniArticle.css';

function MiniArticle(props) {
    const [MiniArticleData, setData] = useState([])
    const [MiniArticleImage, setImageData] = useState([])
    const headers = {
        'Authorization': 'Bearer ' + process.env.REACT_APP_STRAPI_TOKEN
     };
    
    useEffect(() => async() => {
        const response = await fetch(process.env.REACT_APP_STRAPI_API_URL +'/api/posts/' + props.id+'?populate=*', {method:'GET', headers:headers});
        const json = await response.json();
        setData(json.data.attributes);
        setImageData(json.data.attributes.Image.data.attributes.url);
        
    }, [props]);

    return (
        <article>
            <Link to={{pathname: '/post/' + MiniArticleData.Slug}} className='image'><img src={MiniArticleImage} /></Link>
            <h3>{MiniArticleData.Title}</h3>
            <p>{MiniArticleData.Description}</p>
            <ul className='actions'>
                <li>
                    <Link to={{pathname: '/post/' + MiniArticleData.Slug}}>
                        <button>More</button>
                    </Link>
                </li>
            </ul>
        </article>
    );
}

export default MiniArticle;