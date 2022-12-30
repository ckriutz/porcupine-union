import React, { useState, useEffect } from 'react'
//import axios from "axios"
import './Banner.css';

function Banner() {
    const [BannerData, setData] = useState([])

    const headers = {
        'Authorization': 'Bearer ' + process.env.REACT_APP_STRAPI_BEARER
     };
    
    useEffect(() => async() => {
        const response = await fetch('http://localhost:1337/api/banner', {method:'GET', headers:headers});
        const json = await response.json();
        console.log(json.data);
        setData(json.data.attributes);
    }, []);

    return (
        <section id="banner">
            <div class="content">
                <header>
                    <h1>{BannerData.Title}</h1>
					<p>{BannerData.TagLine}</p>
				</header>
				<p>{BannerData.BannerText}</p>
                <ul class="actions">
                    <li><a href="#" class="button big">Learn More</a></li>
                </ul>
            </div>
            <span class="image object">
                <img src="images/pic10.jpg" alt="" />
            </span>
        </section>
    );
}

export default Banner;