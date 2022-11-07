import React from 'react';

const BannerItem = ({ slider }) => {
	const {image,id ,next,prev}=slider
	return (
		<div id={`slide${id}`} className="carousel-item relative w-full ">
				<div className='carosel-img'>
					<img src={image} alt='' className="w-full" />
				</div>
				
				<div className="absolute  transform -translate-y-1/2 left-8 top-1/4">
					<h1 className='text-7xl font-bold text-white'>Affordable <br /> Price For Car <br /> Servicing</h1>
				</div>
				<div className="absolute  transform -translate-y-1/2 left-5 top-1/2">
					<p className='w-1/3 mt-8 text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
				</div>
				<div className="absolute  transform -translate-y-1/2 left-5 top-3/4">
					<div className='flex mt-8'>
						<button className="btn btn-warning mr-5">Warning</button>
						<button className="btn btn-outline btn-success">Success</button>
					</div>
				</div>
				<div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
				<a href={`#slide${prev}`} className="btn btn-circle mr-5 hover:bg-orange-600 ">❮</a> 
				<a href={`#slide${next}`} className="btn btn-circle hover:bg-orange-600 ">❯</a>
				</div>
			</div>
	);
};

export default BannerItem;