import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header'
import Banner from './Components/Banner'
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import Post from './Post';

function App() {
  return (
    <div id="wrapper">
		<div id="main">
			<div class="inner">
				<Header />
				<Banner />
				<Routes>
					<Route path='/' element={<Home />} />
        			<Route path='post/:slug' element={<Post></Post>} />
				</Routes>
			</div>
		</div>
	<Sidebar />
    </div>
  );
}

export default App;
