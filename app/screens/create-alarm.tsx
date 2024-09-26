import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Colors } from "@/constants/Colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import ReusableModal from "@/components/Modal";
import Ia from "@/components/Ia";
import { RootStackParamList } from "@/navigation/AppNavigator";
import { StackNavigationProp } from "@react-navigation/stack";
import { LayoutAuthenticated } from "@/components/LayoutAuthenticated";

type CreateAlarmScreenRouteProp = StackNavigationProp<
  RootStackParamList,
  "CreateAlarm"
>;

type CreateAlarmScreenProps = {
  navigation: CreateAlarmScreenRouteProp;
};

export default function CreateAlarmScreen({
  navigation,
}: CreateAlarmScreenProps) {
  const [selectedActivity, setSelectedActivity] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isIaVisible, setIsIaVisible] = useState(false);

  // Estados para los campos del formulario
  const [alarmName, setAlarmName] = useState("");
  const [alarmTime, setAlarmTime] = useState("");
  const [alarmDate, setAlarmDate] = useState("");
  const [alarmPlace, setAlarmPlace] = useState("");

  const { navigate } = navigation;

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
    navigate("Invitations");
  };

  const navigateToHome = () => {
    closeIA();
    navigate("Home");
  };

  // Función para navegar a profile
  const openProfile = () => {
    navigate("Profile");
  };

  // Función que determina si el botón debe estar habilitado
  const isButtonEnabled =
    alarmName.trim() !== "" &&
    alarmTime.trim() !== "" &&
    alarmDate.trim() !== "" &&
    alarmPlace.trim() !== "" &&
    selectedActivity !== "";

  return (
    <LayoutAuthenticated navigation={navigation}>
      <ScrollView>
        <View style={styles.container}>
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
              value={alarmName}
              onChangeText={(text) => setAlarmName(text)}
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
              value={alarmTime}
              onChangeText={(text) => setAlarmTime(text)}
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
              value={alarmDate}
              onChangeText={(text) => setAlarmDate(text)}
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
              value={alarmPlace}
              onChangeText={(text) => setAlarmPlace(text)}
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
          <TouchableOpacity
            onPress={openIA}
            style={[
              styles.createButton,
              {
                backgroundColor: isButtonEnabled
                  ? Colors.primary
                  : Colors.third,
              },
            ]}
            disabled={!isButtonEnabled}
          >
            <View style={styles.buttonContent}>
              <Text style={styles.buttonText}>Crear Alarma</Text>
              <MaterialIcons name="chevron-right" size={24} color="#fff" />
            </View>
          </TouchableOpacity>

          {/* Botón Cancelar */}
          <TouchableOpacity
            onPress={() => navigate("Home")}
            style={styles.cancelButton}
          >
            <Text style={styles.cancelText}>Cancelar</Text>
          </TouchableOpacity>
          <ReusableModal isVisible={isModalVisible} onClose={closeModal} />

          <Ia
            isVisible={isIaVisible}
            onClose={closeIA}
            onNavigateToInvitations={navigateToInvitations}
            onNavigateToHome={navigateToHome}
          />
        </View>
      </ScrollView>
    </LayoutAuthenticated>
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
