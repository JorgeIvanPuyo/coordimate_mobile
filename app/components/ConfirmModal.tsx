import React from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";

// Definir los tipos de las props
type ModalProps = {
  title: string;
  confirmText: string;
  isVisible: boolean;
  onClose: () => void;
  description: string;
  icon?: React.ReactNode;
};

const ConfirmModal: React.FC<ModalProps> = ({
  title,
  confirmText,
  isVisible,
  onClose,
  description,
  icon,
}) => {
  const router = useRouter();
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          {/* Título del modal */}
          <Text style={styles.modalTitle}>{title}</Text>
          <Text style={styles.modalSubtitle}>{description}</Text>

          {/* Botones */}
          <View style={styles.buttonGroup}>
            {icon}
            <TouchableOpacity style={styles.primaryButton} onPress={onClose}>
              <View style={styles.buttonContent}>
                <Text style={styles.primaryButtonText}>{confirmText}</Text>
                <MaterialIcons
                  name="chevron-right"
                  size={24}
                  color="#fff"
                  style={styles.icon}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: 363,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: Colors.secondary,
    textAlign: "center",
  },
  modalSubtitle: {
    fontSize: 14,
    color: Colors.secondary,
    marginBottom: 20,
    textAlign: "center",
  },
  modalContent: {
    fontSize: 16,
    color: Colors.secondary,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: 10,
    gap: 30,
  },
  outlineButton: {
    backgroundColor: "transparent",
    borderColor: Colors.primary,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: 140,
    justifyContent: "center",
    alignItems: "center",
  },
  outlineButtonText: {
    color: Colors.primary,
    fontSize: 16,
  },
  primaryButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: 140,
    justifyContent: "center",
    alignItems: "center",
  },
  primaryButtonText: {
    color: "#fff",
    fontSize: 16,
    marginRight: 10, // Añade espacio entre el texto y el ícono
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    // Espacio para el ícono
  },
});

export { ConfirmModal };
