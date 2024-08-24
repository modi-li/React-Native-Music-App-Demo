import { Stack } from "expo-router";
import { AuthContextProvider } from "@/contexts/AuthContext";
import { UIContextProvider } from "@/contexts/UIContext";
import { CurrentMusicContextProvider } from "@/contexts/CurrentMusicContext";

const RootLayout = () => {
	return (
		<AuthContextProvider>
			<UIContextProvider>
				<CurrentMusicContextProvider>
					<Stack>
						<Stack.Screen
							name="(tabs)"
							options={{ headerShown: false }}
						/>
						<Stack.Screen
							name="(auth)"
							options={{ headerShown: false }}
						/>
						<Stack.Screen
							name="index"
							options={{ headerShown: false }}
						/>
						<Stack.Screen
							name="search/[query]"
							options={{ headerShown: false }}
						/>
						<Stack.Screen
							name="artist"
							options={{ headerShown: false }}
						/>
						<Stack.Screen
							name="music_player"
							options={{
								headerShown: false,
								presentation: "fullScreenModal",
							}}
						/>
						<Stack.Screen
							name="user_followed_artists"
							options={{ headerShown: false }}
						/>
						<Stack.Screen
							name="user_liked_musics"
							options={{ headerShown: false }}
						/>
					</Stack>
				</CurrentMusicContextProvider>
			</UIContextProvider>
		</AuthContextProvider>
	);
};

export default RootLayout;
