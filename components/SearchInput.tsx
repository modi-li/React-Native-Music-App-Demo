import { View, TouchableOpacity, TextInput, Keyboard } from "react-native";
import { useState } from "react";
import { router, usePathname } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "@/constants/Colors";

const SearchInput = ({ initialQuery = "", classNames = "" }) => {
	const pathname = usePathname();

	const [query, setQuery] = useState(initialQuery || "");

	const handleSearch = () => {
		setQuery("");
		Keyboard.dismiss();
		if (query !== "")
			if (pathname.startsWith("/search")) {
				router.setParams({ query });
			} else {
				router.navigate(`/search/${query}`);
			}
	};

	return (
		<View
			className={`h-12 px-3 flex flex-row items-center space-x-4 rounded-xl bg-white dark:bg-gray1 ${classNames}`}
		>
			<TextInput
				className="flex-1 text-base dark:text-gray5"
				style={{ lineHeight: 0 }}
				value={query}
				placeholder="Search"
				placeholderTextColor={Colors.gray2}
				enterKeyHint="search"
				onChangeText={(e) => setQuery(e)}
				onSubmitEditing={handleSearch}
			/>
			<TouchableOpacity activeOpacity={0.7} onPress={handleSearch}>
				<Ionicons name="search" size={22} color={Colors.gray4} />
			</TouchableOpacity>
		</View>
	);
};

export default SearchInput;
