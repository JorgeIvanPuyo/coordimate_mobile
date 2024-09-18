import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Colors } from "@/constants/Colors";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      {/* Header con el logo */}
      <View style={styles.header}>
        <Image source={require('../assets/images/logo_coordimate.png')} style={styles.logo} />
      </View>

      {/* Contenido de la pantalla de inicio de sesión */}
      <Text style={styles.title}>Bienvenido</Text>

      {/* Campo Nombre */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nombre *</Text>
        <TextInput style={styles.input} placeholder="Placeholder" />
      </View>

      {/* Campo Contraseña */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Contraseña *</Text>
        <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry />
      </View>

      {/* Botón Ingresar */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>

      {/* Enlaces de Olvidé mi contraseña y Crear cuenta */}
      <TouchableOpacity>
        <Text style={styles.link}>Olvidé mi contraseña</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.link}>Crear cuenta</Text>
      </TouchableOpacity>
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
    top: 0,
    width: "100%",
    height: 70, 
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",  
  },
  logo: {
    width: 240,
    height: 60, 
    resizeMode: "contain",  
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    marginTop: 20, 
  },
  inputContainer: {
    width: "100%",
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 5,
  },
  button: {
    width: "100%",
    backgroundColor: Colors.primary, 
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  link: {
    color: Colors.links,
    marginTop: 15,
    textDecorationLine: "underline",
  },
});
