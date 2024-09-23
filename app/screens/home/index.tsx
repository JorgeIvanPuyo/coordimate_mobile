import React from "react";
import { StyleSheet, View } from "react-native";
import { Menu } from "./components";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Colors } from "@/constants/Colors";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/navigation/AppNavigator";
import { LayoutAuthenticated } from "@/components/LayoutAuthenticated";

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "Home">;
};

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <LayoutAuthenticated navigation={navigation}>
      <View style={styles.containerMenu}>
        <Menu
          title="Crear Alarma"
          route="CreateAlarm"
          navigation={navigation}
          iconComponent={
            <MaterialCommunityIcons
              name="clock-plus-outline"
              size={28}
              color={Colors.primary}
            />
          }
        />
        <Menu
          title="Ver agenda"
          route="CreateAlarm"
          navigation={navigation}
          iconComponent={
            <MaterialCommunityIcons
              name="clipboard-text-outline"
              size={28}
              color={Colors.primary}
            />
          }
        />
        <Menu
          title="Recordatorios"
          route="CreateAlarm"
          navigation={navigation}
          iconComponent={
            <MaterialCommunityIcons
              name="alarm"
              size={28}
              color={Colors.primary}
            />
          }
        />
        <Menu
          title="Invitaciones"
          route="Invitations"
          navigation={navigation}
          iconComponent={
            <MaterialCommunityIcons
              name="bookmark-outline"
              size={28}
              color={Colors.primary}
            />
          }
        />
      </View>
    </LayoutAuthenticated>
  );
};

const styles = StyleSheet.create({
  containerMenu: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "calc(100% - 70px)",
    paddingTop: 90,
    paddingBottom: 170,
  },
});

export { HomeScreen };
