import { LayoutAuthenticated } from "@/components/LayoutAuthenticated";
import { Colors } from "@/constants/Colors";
import { RootStackParamList } from "@/navigation/AppNavigator";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Actions, Fields } from "./components";

type ProfileScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "Profile">;
};

const ProfileScreen = ({ navigation }: ProfileScreenProps) => {
  const onCancel = () => {
    navigation.goBack();
  };

  const onSave = () => {
    // Guard
  };

  return (
    <LayoutAuthenticated navigation={navigation} hideProfile>
      <SafeAreaView
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ScrollView>
          <Fields />
          <Actions cancel={onCancel} saveData={onSave} />
        </ScrollView>
      </SafeAreaView>
    </LayoutAuthenticated>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    position: "absolute",
    top: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 320,
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 60,
    resizeMode: "contain",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginBottom: 30,
  },
  title: {
    fontSize: 33,
    fontWeight: "bold",
    color: Colors.secondary,
  },
  inputContainer: {
    width: "100%",
    maxWidth: 300,
    marginBottom: 20,
  },
  labelContainer: {
    flexDirection: "row",
    marginBottom: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.secondary,
  },
  requiredAsterisk: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.error,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: Colors.third,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    color: Colors.secondary,
  },
  pickerContainer: {
    borderColor: Colors.third,
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    justifyContent: "center",
  },
  picker: {
    width: "100%",
    maxWidth: 300,
    height: "100%",
    color: Colors.secondary,
    borderColor: Colors.third,
  },
  createButton: {
    width: "100%",
    maxWidth: 286,
    height: 57,
    backgroundColor: Colors.primary,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    marginRight: 10,
  },
  cancelButton: {
    marginTop: 20,
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 5,
    width: "100%",
    maxWidth: 96,
    height: 47,
    justifyContent: "center",
    alignItems: "center",
  },
  cancelText: {
    color: Colors.primary,
    fontSize: 18,
  },
});

export { ProfileScreen };
