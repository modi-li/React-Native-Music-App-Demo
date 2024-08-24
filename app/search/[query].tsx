import { View, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import MainPageContainer from "@/components/MainPageContainer";
import SearchInput from "@/components/SearchInput";

const Search = () => {
	const { query } = useLocalSearchParams();
	return (
		<MainPageContainer navTitle="Search">
			<ScrollView>
				<View className="mb-4 px-5">
					<SearchInput initialQuery={query} />
				</View>
			</ScrollView>
		</MainPageContainer>
	);
};

export default Search;
