import { View, TouchableOpacity, Text, Image } from "react-native";
import { router } from "expo-router";

const ArtistCardSmall = ({ artist }) => {
	return (
		<TouchableOpacity
			className="flex flex-row"
			activeOpacity={0.7}
			onPress={() =>
				router.navigate({
					pathname: "/artist",
					params: { artistId: artist.id },
				})
			}
		>
			<Image
				className="w-12 h-12 rounded bg-gray5"
				style={{ backgroundColor: artist.imageBackgroundColor }}
			></Image>
			<View className="ml-2 flex justify-center">
				<Text className="text-base font-medium text-gray1 dark:text-white">
					{artist.name}
				</Text>
				<Text className="text-sm text-gray1 dark:text-white">
					{artist.name}
				</Text>
			</View>
		</TouchableOpacity>
	);
};

export default ArtistCardSmall;
