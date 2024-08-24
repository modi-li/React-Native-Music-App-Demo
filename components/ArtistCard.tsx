import { TouchableOpacity, Text, Image } from "react-native";
import { router } from "expo-router";

const ArtistCard = ({ artist }) => {
	return (
		<TouchableOpacity
			className="flex items-center space-y-1"
			activeOpacity={0.7}
			onPress={() =>
				router.navigate({
					pathname: "/artist",
					params: { artistId: artist.id },
				})
			}
		>
			<Image
				className="w-20 h-20 rounded bg-gray5"
				style={{ backgroundColor: artist.imageBackgroundColor }}
			></Image>
			<Text className="text-base font-medium text-gray1 dark:text-white">
				{artist.name}
			</Text>
		</TouchableOpacity>
	);
};

export default ArtistCard;
