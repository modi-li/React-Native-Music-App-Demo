import { ScrollView, FlatList, View, Text, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import MainPageContainer from "@/components/MainPageContainer";
import MusicCard from "@/components/MusicCard";
import { getExampleDataArtist } from "@/data/example_data";

const Artist = () => {
	const { artistId } = useLocalSearchParams();

	const artist = getExampleDataArtist(artistId as string);

	return (
		<MainPageContainer>
			<ScrollView className="h-full px-5">
				<View className="flex items-center">
					<Image
						className="w-24 h-24 rounded bg-gray5"
						style={{
							backgroundColor: artist!.imageBackgroundColor,
						}}
					></Image>
					<Text className="mt-2 text-xl font-medium text-gray1">
						{artist!.name}
					</Text>
				</View>
				<View className="mt-4 mb-1">
					<Text className="text-2xl font-medium">Musics</Text>
				</View>
				<FlatList
					className="w-full p-3 rounded-xl bg-white"
					scrollEnabled={false}
					data={artist?.musics}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => <MusicCard music={item} />}
					ItemSeparatorComponent={() => <View className="h-2"></View>}
				/>
			</ScrollView>
		</MainPageContainer>
	);
};

export default Artist;
