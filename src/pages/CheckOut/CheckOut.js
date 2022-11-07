import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const CheckOut = () => {
	const { title, price ,_id} = useLoaderData()
	const { user } = useContext(AuthContext)

	const handePlaceOrder = e => {
		e.preventDefault()
		const form = e.target;
		const name = `${form.firstName.value} ${form.lastName.value}`;
		const phone = form.phone.value;
		const email = form.email.value || "Unregister"
		const massage = form.massage.value
		const order = {
			service: _id,
			serviceName: title,
			price,
			customer: name,
			phone,
			email,
			massage
		}
		console.log(order)
		fetch("https://car-crud-server.vercel.app/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Successfuly place order");
          form.reset();
        }
      })
      .catch((err) => console.log(err));
	}

	return (
    <div>
			<h1 className='text-4xl'>Place your order: {title}</h1>
			<p className='text-3xl'>price : ${price}</p>
      <form onSubmit={handePlaceOrder}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-6">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="input input-bordered w-full "
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="input input-bordered w-full "
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="input input-bordered w-full "
          />
          <input
            type="text"
            name="email"
			defaultValue={user?.email}
			readOnly
            placeholder="Email"
            className="input input-bordered w-full "
          />
        </div>
        <textarea
          className="textarea textarea-bordered w-full my-6 h-56"
          name="massage"
          placeholder="Write your massage"
        ></textarea>
        <input className="btn btn-primary" type="submit" value="Place Order" />
      </form>
    </div>
  );
};

export default CheckOut;