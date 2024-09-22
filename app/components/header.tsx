import React from "react";
import { Colors } from "@/constants/Colors";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

const Header = ({ navigation, hideProfile }) => (
  <TouchableOpacity
    style={{
      ...styles.header,
      justifyContent: hideProfile ? "center" : "space-between",
    }}
  >
    <Image
      source={require("@/assets/images/logo_coordimate.png")}
      style={styles.logo}
    />
    {hideProfile ? null : (
      <MaterialCommunityIcons
        name="account-circle-outline"
        size={35}
        color={Colors.primary}
        onPress={() => navigation?.navigate("Profile")}
      />
    )}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  header: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    gap: 8,
  },
  logo: {
    width: 200,
    height: 60,
    resizeMode: "contain",
  },
});

export { Header };
