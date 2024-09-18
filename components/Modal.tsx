import React from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { Colors } from "@/constants/Colors";
import MaterialIcons from '@expo/vector-icons/MaterialIcons'; 

// Definir los tipos de las props
interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const ReusableModal: React.FC<ModalProps> = ({ isVisible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Funcionalidad aún no disponible</Text>
          <Text style={styles.modalText1}>
            El equipo está trabajando en tenerla disponible lo antes posible.
          </Text>
          <Text style={styles.modalText2}>Gracias por tu comprensión</Text>

          {/* Botón para cerrar el modal */}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <View style={styles.buttonContent}>
              <Text style={styles.closeButtonText}>Atrás</Text>
              <MaterialIcons name="chevron-right" size={24} color="#fff" /> 
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", 
  },
  modalContainer: {
    width: 363,
    height: 337,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 28,
    marginBottom: 10,
    color: Colors.secondary,
    textAlign: "center",
  },
  modalText1: {
    fontSize: 14,
    color: Colors.secondary,
    marginBottom: 20,
    width: 290,
  },
  modalText2: {
    fontSize: 18,
    color: Colors.secondary,
    marginBottom: 20,
    fontWeight: "bold",
    paddingTop: 24,
    paddingBottom: 24,
  },
  closeButton: {
    backgroundColor: Colors.primary,
    borderRadius: 5,
    width: 167,
    height: 57,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContent: {
    flexDirection: 'row',  
    alignItems: 'center', 
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 19,
    textAlign: "center",
    marginRight: 10, 
  },
});

export default ReusableModal;
