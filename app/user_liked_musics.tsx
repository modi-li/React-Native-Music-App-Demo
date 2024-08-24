import { ScrollView, FlatList, View } from "react-native";
import MainPageContainer from "@/components/MainPageContainer";
import MusicCard from "@/components/MusicCard";
import { getExampleData } from "@/data/example_data";

const UserLikedMusics = () => {
	const userLikedMusics = getExampleData().userLikedMusics;

	return (
		<MainPageContainer navTitle="Liked Musics">
			<ScrollView className="h-full pt-2 px-5">
				<FlatList
					className="w-full p-3 rounded-xl bg-white dark:bg-gray1"
					scrollEnabled={false}
					data={userLikedMusics}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => <MusicCard music={item} />}
					ItemSeparatorComponent={() => <View className="h-2"></View>}
				/>
			</ScrollView>
		</MainPageContainer>
	);
};

export default UserLikedMusics;
