import { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CurrentMusicContext = createContext();

export const useCurrentMusicContext = () => useContext(CurrentMusicContext);

export const CurrentMusicContextProvider = ({ children }) => {
	const [currentMusicId, setCurrentMusicId] = useState("1");
	const [musicIsPlaying, setMusicIsPlaying] = useState(false);
	const [musicCurrentDuration, setMusicCurrentDuration] = useState(0);

	const loadCurrentMusicId = async () => {
		try {
			const currentMusicId = await AsyncStorage.getItem("currentMusicId");
			setCurrentMusicId(currentMusicId || "1");
		} catch (error) {
			console.log(error);
		}
	};

	const setCurrentMusic = async (musicId) => {
		try {
			await AsyncStorage.setItem("currentMusicId", musicId);
			setCurrentMusicId(musicId);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		loadCurrentMusicId();
	}, []);

	return (
		<CurrentMusicContext.Provider
			value={{
				currentMusicId,
				setCurrentMusic,
				musicIsPlaying,
				setMusicIsPlaying,
				musicCurrentDuration,
				setMusicCurrentDuration,
			}}
		>
			{children}
		</CurrentMusicContext.Provider>
	);
};
