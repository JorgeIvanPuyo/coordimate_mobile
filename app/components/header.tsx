import React from "react";
import { Colors } from "@/constants/Colors";
import { Image, SafeAreaView, StyleSheet, View } from "react-native";
import { Appbar, Menu, PaperProvider, Portal } from "react-native-paper";

const Header = ({ navigation, hideProfile }) => {
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => {
    setVisible((prev) => !prev);
  };
  return (
    <SafeAreaView style={{ position: "relative" }}>
      <Appbar.Header>
        <View
          style={{
            ...styles.header,
            justifyContent: hideProfile ? "center" : "space-between",
          }}
        >
          <Image
            source={require("@/assets/images/logo_coordimate.png")}
            style={styles.logo}
          />
          <Appbar.Action icon="dots-vertical" onPress={openMenu} />
        </View>
      </Appbar.Header>
      {visible && (
        <PaperProvider>
          <Portal>
            <View
              style={{
                position: "absolute",
                flex: 1,
                top: -20,
                left: 150,
                backgroundColor: "white",
                height: "100%",
                width: "100%",
                padding: 8,
                zIndex: 99999,
              }}
            >
              <Menu.Item
                contentStyle={{ paddingHorizontal: 16 }}
                titleStyle={{ color: Colors.secondary }}
                rippleColor={Colors.secondary}
                leadingIcon="clipboard-text-outline"
                onPress={() => {
                  setVisible(false);
                  navigation.navigate("CreateAlarm");
                }}
                title="Agenda"
              />
              <Menu.Item
                contentStyle={{ paddingHorizontal: 8 }}
                rippleColor={Colors.secondary}
                titleStyle={{ color: Colors.secondary }}
                leadingIcon="bookmark-outline"
                onPress={() => {
                  setVisible(false);
                  navigation.navigate("Profile");
                }}
                title="Mi perfil"
              />
              <Menu.Item
                contentStyle={{ paddingHorizontal: 0 }}
                titleStyle={{ color: Colors.secondary }}
                leadingIcon="account-circle-outline"
                onPress={() => {
                  setVisible(false);
                  navigation.navigate("Invitations");
                }}
                title="Invitaciones"
              />
            </View>
          </Portal>
        </PaperProvider>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    gap: 8,
  },
  logo: {
    width: 200,
    height: 60,
    resizeMode: "contain",
  },
});

export { Header };
