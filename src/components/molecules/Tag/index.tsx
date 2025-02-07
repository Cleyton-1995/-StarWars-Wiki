import React from "react";
import { StyleProp, Text, View, ViewStyle } from "react-native";
import { styles } from "./styles";

export interface TagProps {
  style?: StyleProp<ViewStyle>;
  label?: string;
}

export function Tag({ style, label }: TagProps) {
  return <Text style={[styles.container, style]}>{label}</Text>;
}
