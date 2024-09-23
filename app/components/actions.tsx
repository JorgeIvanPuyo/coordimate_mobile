import React from "react";
import { Colors } from "@/constants/Colors";
import { styles } from "@/styles/common";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

type ActionsProps = {
  saveData: () => void;
  cancel: () => void;
  cancelText?: string;
  confirmText: string;
  disabled: boolean;
};

const Actions = ({
  saveData,
  cancel,
  disabled,
  confirmText,
  cancelText,
}: ActionsProps) => (
  <SafeAreaView
    style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
  >
    <TouchableOpacity
      onPress={saveData}
      style={
        disabled
          ? { ...styles.createButton, backgroundColor: Colors.third }
          : styles.createButton
      }
      disabled={disabled}
    >
      <View style={styles.buttonContent}>
        <Text style={styles.buttonText}>{confirmText}</Text>
        <MaterialIcons name="chevron-right" size={24} color="#fff" />
      </View>
    </TouchableOpacity>

    {/* Botón Cancelar */}
    <TouchableOpacity onPress={() => cancel()} style={styles.cancelButton}>
      <Text style={styles.cancelText}>{cancelText ?? "Cancelar"}</Text>
    </TouchableOpacity>
  </SafeAreaView>
);

export { Actions };
