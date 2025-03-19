import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { BlurView } from "expo-blur";
import Entypo from "@expo/vector-icons/Entypo";
import ProfileGrid from "@/components/ProfileGrid";

import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

const LikesScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 20,
        }}
      >
        <View
          style={{ backgroundColor: "white", padding: 4, borderRadius: 50 }}
        >
          <Entypo name="chevron-small-left" size={24} color="black" />
        </View>

        <Text style={styles.title}>See who likes you</Text>
        <View
          style={{
            backgroundColor: "white",
            padding: 3,
            borderRadius: 50,
            opacity: 0,
          }}
        >
          <Entypo name="chevron-small-left" size={24} color="black" />
        </View>
      </View>

      <Text style={styles.subtitle}>
        Upgrade to premium to see them and match now
      </Text>

      {/* Likes Sections */}
      <ScrollView style={{ padding: 20 }}>
        {/* <Text style={styles.sectionHeader}>Today</Text> */}

        <ProfileGrid />

        <ProfileGrid />

        <View style={{ height: 140 }} />
      </ScrollView>

      {/* Sticky Bottom Button */}
      <View
        style={{
          position: "absolute",

          bottom: 0,
          backgroundColor: "white",
          padding: 12,
          width: "100%",
        }}
      >
        <TouchableOpacity activeOpacity={0.8}>
          <LinearGradient
            colors={["#D70A53", "#E742A0"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ borderRadius: 50 }}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>Show my likes</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#f5f6fa",

    position: "relative",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    paddingBottom: 10,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 16,
    color: "#71717A",
  },

  button: {
    padding: 15,
    borderRadius: 30,

    alignItems: "center",
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});

export default LikesScreen;
