import { styles } from "@/styles/common";
import React from "react";
import { Text, View } from "react-native";

const Header = () => (
  <View style={styles.titleContainer}>
    <Text style={styles.title}>Invitaciones</Text>
  </View>
);

export { Header };
