import React, { useEffect, useState } from 'react';
import ServisesCart from './ServisesCart';

const Services = () => {
	const [ services,setServices ] = useState([])
	useEffect(() => {
		fetch("https://car-crud-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
	}, [])
	return (
		<div className='my-20'>
			<div className='text-center max-w-2xl mx-auto mb-6'>
				<p className='text-2xl text-orange-600 font-bold'>Service</p>
				<h1 className='text-5xl text-semibold'>Our Service Area</h1>
				<p className=''>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
			</div>
			<div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3 '>
				{
					services.map(service => <ServisesCart
						key={service._id}
						service={service}
					></ServisesCart>)
				}
			</div>
			
		</div>
	);
};

export default Services;