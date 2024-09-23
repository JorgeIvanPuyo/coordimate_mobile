import React from "react";
import { LayoutAuthenticated } from "@/components/LayoutAuthenticated";
import { RootStackParamList } from "@/navigation/AppNavigator";
import { styles } from "@/styles/common";
import { StackNavigationProp } from "@react-navigation/stack";
import { Text, View } from "react-native";

type InvitationsScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "Invitations">;
};

const InvitationsScreen = ({ navigation }: InvitationsScreenProps) => {
  return (
    <LayoutAuthenticated navigation={navigation}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Invitaciones</Text>
      </View>
    </LayoutAuthenticated>
  );
};

export { InvitationsScreen };
