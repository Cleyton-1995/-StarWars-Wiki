import React from "react";
import { TextInput, View } from "react-native";

import { styles } from "./styles";
import { theme } from "../../../themes";

export function Input(props) {
  return (
    <View style={styles.container} >
      <TextInput
        {...props}
        style={styles.input}
        placeholder="Nome do Filme ou Personagem"
        placeholderTextColor={theme.colors.grey}
      />
    </View>
  );
}
