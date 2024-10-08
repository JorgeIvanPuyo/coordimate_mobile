import React from "react";
import { StyleSheet, View } from "react-native";
import { Header } from "./header";
import { BottomTabNavigation } from "./BottomTabNavigation";

type LayoutAuthenticatedProps = {
  navigation?: any;
  children: React.ReactNode;
  hideProfile?: boolean;
};

const LayoutAuthenticated: React.FC<LayoutAuthenticatedProps> = ({
  children,
  navigation,
  hideProfile,
}) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} hideProfile={hideProfile} />
      {children}
      {!hideProfile && <BottomTabNavigation navigation={navigation} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 10,
    paddingHorizontal: 24,
  },
});

export { LayoutAuthenticated };
