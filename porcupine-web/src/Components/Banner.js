import React, { useState, useEffect } from 'react'

import './Banner.css';

function Banner() {
    const [BannerData, setData] = useState([])
    const [BannerImage, setImageData] = useState([])

    const headers = {
        'Authorization': 'Bearer ' + process.env.REACT_APP_STRAPI_BEARER
     };
    
    useEffect(() => async() => {
        const response = await fetch('https://lpunionnc-cms.azurewebsites.net/api/banner?populate=*', {method:'GET', headers:headers});
        const json = await response.json();
        await setData(json.data.attributes);
        await setImageData(json.data.attributes.BannerImage.data.attributes.url);
    }, []);

    return (
        <section id="banner">
            <div className="content">
                <header>
                    <h1>{BannerData.Title}</h1>
					<p>{BannerData.TagLine}</p>
				</header>
				<p>{BannerData.BannerText}</p>
                <ul className="actions">
                    <li><a href="#" className="button big">Learn More</a></li>
                </ul>
            </div>
            <span className="image object">
                <img src={BannerImage} alt="" />
            </span>
        </section>
    );
}

export default Banner;