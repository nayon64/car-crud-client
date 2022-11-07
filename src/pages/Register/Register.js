import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from "../../assets/images/login/login.svg";
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Register = () => {
	const {singUp}=useContext(AuthContext)
	const handleRegister = e => {
		e.preventDefault()
		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;
		console.log(name, email, password)
		singUp(email, password)
			.then(res => {
				const user = res.user
				console.log(user)
				form.reset()
				alert("Successfully user Create")
			})
		.then(error=>console.error(error))
	}
	return (
		<div className="hero py-10 my-10 ">
			<div className="hero-content grid grid-cols-2">
				<div className="text-center lg:text-left">
				<img className="w-3/4" src={img} alt="" />
				</div>
				<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
					<form onSubmit={handleRegister} className="card-body">
						<h1 className="text-4xl text-center font-bold text-gray-700">
						Sign up
						</h1>
						<div className="form-control">
						<label className="label">
							<span className="label-text">Name</span>
						</label>
						<input
							type="text"
							name="name"
							placeholder="name"
							className="input input-bordered"
							required
						/>
						</div>
						<div className="form-control">
						<label className="label">
							<span className="label-text">Email</span>
						</label>
						<input
							type="text"
							name="email"
							placeholder="email"
							className="input input-bordered"
							required
						/>
						</div>
						<div className="form-control">
						<label className="label">
							<span className="label-text">Password</span>
						</label>
						<input
							type="password"
							name="password"
							placeholder="password"
							className="input input-bordered"
							required
						/>
						</div>
						<div className="form-control mt-6">
						<input className="btn btn-primary" type="submit" value="Register" />
						</div>
					</form>
					<h1 className='text-center mb-6'>Already have an account <Link className='text-rose-600 font-semibold text-2xl' to="/login">Log in</Link></h1>
				</div>
			</div>
		</div>
  );
};

export default Register;