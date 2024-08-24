import {
	ScrollView,
	FlatList,
	View,
	Text,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import MainPageContainer from "@/components/MainPageContainer";
import SearchInput from "@/components/SearchInput";
import ArtistCard from "@/components/ArtistCard";
import MusicCard from "@/components/MusicCard";
import { getExampleData } from "@/data/example_data";
import { useUIContext } from "@/contexts/UIContext";

const Home = () => {
	const { tabBarAndPlayerTotalHeight } = useUIContext();

	const exampleArtists = getExampleData().recommendedArtists;
	const exampleMusics = getExampleData().recommendedMusics;

	if (tabBarAndPlayerTotalHeight > 0) {
		return (
			<TouchableWithoutFeedback
				className="w-full h-full"
				onPress={Keyboard.dismiss}
			>
				<MainPageContainer showNav={false}>
					<Text className="mt-2 mx-5 mb-1 text-3xl font-bold dark:text-white">
						Home
					</Text>
					<SearchInput classNames="mx-5 mb-2" />
					<ScrollView
						className="flex-1 pt-2 px-5"
						contentInset={{ bottom: tabBarAndPlayerTotalHeight }}
						onScroll={Keyboard.dismiss}
					>
						<Text className="mb-1 text-2xl font-bold dark:text-white">
							Recommended Artists
						</Text>
						<FlatList
							className="w-full mb-4 p-3 rounded-xl bg-white dark:bg-gray1"
							contentContainerStyle={{ paddingRight: 25 }}
							scrollEnabled={true}
							horizontal={true}
							showsHorizontalScrollIndicator={false}
							data={exampleArtists}
							keyExtractor={(item) => item.id}
							renderItem={({ item }) => (
								<ArtistCard artist={item} />
							)}
							ItemSeparatorComponent={() => (
								<View className="w-4"></View>
							)}
						/>
						<Text className="mb-1 text-2xl font-bold dark:text-white">
							Recommended Musics
						</Text>
						<FlatList
							className="w-full p-3 rounded-xl bg-white dark:bg-gray1"
							scrollEnabled={false}
							data={exampleMusics}
							keyExtractor={(item) => item.id}
							renderItem={({ item }) => (
								<MusicCard music={item} />
							)}
							ItemSeparatorComponent={() => (
								<View className="h-2"></View>
							)}
						/>
					</ScrollView>
				</MainPageContainer>
			</TouchableWithoutFeedback>
		);
	}
};

export default Home;
