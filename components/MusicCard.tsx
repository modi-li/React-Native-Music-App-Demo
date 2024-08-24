import { View, TouchableOpacity, Text, Image } from "react-native";
import { useCurrentMusicContext } from "@/contexts/CurrentMusicContext";
import { musicDurationToFormattedString } from "@/tools/helpers";

const MusicCard = ({ music }) => {
	const { setCurrentMusic, setMusicIsPlaying, setMusicCurrentDuration } =
		useCurrentMusicContext();

	const musicTapped = () => {
		setCurrentMusic(music.id);
		setMusicIsPlaying(true);
		setMusicCurrentDuration(0);
	};

	return (
		<TouchableOpacity
			className="flex flex-row justify-between items-center"
			activeOpacity={0.7}
			onPress={musicTapped}
		>
			<View className="flex flex-row">
				<Image
					className="w-12 h-12 rounded bg-gray5"
					style={{ backgroundColor: music.imageBackgroundColor }}
				></Image>
				<View className="ml-2 flex justify-center">
					<Text className="text-base font-medium text-gray1 dark:text-white">
						{music.name}
					</Text>
					<Text className="text-sm text-gray1 dark:text-white">
						{music.artist.name}
					</Text>
				</View>
			</View>
			<Text className="text-sm text-gray2 dark:text-gray3">
				{musicDurationToFormattedString(music.duration)}
			</Text>
		</TouchableOpacity>
	);
};

export default MusicCard;
