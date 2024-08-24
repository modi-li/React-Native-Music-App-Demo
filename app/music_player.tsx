import { ScrollView, View, TouchableOpacity, Text, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useCurrentMusicContext } from "@/contexts/CurrentMusicContext";
import Colors from "@/constants/Colors";
import MainPageContainer from "@/components/MainPageContainer";
import { musicDurationToFormattedString } from "@/tools/helpers";
import { getExampleDataMusic } from "@/data/example_data";
import Slider from "@react-native-community/slider";

const MusicPlayer = () => {
	const { musicId } = useLocalSearchParams();

	const {
		musicIsPlaying,
		setMusicIsPlaying,
		musicCurrentDuration,
		setMusicCurrentDuration,
	} = useCurrentMusicContext();

	const music = getExampleDataMusic(musicId as string);

	const togglePlayPause = () => {
		setMusicIsPlaying(!musicIsPlaying);
	};

	return (
		<MainPageContainer backButton={1}>
			<ScrollView contentContainerStyle={{ height: "100%" }}>
				<View className="flex items-center">
					<Image
						className="w-64 h-64 mt-10 rounded bg-gray5"
						style={{
							backgroundColor: music?.imageBackgroundColor,
						}}
					></Image>
					<View className="w-64 mt-6 flex justify-start">
						<Text className="text-2xl font-bold">
							{music?.name}
						</Text>
						<Text className="text-lg font-medium">
							{music?.artist.name}
						</Text>
					</View>
					<View className="w-72 mt-10">
						<Slider
							style={{ width: "100%" }}
							value={musicCurrentDuration}
							minimumValue={0}
							maximumValue={music!.duration}
							minimumTrackTintColor={Colors.black}
							maximumTrackTintColor={Colors.gray4}
							onValueChange={(value) => {
								setMusicCurrentDuration(value);
							}}
							step={1}
						></Slider>
						<View className="mt-3 flex flex-row justify-between">
							<Text className="text-gray2">
								{musicDurationToFormattedString(
									musicCurrentDuration
								)}
							</Text>
							<Text className="text-gray2">
								{musicDurationToFormattedString(
									music!.duration
								)}
							</Text>
						</View>
					</View>
					<View className="w-72 mt-7 flex flex-row justify-evenly items-center ">
						<TouchableOpacity activeOpacity={0.7}>
							<Ionicons
								name="play-skip-back"
								size={34}
								color={Colors.gray1}
							/>
						</TouchableOpacity>
						<TouchableOpacity
							activeOpacity={0.7}
							onPress={togglePlayPause}
						>
							<Ionicons
								name={musicIsPlaying ? "pause" : "play"}
								size={46}
								color={Colors.gray1}
							/>
						</TouchableOpacity>
						<TouchableOpacity activeOpacity={0.7}>
							<Ionicons
								name="play-skip-forward"
								size={34}
								color={Colors.gray1}
							/>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</MainPageContainer>
	);
};

export default MusicPlayer;
