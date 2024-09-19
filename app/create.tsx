import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Colors } from "@/constants/Colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";
import ReusableModal from "@/components/Modal";
import Ia from "@/components/Ia";

export default function CreateAlarmScreen() {
  const router = useRouter();
  const [selectedActivity, setSelectedActivity] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false); 
  const [isIaVisible, setIsIaVisible] = useState(false);  

  // Función para abrir el modal
  const openModal = () => {
    setIsModalVisible(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalVisible(false);
  };

  // Función para abrir IA
  const openIA = () => {
    setIsIaVisible(true);
  };

  // Función para cerrar IA
  const closeIA = () => {
    setIsIaVisible(false);
  };

  const navigateToInvitations = () => {
    closeIA();
    openModal();
  };


  return (
    <View style={styles.container}>
      {/* Header con logo e icono de perfil */}
      <TouchableOpacity onPress={() => router.push("/")} style={styles.header}>
        <Image
          source={require("../assets/images/logo_coordimate.png")}
          style={styles.logo}
        />
        <MaterialCommunityIcons
          name="account-circle-outline"
          size={35}
          color={Colors.primary}
          onPress={openModal}
        />
      </TouchableOpacity>

      {/* Título */}
      <Text style={styles.title}>Crear Alarma</Text>

      {/* Formulario */}
      <View style={styles.inputContainer}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Nombre Alarma</Text>
          <Text style={styles.requiredAsterisk}> *</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Nombre Alarma"
          placeholderTextColor={Colors.third}
        />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Hora Alarma</Text>
          <Text style={styles.requiredAsterisk}> *</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Hora Alarma"
          placeholderTextColor={Colors.third}
        />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Fecha Alarma</Text>
          <Text style={styles.requiredAsterisk}> *</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Fecha Alarma"
          placeholderTextColor={Colors.third}
        />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Lugar Alarma</Text>
          <Text style={styles.requiredAsterisk}> *</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Lugar de la actividad"
          placeholderTextColor={Colors.third}
        />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Tipo de Actividad</Text>
          <Text style={styles.requiredAsterisk}> *</Text>
        </View>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedActivity}
            onValueChange={(itemValue) => setSelectedActivity(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Actividad asociada a la alarma" value="" />
            <Picker.Item label="Reunión" value="reunion" />
            <Picker.Item label="Evento" value="evento" />
            <Picker.Item label="Tarea" value="tarea" />
          </Picker>
        </View>
      </View>

      {/* Botón Crear Alarma */}
      <TouchableOpacity onPress={openIA} style={styles.createButton}>
        <View style={styles.buttonContent}>
          <Text style={styles.buttonText}>Crear Alarma</Text>
          <MaterialIcons name="chevron-right" size={24} color="#fff" />
        </View>
      </TouchableOpacity>

      {/* Botón Cancelar */}
      <TouchableOpacity
        onPress={() => router.push("/")}
        style={styles.cancelButton}
      >
        <Text style={styles.cancelText}>Cancelar</Text>
      </TouchableOpacity>
      <ReusableModal isVisible={isModalVisible} onClose={closeModal} />

      <Ia
        isVisible={isIaVisible}
        onClose={closeIA}
        onNavigateToInvitations={navigateToInvitations}
      />
    </View>
  );
}

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
  title: {
    fontSize: 33,
    fontWeight: "bold",
    color: Colors.secondary,
    marginBottom: 30,
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
