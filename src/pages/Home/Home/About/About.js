import React from 'react';
import person from "../../../../assets/images/about_us/person.jpg"
import parts from "../../../../assets/images/about_us/parts.jpg"

const About = () => {
	return (
		<div className="hero py-10 my-10 bg-base-200">
			<div className="hero-content flex-col lg:flex-row">
				<div className='w-1/2 relative'>
					<img src={person} alt="" className=" rounded-lg shadow-2xl w-5/6" />
					<img src={parts} alt="" className="absolute w-4/6 right-0 top-1/2 rounded-md border-white border-4 shadow-2xl" />
				</div>
				<div className='w-1/2'>
					<h4 className='text-xl font-bold text-orange-500 mb-5'>About us</h4>
					<h1 className="text-5xl font-bold mb-7">
						We are qualified <br />
						& of experience <br/>
						in this field
					</h1>
					<p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
					<p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
					<button className="btn btn-primary">Get More Info</button>
				</div>
			</div>
		</div>
	);
};

export default About;