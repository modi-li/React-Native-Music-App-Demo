import { Stack } from "expo-router";

const AuthLayout = () => {
	return (
		<Stack>
			<Stack.Screen name="log_in" options={{ headerShown: false }} />
			<Stack.Screen name="sign_up" options={{ headerShown: false }} />
		</Stack>
	);
};

export default AuthLayout;
