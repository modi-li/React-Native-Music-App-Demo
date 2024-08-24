import {
	View,
	TouchableOpacity,
	Text,
	Image,
	useColorScheme,
} from "react-native";
import { router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useUIContext } from "@/contexts/UIContext";
import { useCurrentMusicContext } from "@/contexts/CurrentMusicContext";
import Colors from "@/constants/Colors";
import { getExampleDataMusic } from "@/data/example_data";

const TabBar = ({ state, descriptors, navigation }) => {
	const { setTabBarAndPlayerTotalHeight } = useUIContext();

	const { currentMusicId, musicIsPlaying, setMusicIsPlaying } =
		useCurrentMusicContext();

	const currentMusic = getExampleDataMusic(currentMusicId)!;

	const playPauseButtonTapped = () => {
		setMusicIsPlaying(!musicIsPlaying);
	};

	const icon = {
		home: (props) => (
			<Ionicons name="musical-notes" size={28} color={props.color} />
		),
		me: (props) => <Ionicons name="person" size={28} color={props.color} />,
	};

	return (
		<View
			className="absolute bottom-0 w-full items-center"
			onLayout={(event) => {
				const { height } = event.nativeEvent.layout;
				setTabBarAndPlayerTotalHeight(height);
			}}
		>
			<View className="w-full mb-2 px-4">
				<View className="px-5 py-2 flex flex-row justify-between items-center rounded-full border dark:border-2 border-gray4 dark:border-gray1 bg-gray5 dark:bg-black shadow-2xl dark:shadow-none">
					<TouchableOpacity
						className="flex flex-row items-center"
						activeOpacity={0.7}
						onPress={() =>
							router.navigate({
								pathname: "/music_player",
								params: { musicId: currentMusicId },
							})
						}
					>
						<Image
							className="w-10 h-10 rounded-lg"
							style={{
								backgroundColor:
									currentMusic.imageBackgroundColor,
							}}
						></Image>
						<View className="ml-2 flex justify-center">
							<Text className="text-base font-medium dark:text-white">
								{currentMusic.name}
							</Text>
							<Text className="text-sm dark:text-white">
								{currentMusic.artist.name}
							</Text>
						</View>
					</TouchableOpacity>
					<View>
						<TouchableOpacity
							activeOpacity={0.7}
							onPress={playPauseButtonTapped}
						>
							<Ionicons
								name={musicIsPlaying ? "pause" : "play"}
								size={28}
								color={
									useColorScheme() === "light"
										? Colors.gray1
										: Colors.gray4
								}
							/>
						</TouchableOpacity>
					</View>
				</View>
			</View>
			<View className="pt-2 pb-10 flex flex-row items-center bg-gray5 dark:bg-black">
				{state.routes.map((route, index) => {
					const { options } = descriptors[route.key];
					const label =
						options.tabBarLabel !== undefined
							? options.tabBarLabel
							: options.title !== undefined
							? options.title
							: route.name;

					const isFocused = state.index === index;

					const onPress = () => {
						const event = navigation.emit({
							type: "tabPress",
							target: route.key,
							canPreventDefault: true,
						});

						if (!isFocused && !event.defaultPrevented) {
							navigation.navigate(route.name, route.params);
						}
					};

					const onLongPress = () => {
						navigation.emit({
							type: "tabLongPress",
							target: route.key,
						});
					};

					return (
						<TouchableOpacity
							key={route.key}
							accessibilityRole="button"
							accessibilityState={
								isFocused ? { selected: true } : {}
							}
							accessibilityLabel={
								options.tabBarAccessibilityLabel
							}
							testID={options.tabBarTestID}
							onPress={onPress}
							onLongPress={onLongPress}
							className="flex flex-1 justify-center items-center"
							activeOpacity={0.7}
						>
							{icon[route.name]({
								color: isFocused
									? useColorScheme() === "light"
										? Colors.black
										: Colors.white
									: useColorScheme() === "light"
									? Colors.gray3
									: Colors.gray2,
							})}
							<Text
								style={{
									color: isFocused
										? useColorScheme() === "light"
											? Colors.black
											: Colors.white
										: useColorScheme() === "light"
										? Colors.gray3
										: Colors.gray2,
								}}
							>
								{label}
							</Text>
						</TouchableOpacity>
					);
				})}
			</View>
		</View>
	);
};

export default TabBar;
