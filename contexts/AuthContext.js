import { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const loadIsLoggedIn = async () => {
		try {
			const isLoggedIn = await AsyncStorage.getItem("isLoggedIn");
			if (isLoggedIn === "true") {
				setIsLoggedIn(true);
			} else {
				setIsLoggedIn(false);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		loadIsLoggedIn();
	}, []);

	const logIn = async (email, password) => {
		try {
			await AsyncStorage.setItem("isLoggedIn", "true");
			setIsLoggedIn(true);
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	};

	const signUp = async (email, password) => {
		try {
			await AsyncStorage.setItem("isLoggedIn", "true");
			setIsLoggedIn(true);
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	};

	const signOut = async () => {
		try {
			await AsyncStorage.setItem("isLoggedIn", "false");
			setIsLoggedIn(false);
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	};

	return (
		<AuthContext.Provider value={{ isLoggedIn, logIn, signUp, signOut }}>
			{children}
		</AuthContext.Provider>
	);
};
