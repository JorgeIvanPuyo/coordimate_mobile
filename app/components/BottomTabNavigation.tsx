import { Colors } from "@/constants/Colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { StyleSheet, View } from "react-native";

const BottomTabNavigation = ({ navigation }) => {
  const gotTo = (screen: string) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => gotTo("Home")}>
        <View style={styles.item}>
          <MaterialIcons name="home" size={24} color={Colors.secondary} />
          <Text style={styles.itemText}>Inicio</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => gotTo("CreateAlarm")}>
        <View style={styles.item}>
          <MaterialIcons name="alarm" size={24} color={Colors.secondary} />
          <Text style={styles.itemText}>Alarma</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => gotTo("Invitations")}>
        <View style={styles.item}>
          <MaterialIcons
            name="insert-invitation"
            size={24}
            color={Colors.secondary}
          />
          <Text style={styles.itemText}>Invitaciones</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  item: {
    paddingVertical: 8,
    minWidth: 100,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  itemBorderRight: {
    borderRightWidth: 1,
  },
  itemText: {
    fontSize: 16,
    color: Colors.secondary,
  },
});

export { BottomTabNavigation };
