import React from 'react';
import About from './Home/About/About';
import Carosel from './Home/Carosel/Carosel';
import Services from './Home/Services/Services';

const Home = () => {
	return (
		<div>
			<Carosel></Carosel>
			<About></About>
			<Services></Services>
		</div>
	);
};

export default Home;