import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { Colors } from "@/constants/Colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import ReusableModal from "@/components/Modal";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/navigation/AppNavigator";

type LoginScreenRouteProp = RouteProp<
  StackNavigationProp<RootStackParamList>,
  "Login"
>;

type LoginScreenProps = {
  navigation: LoginScreenRouteProp;
};

export default function LoginScreen({ navigation }: LoginScreenProps) {
  const router = useRouter();
  const [isModalVisible, setIsModalVisible] = useState(false); 
  const { navigate } = navigation;

  // Estados para controlar los campos de nombre y contraseña
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Función para abrir el modal
  const openModal = () => {
    setIsModalVisible(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalVisible(false);
  };

  // Función que determina si el botón debe estar habilitado
  const isButtonEnabled = username.trim() !== "" && password.trim() !== "";

  return (
    <View style={styles.container}>
      {/* Header con el logo */}
      <View style={styles.header}>
        <Image
          source={require("../assets/images/logo_coordimate.png")}
          style={styles.logo}
        />
      </View>

      {/* Contenido de la pantalla de inicio de sesión */}
      <Text style={styles.title}>Bienvenido</Text>

      {/* Campo Nombre */}
      <View style={styles.inputContainer}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Nombre</Text>
          <Text style={styles.requiredAsterisk}> *</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          placeholderTextColor={Colors.third}
          value={username}
          onChangeText={(text) => setUsername(text)} 
        />
      </View>

      {/* Campo Contraseña */}
      <View style={styles.inputContainer}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Contraseña</Text>
          <Text style={styles.requiredAsterisk}> *</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          placeholderTextColor={Colors.third}
          value={password}
          onChangeText={(text) => setPassword(text)} 
        />
      </View>

      {/* Botón Ingresar con ícono */}
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: isButtonEnabled ? Colors.primary : Colors.third }, 
        ]}
        onPress={() => navigate("Home")}
        disabled={!isButtonEnabled} 
      >
        <View style={styles.buttonContent}>
          <Text style={styles.buttonText}>Ingresar</Text>
          <MaterialIcons
            name="chevron-right"
            size={24}
            color="#fff"
            style={styles.icon}
          />
        </View>
      </TouchableOpacity>

      {/* Enlaces de Olvidé mi contraseña y Crear cuenta */}
      <TouchableOpacity>
        <Text onPress={openModal} style={styles.link}>
          Olvidé mi contraseña
        </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text onPress={openModal} style={styles.link}>
          Crear cuenta
        </Text>
      </TouchableOpacity>
      <ReusableModal isVisible={isModalVisible} onClose={closeModal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    position: "absolute",
    top: 20,
    width: "100%",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logo: {
    width: 200,
    height: 60,
    resizeMode: "contain",
  },
  title: {
    fontSize: 33,
    fontWeight: "bold",
    marginBottom: 30,
    color: Colors.secondary,
    marginTop: 20,
  },
  inputContainer: {
    width: "100%",
    maxWidth: 286,
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
    color: Colors.secondary,
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 5,
  },
  button: {
    width: "100%",
    maxWidth: 286,
    height: 57,
    paddingVertical: 10,
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
    fontSize: 19,
    marginRight: 10,
  },
  icon: {
    marginLeft: 10,
  },
  link: {
    color: Colors.links,
    marginTop: 40,
    textDecorationLine: "underline",
    fontSize: 19,
  },
});
