import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header'

import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import Post from './Post';
import Posts from './Posts';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';

function App() {
  return (
    <div id="wrapper">
		<div id="main">
			<div className="inner">
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/index.html' element={<Home />} />
        			<Route path='/post/:slug' element={<Post></Post>} />
					<Route path='/posts/' element={<Posts></Posts>} />
					<Route path="/about" element={<AboutUs />} />
					<Route path="/contactus" element={<ContactUs />} />
				</Routes>
			</div>
		</div>
	<Sidebar />
    </div>
  );
}

export default App;
