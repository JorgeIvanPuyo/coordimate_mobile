import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "@/screens/login";
import CreateAlarmScreen from "@/screens/create-alarm";
import { HomeScreen } from "@/screens/home";
import { ProfileScreen } from "@/screens/profile";

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  CreateAlarm: undefined;
  Profile: undefined;
  Details: { itemId: number };
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreateAlarm"
        component={CreateAlarmScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export { AppNavigator };
