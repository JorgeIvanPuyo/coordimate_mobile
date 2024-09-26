import { Colors } from "@/constants/Colors";
import React, { useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { GuestItem } from "./GuestItem";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type GuestsListProps = {
  guests: string[];
  onRemove: (guestsList: Array<string>) => void;
};

const GuestsList: React.FC<GuestsListProps> = ({ guests, onRemove }) => {
  const [guestsSelected, setGuestsSelected] = useState([]);
  return (
    <SafeAreaView>
      <Text
        style={{
          backgroundColor: Colors.third,
          textAlign: "center",
          fontSize: 16,
          padding: 4,
        }}
      >
        Lista de invitados
      </Text>
      <View style={{}}>
        {guests.map((guest) => (
          <GuestItem key={guest} guest={guest} />
        ))}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 4,
            marginTop: 8,
          }}
        >
          <Text
            style={{
              color: Colors.secondary,
            }}
          >
            Eliminar contactos seleccionados
          </Text>
          <TouchableOpacity onPress={() => onRemove(guestsSelected)}>
            <MaterialIcons name="delete" size={28} color={Colors.error} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export { GuestsList };
