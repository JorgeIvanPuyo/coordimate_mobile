import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "@/screens/login";
import CreateAlarmScreen from "@/screens/create-alarm";
import { HomeScreen } from "@/screens/home";
import { ProfileScreen } from "@/screens/profile";
import { InvitationsScreen } from "@/screens/invitations";

export type RootStackParamList = {
  Login: Object | undefined;
  Home: Object | undefined;
  CreateAlarm: Object | undefined;
  Profile: Object | undefined;
  Invitations: Object | undefined;
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
      <Stack.Screen
        name="Invitations"
        component={InvitationsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export { AppNavigator };
