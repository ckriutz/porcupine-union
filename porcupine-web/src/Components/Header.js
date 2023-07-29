import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom';
import './Header.css';

function Header() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    return (
        <div>
            <header id="header">
                <a href="index.html" className="logo">Libertarian Party of Union County</a>
                <ul className="icons">
                    <li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
                    {/*<li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
                    <li><a href="#" className="icon brands fa-snapchat-ghost"><span className="label">Snapchat</span></a></li>
                    <li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
                    <li><a href="#" className="icon brands fa-medium-m"><span className="label">Medium</span></a></li>*/}
                </ul>

            </header>
            <div class="topnav">
                <button onClick={() => { setIsNavExpanded(!isNavExpanded); }}>
                    <i className="fa fa-bars"></i>
                </button>

                <div className={ isNavExpanded ? "navigation-menu-expanded" : "navigation-menu" }>
                    <Link to={{pathname: '/'}}>
                        Home
                    </Link>
                    <Link to={{pathname: '/posts'}}>
                        Posts
                    </Link>
                    <Link to={{pathname: '/about'}}>
                        About Us
                    </Link>
                    <Link to={{pathname: '/contactus'}}>
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;