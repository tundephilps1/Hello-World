import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { BlurView } from "expo-blur";
import Matches from "../assets/images/Love.png";

// Import local images
// You would need to create these files in your assets folder
const profileImages = {
  profile1: require("../assets/images/Face.jpg"),
  profile2: require("../assets/images/Face.jpg"),
  profile3: require("../assets/images/Face.jpg"),
  profile4: require("../assets/images/Face.jpg"),
};

// Define the profile card data structure
interface ProfileCardData {
  id: string;
  username: string;
  matchPercentage: number;
  imageSource: any; // Using 'any' for the local require statement
  isRecent?: boolean;
}

// Props for the ProfileCard component
interface ProfileCardProps {
  data: ProfileCardData;
}

// Individual Profile Card component
const ProfileCard: React.FC<ProfileCardProps> = ({ data }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={data.imageSource} style={styles.profileImage} />
      <BlurView intensity={80} style={styles.cardContent}>
        <Text style={styles.username}>{data.username}</Text>
        <View style={styles.matchContainer}>
          <View style={styles.heartContainer}>
            {/* <Text style={styles.heartIcon}>♥</Text> */}
            <Image source={Matches} />
          </View>
          <Text style={styles.matchText}>{data.matchPercentage}% Match</Text>
        </View>
      </BlurView>
      {/* <BlurView intensity={50} tint="dark" style={styles.blurOverlay} /> */}
    </View>
  );
};

// Section header component
const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
  <Text style={styles.sectionTitle}>{title}</Text>
);

// Main ProfileGrid component
const ProfileGrid: React.FC = () => {
  // Sample data using local assets
  const recentProfiles: ProfileCardData[] = [
    {
      id: "1",
      username: "Pretty_Nelly",
      matchPercentage: 30,
      imageSource: profileImages.profile1,
      isRecent: true,
    },
    {
      id: "2",
      username: "Pretty_Nelly",
      matchPercentage: 30,
      imageSource: profileImages.profile2,
      isRecent: true,
    },
  ];

  const regularProfiles: ProfileCardData[] = [
    {
      id: "3",
      username: "Pretty_Nelly",
      matchPercentage: 30,
      imageSource: profileImages.profile3,
    },
    {
      id: "4",
      username: "Pretty_Nelly",
      matchPercentage: 30,
      imageSource: profileImages.profile4,
    },
  ];

  // Render grid with section headers
  return (
    <View style={styles.container}>
      <SectionHeader title="Last week" />
      <View style={styles.gridRow}>
        {recentProfiles.map((profile) => (
          <ProfileCard key={profile.id} data={profile} />
        ))}
      </View>

      <View style={styles.gridRow}>
        {regularProfiles.map((profile) => (
          <ProfileCard key={profile.id} data={profile} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 10,
    color: "#333",
  },
  gridRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  cardContainer: {
    width: "48%",
    height: 200,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 10,
    position: "relative",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  blurOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.3,
  },
  cardContent: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    zIndex: 10,
  },
  username: {
    color: "#000000",
    fontWeight: "600",
    fontSize: 14,
  },
  matchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  heartContainer: {
    padding: 2,
    marginRight: 5,
  },
  heartIcon: {
    color: "white",
    fontSize: 10,
  },
  matchText: {
    color: "#2A2A2A",
    fontSize: 12,
  },
});

export default ProfileGrid;
