import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"

export const AuthContext = createContext()
const auth=getAuth(app)

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null)
	const [loading,setLoading]=useState(true)
	

	useEffect(() => {
		const unSuscribe = onAuthStateChanged(auth, currentUser => {
			setUser(currentUser)
			setLoading(false)
		})
		return ()=>unSuscribe()
	},[])
	const singUp = (email, password) => {
		setLoading(true)
		return createUserWithEmailAndPassword(auth,email,password)
	}
	const logIn = (email, password) => {
		setLoading(true)
		return signInWithEmailAndPassword(auth,email,password)
	}

	const logOut= () => {
		return signOut(auth)
	}


	const authInfo = {
		singUp,
		logIn,
		loading,
		user,
		logOut,
		setUser
		
	}
	return (
		<AuthContext.Provider value={authInfo}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;