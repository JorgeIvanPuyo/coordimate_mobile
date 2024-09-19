import React from "react";
import { Colors } from "@/constants/Colors";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

type HeaderProps = {};

const Header = () => (
  <TouchableOpacity style={styles.header}>
    <Image
      source={require("@/assets/images/logo_coordimate.png")}
      style={styles.logo}
    />
    <MaterialCommunityIcons
      name="account-circle-outline"
      size={35}
      color={Colors.primary}
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  header: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  logo: {
    width: 200,
    height: 60,
    resizeMode: "contain",
  },
});

export { Header };
