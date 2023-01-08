import './Menu.css';
import {Link} from 'react-router-dom';
function Menu() {
    return (
        <nav id="menu">
            <header className="major"><h2>Menu</h2></header>
            <ul>
                <li>
                    <Link to={{pathname: '/'}}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to={{pathname: '/posts'}}>
                        Posts
                    </Link>
                </li>
                <li>
                    <Link to={{pathname: '/about'}}>
                        About Us
                    </Link>
                </li>
                <li>
                    <Link to={{pathname: '/contactus'}}>
                        Contact Us
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;