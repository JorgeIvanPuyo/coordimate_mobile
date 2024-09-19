import React from "react";
import { Header } from "@/components/header";
import { StyleSheet, View } from "react-native";
import { Menu } from "./components";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Colors } from "@/constants/Colors";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/navigation/AppNavigator";

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "Home">;
};

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <View>
      <View>
        <Header />
      </View>
      <View style={styles.containerMenu}>
        <Menu
          title="Crear Alarma"
          route="CreateAlarm"
          navigation={navigation}
          iconComponent={
            <MaterialCommunityIcons
              name="account-circle-outline"
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
              name="account-circle-outline"
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
              name="account-circle-outline"
              size={28}
              color={Colors.primary}
            />
          }
        />
        <Menu
          title="Invitaciones"
          route="CreateAlarm"
          navigation={navigation}
          iconComponent={
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={28}
              color={Colors.primary}
            />
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerMenu: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
});

export { HomeScreen };
