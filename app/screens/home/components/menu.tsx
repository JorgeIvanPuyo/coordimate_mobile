import React from "react";
import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/navigation/AppNavigator";

type MenuProps = {
  title: string;
  iconComponent: JSX.Element;
  route: keyof RootStackParamList;
  navigation: StackNavigationProp<RootStackParamList>;
};

const Menu = ({ title, iconComponent, route, navigation }: MenuProps) => {
  const { navigate } = navigation;

  return (
    <TouchableOpacity onPress={() => navigate(route)}>
      <View style={styles.container}>
        <View style={styles.containerItems}>
          {iconComponent}
          <Text style={styles.text}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 24,
  },
  containerItems: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },
  text: {
    fontSize: 24,
  },
});

export { Menu };
