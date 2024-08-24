import { ScrollView, View, TouchableOpacity, Text } from "react-native";
import { Redirect, router } from "expo-router";
import MainPageContainer from "@/components/MainPageContainer";
import { useAuthContext } from "@/contexts/AuthContext";

const App = () => {
	const { isLoggedIn } = useAuthContext();

	if (isLoggedIn) {
		return <Redirect href="/home" />;
	}

	return (
		<MainPageContainer showNav={false}>
			<ScrollView contentContainerStyle={{ height: "100%" }}>
				<View className="w-full h-full px-10 flex justify-between items-center">
					<Text className="mt-40 text-5xl font-bold text-black dark:text-white">
						Welcome
					</Text>
					<View className="w-full mb-20">
						<TouchableOpacity
							className="w-full h-16 mt-8 flex justify-center items-center rounded-2xl bg-black dark:bg-white"
							activeOpacity={0.7}
							onPress={() => router.navigate("/log_in")}
						>
							<Text className="text-lg font-medium text-white dark:text-black">
								Log In
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							className="w-full mt-8 flex justify-center items-center rounded-2xl"
							activeOpacity={0.7}
							onPress={() => router.navigate("/sign_up")}
						>
							<Text className="text-lg font-medium text-black dark:text-white">
								Create an account
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</MainPageContainer>
	);
};

export default App;
