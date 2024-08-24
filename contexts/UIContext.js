import { createContext, useContext, useState, useEffect } from "react";

const UIContext = createContext();

export const useUIContext = () => useContext(UIContext);

export const UIContextProvider = ({ children }) => {
	const [tabBarAndPlayerTotalHeight, setTabBarAndPlayerTotalHeightState] =
		useState(0);

	const setTabBarAndPlayerTotalHeight = (height) => {
		if (tabBarAndPlayerTotalHeight > 0) {
			return;
		}
		setTabBarAndPlayerTotalHeightState(height);
	};

	return (
		<UIContext.Provider
			value={{
				tabBarAndPlayerTotalHeight,
				setTabBarAndPlayerTotalHeight,
			}}
		>
			{children}
		</UIContext.Provider>
	);
};
