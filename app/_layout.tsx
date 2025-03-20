import LikesScreen from "@/screens/LikesScreen";
import ProfileScreen from "@/screens/Profile";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <View>
      <ProfileScreen />
      {/* <LikesScreen /> */}
    </View>
  );
}
