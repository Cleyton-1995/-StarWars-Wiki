import React from "react";
import { TextInput, View } from "react-native";

import { styles } from "./styles";
import { theme } from "../../../themes";

export function Input(props) {
  return (
    <TextInput
      {...props}
      style={styles.container}
      placeholder="Nome do Filme ou Personagem"
      placeholderTextColor={theme.colors.grey}
    />
  );
}
