import React, { useEffect, useState } from 'react';
import AuthContext from '../contexts/AuthContext';
import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from 'firebase/auth';
import auth from '../../firebase.config';

const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [authLoading, setAuthLoading] = useState(false);

	useEffect(() => {
		setAuthLoading(true);
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
				setAuthLoading(false);
			} else {
				setUser(null);
				setAuthLoading(false);
			}
		});
	}, []);

	const registerUser = ({ email, password }) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};
	const addPhotoURL = (displayName, photoURL) => {
		return updateProfile(auth.currentUser, {
			photoURL,
			displayName,
		});
	};

	const loginUser = ({ email, password }) => {
		return signInWithEmailAndPassword(auth, email, password);
	};
	const provider = new GoogleAuthProvider();

	const loginWithGoogle = () => {
		return signInWithPopup(auth, provider)

	};
	const logoutUser = () => {
		return signOut(auth);
	};

	const userInfo = {
		user,
		setUser,
		authLoading,

		registerUser,
		addPhotoURL,
		loginUser,
		logoutUser,
		loginWithGoogle,
	};

	return (
		<AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
	);
};

export default UserProvider;
