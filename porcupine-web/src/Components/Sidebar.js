import {Link} from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import './Sidebar.css';
import GetInTouch from './GetInTouch';
import MiniPost from './MiniPost';
import Footer from './Footer'
import Topbox from './Topbox';
import Menu from './Menu';
const qs = require('qs');

function Sidebar(props) {
    const [postData, setPostData] = useState([])
    
    const headers = {
        'Authorization': 'Bearer ' + process.env.REACT_APP_STRAPI_BEARER
     };

     useEffect(() => {
        getNewsPosts().then(d => {setPostData(d);});  
    }, []);

    // Function to collect data
    async function getNewsPosts() {
        const query = qs.stringify({
            pagination: {
                start: 0,
                limit: 3,
            },
            sort: ['publishedAt:desc'],
            fields: ['Description', 'Link'],
            encodeValuesOnly: true, // prettify URL
        });
        console.log('https://lpunionnc-cms.azurewebsites.net/api/newses?' + query);
        const response = await fetch('https://lpunionnc-cms.azurewebsites.net/api/newses?populate=*&' + query, {method:'GET', headers:headers});
        const json = await response.json();
        return json.data;
    };


    return (
        <div id="sidebar">
			<div className="inner">
				<Topbox />
				<Menu />
                <section>
                    <header className="major">
                        <h2>Libertarian News Articles</h2>
                    </header>
                    <div className="mini-posts">
                        {postData.map((element, index) =>
                            <MiniPost key={index} link={element.attributes.Link} imgSrc={element.attributes.Image.data.attributes.url} text={element.attributes.Description} />
                        )}                 
                    </div>
                    <ul className="actions">
                        <li><a href="#" className="button">More</a></li>
                    </ul>
                </section>
				<GetInTouch />
				<Footer />
			</div>
		</div>
    );
}

export default Sidebar;