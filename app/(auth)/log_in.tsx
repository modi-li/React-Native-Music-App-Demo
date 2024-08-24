import {
	ScrollView,
	View,
	TouchableOpacity,
	Text,
	TextInput,
	Alert,
} from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import { useAuthContext } from "@/contexts/AuthContext";
import Colors from "@/constants/Colors";
import MainPageContainer from "@/components/MainPageContainer";

const LogIn = () => {
	const { logIn } = useAuthContext();

	const [form, setForm] = useState({
		email: "",
		password: "",
	});

	const logInButtonTapped = async () => {
		try {
			const res = await logIn(form.email, form.password);
			if (res) {
				router.replace("/home");
			} else {
				Alert.alert("Cannot log in. Please try again.");
			}
		} catch (error) {
			console.log(error);
			Alert.alert("Log in failed. Please try again.");
		}
	};

	return (
		<MainPageContainer>
			<ScrollView contentContainerStyle={{ height: "100%" }}>
				<View className="w-full h-full bottom-32 px-10 flex justify-center items-start">
					<Text className="text-4xl font-bold text-black dark:text-white">
						Log In
					</Text>
					<TextInput
						className="w-full h-14 mt-14 px-3 rounded-2xl text-base dark:text-white bg-white dark:bg-gray1"
						style={{ lineHeight: 0 }}
						value={form.email}
						placeholder="Email"
						placeholderTextColor={Colors.gray2}
						onChangeText={(value) =>
							setForm({ ...form, email: value })
						}
					/>
					<TextInput
						className="w-full h-14 mt-4 px-3 rounded-2xl text-base dark:text-white bg-white dark:bg-gray1"
						style={{ lineHeight: 0 }}
						value={form.password}
						placeholder="Password"
						placeholderTextColor={Colors.gray2}
						onChangeText={(value) =>
							setForm({ ...form, password: value })
						}
						secureTextEntry={true}
					/>
					<TouchableOpacity
						className="w-full h-16 mt-16 flex justify-center items-center rounded-2xl bg-black dark:bg-white"
						activeOpacity={0.7}
						onPress={logInButtonTapped}
					>
						<Text className="text-lg font-medium text-white dark:text-black">
							Log In
						</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</MainPageContainer>
	);
};

export default LogIn;
