import {
	useColorScheme,
	ScrollView,
	FlatList,
	View,
	TouchableOpacity,
	Text,
	Image,
	Alert,
} from "react-native";
import React from "react";
import { useUIContext } from "@/contexts/UIContext";
import { useAuthContext } from "@/contexts/AuthContext";
import { router } from "expo-router";
import ArtistCard from "@/components/ArtistCard";
import { getExampleData } from "@/data/example_data";
import MusicCard from "@/components/MusicCard";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "@/constants/Colors";
import MainPageContainer from "@/components/MainPageContainer";

const Me = () => {
	const { tabBarAndPlayerTotalHeight } = useUIContext();
	const { signOut } = useAuthContext();

	const followedArtists = getExampleData().userFollowedArtists;
	const likedMusics = getExampleData().userLikedMusics;

	const signOutButtonTapped = async () => {
		try {
			const res = await signOut();
			if (res) {
				router.replace("/");
			} else {
				Alert.alert("Cannot sign out. Please try again.");
			}
		} catch (error) {
			console.log(error);
			Alert.alert("Sign out failed. Please try again.");
		}
	};

	if (tabBarAndPlayerTotalHeight > 0) {
		return (
			<MainPageContainer showNav={false}>
				<Text className="mt-2 mx-5 mb-1 text-3xl font-bold dark:text-white">
					Me
				</Text>
				<ScrollView
					className="h-full px-5"
					contentInset={{ bottom: tabBarAndPlayerTotalHeight }}
				>
					<View className="mb-4 p-3 flex flex-row justify-between items-center rounded-xl bg-white dark:bg-gray1">
						<TouchableOpacity
							activeOpacity={0.7}
							className="flex flex-row items-center"
						>
							<Image className="w-12 h-12 rounded bg-[#abd6d6]"></Image>
							<Text className="ml-3 text-lg dark:text-gray5">
								Demo User
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							className="mr-1"
							activeOpacity={0.7}
							onPress={signOutButtonTapped}
						>
							<Ionicons
								name="exit-outline"
								size={22}
								color={Colors.gray3}
							/>
						</TouchableOpacity>
					</View>
					<View className="mb-1 flex flex-row justify-between items-center">
						<Text className="text-2xl font-bold dark:text-white">
							Followed Artists
						</Text>
						<View>
							<TouchableOpacity
								className="mt-1 flex flex-row items-center justify-center space-x-1"
								activeOpacity={0.7}
								onPress={() => {
									router.navigate("/user_followed_artists");
								}}
							>
								<Text className="text-gray2 dark:text-gray3">
									View All
								</Text>
								<Ionicons
									name="chevron-forward-outline"
									size={12}
									color={
										useColorScheme() === "light"
											? Colors.gray2
											: Colors.gray3
									}
								/>
							</TouchableOpacity>
						</View>
					</View>
					<FlatList
						className="w-full mb-4 p-3 grow-0 rounded-xl bg-white dark:bg-gray1"
						contentContainerStyle={{ paddingRight: 25 }}
						scrollEnabled={true}
						horizontal={true}
						showsHorizontalScrollIndicator={false}
						data={followedArtists}
						keyExtractor={(item) => item.id}
						renderItem={({ item }) => <ArtistCard artist={item} />}
						ItemSeparatorComponent={() => (
							<View className="w-4"></View>
						)}
					/>
					<View className="mb-1 flex flex-row justify-between items-center">
						<Text className="text-2xl font-bold dark:text-white">
							Liked Musics
						</Text>
						<View>
							<TouchableOpacity
								className="mt-1 flex flex-row justify-center items-center space-x-1"
								activeOpacity={0.7}
								onPress={() => {
									router.navigate("/user_liked_musics");
								}}
							>
								<Text className="text-gray2 dark:text-gray3">
									View All
								</Text>
								<Ionicons
									name="chevron-forward-outline"
									size={12}
									color={
										useColorScheme() === "light"
											? Colors.gray2
											: Colors.gray3
									}
								/>
							</TouchableOpacity>
						</View>
					</View>
					<FlatList
						className="w-full p-3 grow-0 rounded-xl bg-white dark:bg-gray1"
						scrollEnabled={false}
						data={likedMusics.slice(0, 5)}
						keyExtractor={(item) => item.id}
						renderItem={({ item }) => <MusicCard music={item} />}
						ItemSeparatorComponent={() => (
							<View className="h-2"></View>
						)}
					/>
				</ScrollView>
			</MainPageContainer>
		);
	}
};

export default Me;
