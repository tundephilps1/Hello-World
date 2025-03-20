import React, { useState, useRef, useCallback } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Switch,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// Assuming these images are in your assets folder
const IMAGES = {
  profilePic: require("../assets/images/Face.jpg"),
  notificationIcon: require("../assets/images/Notification.png"),
  verifiedIcon: require("../assets/images/Verified.png"),
  roseIcon: require("../assets/images/Rose.png"),
  eyeIcon: require("../assets/images/Eye.png"),
  shareIcon: require("../assets/images/Share.png"),
  userIcon: require("../assets/images/Eye2.png"),
  ghostIcon: require("../assets/images/Ghost.png"),
};

const ProfileScreen = () => {
  // const bottomSheetRef = useRef(null);
  // Ref for the Gorhom Bottom Sheet
  const bottomSheetModalRef = useRef(null);

  // Snap points for the bottom sheet
  const snapPoints = ["40%", "80%"];

  // Function to open the bottom sheet
  const handlePresentModalPress = () => {
    bottomSheetModalRef.current?.present();
  };

  const [isGhostModeEnabled, setIsGhostModeEnabled] = useState(false);

  const toggleGhostMode = () => {
    setIsGhostModeEnabled((previousState) => !previousState);
  };

  return (
    <GestureHandlerRootView style={{ height: "100%" }}>
      <BottomSheetModalProvider>
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>My Profile</Text>
            <TouchableOpacity>
              <Image
                source={IMAGES.notificationIcon}
                style={styles.notificationIcon}
              />
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.scrollContainer}>
            <View style={styles.profileCard}>
              <View style={styles.profileImageContainer}>
                <View style={styles.profileImageBorder}>
                  <Image
                    source={IMAGES.profilePic}
                    style={styles.profileImage}
                  />
                </View>
              </View>

              <View style={styles.profileInfo}>
                <View style={styles.nameContainer}>
                  <Text style={styles.profileName}>Ayomide Petter, 24</Text>
                  <Image
                    source={IMAGES.verifiedIcon}
                    style={styles.verifiedIcon}
                  />
                </View>

                <TouchableOpacity
                  style={{
                    backgroundColor: "#2A2A2A",
                    padding: 8,
                    borderRadius: 50,
                    paddingHorizontal: 12,
                  }}
                >
                  <Text style={styles.previewProfileText}>Preview profile</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={styles.statsRow}
                // onPress={() => bottomSheetRef.current.open()}

                onPress={handlePresentModalPress}
              >
                <View style={styles.statsLabel}>
                  <Text style={{ color: "#F5F6FA" }}>
                    {" "}
                    Available roses{"   "}{" "}
                  </Text>
                  <Text style={styles.chevron}>
                    <FontAwesome name="angle-right" size={24} color="#F5F6FA" />
                  </Text>
                </View>
                <View style={styles.statsValueContainer}>
                  <Image source={IMAGES.roseIcon} style={styles.statsIcon} />
                  <Text style={styles.statsValue}>120</Text>
                </View>
              </TouchableOpacity>

              {/* Bottom Sheet */}
              <BottomSheetModal
                ref={bottomSheetModalRef}
                index={0}
                snapPoints={snapPoints}
                backgroundStyle={{ borderRadius: 20 }}
                handleIndicatorStyle={{ backgroundColor: "#ccc" }}
              >
                <View style={{ padding: 20 }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      textAlign: "center",
                      marginBottom: 15,
                    }}
                  >
                    Roses Overview
                  </Text>
                  <View
                    style={{
                      borderWidth: 0.5,
                      borderColor: "#666",
                      padding: 12,
                      borderRadius: 15,
                    }}
                  >
                    <View
                      style={{
                        marginBottom: 10,
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text style={{ color: "#666", fontSize: 16 }}>
                        Available Roses
                      </Text>
                      <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                        102
                      </Text>
                    </View>
                    <View
                      style={{
                        marginBottom: 10,
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text style={{ color: "#666", fontSize: 16 }}>
                        Received Roses
                      </Text>
                      <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                        50
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text style={{ color: "#666", fontSize: 16 }}>
                        Sent Roses
                      </Text>
                      <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                        20
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#E742A0",
                      padding: 14,
                      borderRadius: 50,
                      alignItems: "center",
                      marginTop: 15,
                    }}
                    onPress={() => bottomSheetModalRef.current?.close()}
                  >
                    <Text
                      style={{
                        color: "#fff",
                        fontSize: 16,
                        fontWeight: "bold",
                      }}
                    >
                      Okay
                    </Text>
                  </TouchableOpacity>
                </View>
              </BottomSheetModal>

              <View style={styles.statsRow2}>
                <Text style={styles.statsLabel}>Swipes left</Text>
                <Text style={styles.statsValue}>102</Text>
              </View>

              <TouchableOpacity style={styles.upgradeButton}>
                <Text style={styles.buttonText}>Upgrade</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.secondaryButton}>
                <Text style={styles.secondaryButtonText}>Buy Roses</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.secondaryButton}>
                <Text style={styles.secondaryButtonText}>Bammby Shop</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={{
                flexDirection: "row",
                borderWidth: 1,
                borderColor: "#D70A53",
                margin: 20,
                padding: 12,
                borderRadius: 12,
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={IMAGES.eyeIcon}
                  style={{ height: 27, width: 27 }}
                />
                <Text style={{ marginLeft: 12, color: "#2A2A2A" }}>
                  Get seen more, before others
                </Text>
              </View>

              <FontAwesome name="angle-right" size={24} color="black" />
            </TouchableOpacity>

            <View style={styles.actionsContainer}>
              <TouchableOpacity style={styles.actionItem}>
                <View style={styles.actionIconContainer}>
                  <Feather name="download" size={24} color="black" />
                </View>
                <Text style={styles.actionText}>Withdraw roses</Text>
                <Text style={styles.chevron}>›</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.actionItem}>
                <View style={styles.actionIconContainer}>
                  <MaterialCommunityIcons name="eye" size={24} color="black" />
                </View>
                <Text style={styles.actionText}>See who likes you</Text>
                <Text style={styles.chevron}>›</Text>
              </TouchableOpacity>

              <View style={styles.actionItem}>
                <View style={styles.actionIconContainer}>
                  <MaterialCommunityIcons
                    name="ghost-outline"
                    size={24}
                    color="black"
                  />
                </View>
                <Text style={styles.actionText}>Turn on Ghost mode</Text>
                <Switch
                  trackColor={{ false: "#767577", true: "#D70A53" }}
                  thumbColor={isGhostModeEnabled ? "#fff" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleGhostMode}
                  value={isGhostModeEnabled}
                  style={styles.switch}
                />
              </View>
            </View>
          </ScrollView>

          {/* Bottom Sheet */}
        </SafeAreaView>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f6fa",
    height: "100%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#f5f6fa",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
  },
  notificationIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  scrollContainer: {
    flex: 1,
  },
  profileCard: {
    backgroundColor: "#121212",
    borderRadius: 12,
    margin: 16,
    padding: 16,
    alignItems: "center",
  },
  profileImageContainer: {
    alignItems: "center",
    marginBottom: 12,
  },
  profileImageBorder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#E742A0",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  profileInfo: {
    alignItems: "center",
    marginBottom: 16,
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
    marginRight: 4,
  },
  verifiedIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },
  previewProfileText: {
    color: "#E742A0",
    fontSize: 14,
  },
  divider: {
    height: 1,
    backgroundColor: "#333333",
    width: "100%",
    marginVertical: 16,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 50,
    padding: 12,
  },
  statsRow2: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 12,
    padding: 12,
  },
  statsLabel: {
    color: "#F5F6FA",
    fontSize: 14,
    flexDirection: "row",
    alignItems: "center",
  },
  statsValueContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  statsIcon: {
    width: 16,
    height: 14,
    resizeMode: "contain",
    marginRight: 4,
    tintColor: "#E74C3C",
  },
  statsValue: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  chevron: {
    color: "#777",
    fontSize: 20,
    marginLeft: 8,
  },
  upgradeButton: {
    backgroundColor: "#E742A0",
    borderRadius: 25,
    width: "100%",
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 8,
    marginBottom: 12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: "#E742A0",
    borderRadius: 25,
    width: "100%",
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 12,
  },
  secondaryButtonText: {
    color: "#E742A0",
    fontSize: 16,
    fontWeight: "600",
  },
  actionsContainer: {
    backgroundColor: "#fff",
    borderRadius: 12,
    margin: 16,
    marginTop: 0,
  },
  actionItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  actionIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#F7f7f7",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  actionIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
    tintColor: "#E742A0",
  },
  actionText: {
    flex: 1,
    color: "#333",
    fontSize: 14,
  },
  switch: {
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
  },
});

export default ProfileScreen;
