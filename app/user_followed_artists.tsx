import { ScrollView, FlatList, View } from "react-native";
import MainPageContainer from "@/components/MainPageContainer";
import ArtistCardSmall from "@/components/ArtistCardSmall";
import { getExampleData } from "@/data/example_data";

const UserFollowedArtists = () => {
	const userFollowedArtists = getExampleData().userFollowedArtists;

	return (
		<MainPageContainer navTitle="Followed Artists">
			<ScrollView className="h-full pt-2 px-5">
				<FlatList
					className="w-full p-3 rounded-xl bg-white dark:bg-gray1"
					scrollEnabled={false}
					data={userFollowedArtists}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => <ArtistCardSmall artist={item} />}
					ItemSeparatorComponent={() => <View className="h-2"></View>}
				/>
			</ScrollView>
		</MainPageContainer>
	);
};

export default UserFollowedArtists;
