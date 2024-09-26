import { Colors } from "@/constants/Colors";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";

type FieldsType = {
  name: string;
  age: string;
  genra: string;
  preference: string;
  address: string;
  city: string;
};

type FieldsProps = {
  fields: Partial<FieldsType>;
  hableonChanges: (value: string, key: keyof FieldsType) => void;
};

const Fields = ({ fields, hableonChanges }: FieldsProps) => {
  return (
    <SafeAreaView>
      <View style={styles.inputContainer}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Nombre</Text>
          <Text style={styles.requiredAsterisk}> *</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          placeholderTextColor={Colors.third}
          value={fields.name}
          onChangeText={(value) => hableonChanges(value, "name")}
        />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Edad</Text>
          <Text style={styles.requiredAsterisk}> *</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Edad"
          placeholderTextColor={Colors.third}
          value={fields.age}
          onChangeText={(value) => hableonChanges(value, "age")}
        />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Genero</Text>
          <Text style={styles.requiredAsterisk}> *</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Geberi"
          placeholderTextColor={Colors.third}
          value={fields.genra}
          onChangeText={(value) => hableonChanges(value, "genra")}
        />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Preferencias</Text>
          <Text style={styles.requiredAsterisk}> *</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Preferencias"
          placeholderTextColor={Colors.third}
          value={fields.preference}
          onChangeText={(value) => hableonChanges(value, "preference")}
        />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Dirección</Text>
          <Text style={styles.requiredAsterisk}> *</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Dirección"
          placeholderTextColor={Colors.third}
          value={fields.address}
          onChangeText={(value) => hableonChanges(value, "address")}
        />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Ciudad</Text>
          <Text style={styles.requiredAsterisk}> *</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Ciudad"
          placeholderTextColor={Colors.third}
          value={fields.city}
          onChangeText={(value) => hableonChanges(value, "city")}
        />
      </View>
    </SafeAreaView>
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
    gap: 10,
    marginBottom: 30,
  },
  title: {
    fontSize: 30,
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

export { Fields };

export type { FieldsType };
