import React from "react";
import { useState } from "react";
import { Text, View } from "react-native";
import { Checkbox } from "react-native-paper";

type GuestItemProps = {
  guest: string;
};

const GuestItem: React.FC<GuestItemProps> = ({ guest }) => {
  const [checked, setChecked] = useState(false);

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
      }}
      key={guest}
    >
      <Checkbox
        status={checked ? "checked" : "unchecked"}
        onPress={() => {
          setChecked(!checked);
        }}
      />
      <Text style={{}}>{guest}</Text>
    </View>
  );
};

export { GuestItem };
