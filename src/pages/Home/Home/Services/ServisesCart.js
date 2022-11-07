import React from 'react';
import { Link } from 'react-router-dom';

const ServisesCart = ({ service }) => {
	const {_id,title,img,price}=service
	return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-5 pt-5">
        <img src={img} alt="Shoes" className="rounded-xl " />
      </figure>
      <div className="card-body  ">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions flex justify-between">
          <p className="text-2xl font-semibold text-orange-600">
            Price : ${price}
          </p>
          <Link to={`/checkout/${_id}`}>
            <button className="btn btn-primary">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServisesCart;