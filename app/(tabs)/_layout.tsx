import { Tabs } from "expo-router";
import TabBar from "@/components/TabBar";

const TabLayout = () => {
	return (
		<Tabs tabBar={(props) => <TabBar {...props} />}>
			<Tabs.Screen
				name="home"
				options={{
					title: "Home",
					headerShown: false,
				}}
			/>
			<Tabs.Screen
				name="me"
				options={{
					title: "Me",
					headerShown: false,
				}}
			/>
		</Tabs>
	);
};

export default TabLayout;
