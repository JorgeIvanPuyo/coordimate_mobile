import React, { useState } from "react";
import { LayoutAuthenticated } from "@/components/LayoutAuthenticated";
import { RootStackParamList } from "@/navigation/AppNavigator";
import { styles } from "@/styles/common";
import { StackNavigationProp } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { GuestsList, Header } from "./components";
import { Actions } from "@/components/actions";
import { Colors } from "@/constants/Colors";
import { FormControl, MenuItem, Select } from "@mui/material";

type InvitationsScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "Invitations">;
};

const FRIENDS = ["", "Pedro paramo", "Lorena Cadavid", "Gustavo Cerati"];
const GUESTS = ["Katia Brancamonte", "Luis Pedro", "Juan David"];
const ALARM_NAMES = ["Alarma 1", "Alarma 2", "Alarma 3"];

const InvitationsScreen = ({ navigation }: InvitationsScreenProps) => {
  const [guests, setGuests] = useState(GUESTS);
  const [friends, setFriends] = useState(FRIENDS);
  const [newGuest, setNewGuest] = useState("");

  const handleCancel = () => {
    navigation.goBack();
  };

  const handleNewGuest = () => {
    const friendsFiltered = friends.filter((friend) => friend !== newGuest);
    setGuests([...guests, newGuest]);
    setFriends(friendsFiltered);
    setNewGuest("");
  };

  return (
    <LayoutAuthenticated navigation={navigation}>
      <Header />

      <View style={{ display: "flex", flexDirection: "column", rowGap: 32 }}>
        <View>
          <View>
            <Text style={styles.label}>Nombre de Alarma</Text>
          </View>
          <FormControl>
            <Select id="alarm">
              {ALARM_NAMES.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Text style={invitationStyles.leyend}>
            Selecciona la alarma a la cual invitaras a tus amigos
          </Text>
        </View>

        <View>
          <View>
            <Text style={styles.label}>Amigos a Invitar</Text>
          </View>
          <View>
            <Select
              id="friends"
              value={newGuest}
              onChange={(e: any) => setNewGuest(e?.target?.value)}
            >
              {FRIENDS.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </View>
          <Text style={invitationStyles.leyend}>
            Busca amigos en tu lista de contactos para invitar
          </Text>
        </View>

        <GuestsList guests={guests} onRemove={() => null} />

        <Actions
          confirmText="Enviar Invitaciones"
          saveData={handleNewGuest}
          cancel={handleCancel}
          disabled={!newGuest}
        />
      </View>
    </LayoutAuthenticated>
  );
};

const invitationStyles = StyleSheet.create({
  leyend: { color: Colors.secondary, fontSize: 12 },
});

export { InvitationsScreen };
