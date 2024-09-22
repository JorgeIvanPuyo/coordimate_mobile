import { Colors } from "@/constants/Colors";
import { styles } from "@/styles/common";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

type ActionsProps = {
  saveData: () => void;
  cancel: () => void;
};

const Actions = ({ saveData, cancel }: ActionsProps) => {
  return (
    <SafeAreaView
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <TouchableOpacity onPress={saveData} style={styles.createButton}>
        <View style={styles.buttonContent}>
          <Text style={styles.buttonText}>Actualizar datos</Text>
          <MaterialIcons name="chevron-right" size={24} color="#fff" />
        </View>
      </TouchableOpacity>

      {/* Botón Cancelar */}
      <TouchableOpacity onPress={() => cancel()} style={styles.cancelButton}>
        <Text style={styles.cancelText}>Cancelar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export { Actions };
