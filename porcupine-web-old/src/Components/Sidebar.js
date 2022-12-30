import './Sidebar.css';
import GetInTouch from './GetInTouch';
import MiniPost from './MiniPost';
import Footer from './Footer'
import Topbox from './Topbox';
import Menu from './Menu';

function Sidebar(props) {
    return (
        <div id="sidebar">
			<div class="inner">
				<Topbox />
				<Menu />
                <section>
                    <header class="major">
                        <h2>Libertarian News Articles</h2>
                    </header>
                    <div class="mini-posts">
                        <MiniPost imgSrc="images/pic07.jpg"></MiniPost>
                        <MiniPost imgSrc="images/pic08.jpg"></MiniPost>
                        <MiniPost imgSrc="images/pic09.jpg"></MiniPost>
                    </div>
                    <ul class="actions">
                        <li><a href="#" class="button">More</a></li>
                    </ul>
                </section>
				<GetInTouch />
				<Footer />
			</div>
		</div>
    );
}

export default Sidebar;