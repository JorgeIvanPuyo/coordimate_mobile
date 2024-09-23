import { Colors } from "@/constants/Colors";
import React, { useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import Checkbox from "@mui/material/Checkbox";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

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
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              borderBottomWidth: 1,
            }}
            key={guest}
          >
            <Checkbox />
            <Text style={{}}>{guest}</Text>
          </View>
        ))}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "end",
            alignItems: "center",
            gap: 4,
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
            <DeleteOutlineIcon name="trash" size={24} color={"error"} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export { GuestsList };
