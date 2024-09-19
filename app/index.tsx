import React from "react";
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
import { useState } from "react";

export default function LoginScreen() {
  const router = useRouter();
  const [isModalVisible, setIsModalVisible] = useState(false);  // Estado para controlar la visibilidad del modal

  // Función para abrir el modal
  const openModal = () => {
    setIsModalVisible(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalVisible(false);
  };

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
        />
      </View>

      {/* Botón Ingresar con ícono */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/create")}
      >
        <View style={styles.buttonContent}>
          <Text style={styles.buttonText}>Ingresar</Text>
          <MaterialIcons
            name="chevron-right"
            size={24}
            color="#fff"
            style={styles.icon}
          />{" "}
          {/* Ícono a la derecha */}
        </View>
      </TouchableOpacity>
      {/* Enlaces de Olvidé mi contraseña y Crear cuenta */}
      <TouchableOpacity>
        <Text onPress={openModal} style={styles.link}>Olvidé mi contraseña</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text onPress={openModal} style={styles.link}>Crear cuenta</Text>
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
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonContent: {
    flexDirection: "row", // Alinea el texto y el ícono horizontalmente
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 19,
    marginRight: 10, // Espacio entre el texto y el ícono
  },
  icon: {
    marginLeft: 10, // Asegura que el ícono tenga espacio a la izquierda
  },
  link: {
    color: Colors.links,
    marginTop: 40,
    textDecorationLine: "underline",
    fontSize: 19,
  },
});
