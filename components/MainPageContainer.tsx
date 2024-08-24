import {
	useColorScheme,
	StatusBar,
	View,
	TouchableOpacity,
	Text,
} from "react-native";
import { router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Colors from "@/constants/Colors";

const MainNavBar = ({ backButton = 0, navTitle = "" }) => {
	return (
		<View
			className={`h-10 flex flex-row justify-center items-center bg-gray5 dark:bg-black ${
				backButton === 0 ? "px-2" : "px-4"
			}`}
		>
			<TouchableOpacity
				className="flex-1"
				activeOpacity={0.7}
				onPress={() => router.back()}
			>
				<Ionicons
					name={
						backButton === 0
							? "chevron-back-outline"
							: "chevron-down-outline"
					}
					size={26}
					color={
						useColorScheme() === "light"
							? Colors.black
							: Colors.white
					}
				/>
			</TouchableOpacity>
			<Text className="text-lg font-medium dark:text-white">
				{navTitle}
			</Text>
			<View className="flex-1"></View>
		</View>
	);
};

const MainPageContainer = ({
	children,
	showNav = true,
	backButton = 0,
	navTitle = "",
}) => {
	return (
		<GestureHandlerRootView>
			<SafeAreaView
				className="flex-1 bg-gray5 dark:bg-black"
				style={{ paddingTop: StatusBar.currentHeight }}
			>
				{showNav ? (
					<MainNavBar backButton={backButton} navTitle={navTitle} />
				) : null}
				{children}
			</SafeAreaView>
		</GestureHandlerRootView>
	);
};

export default MainPageContainer;
