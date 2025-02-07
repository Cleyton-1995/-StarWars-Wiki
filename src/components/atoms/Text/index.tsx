import React from "react";
import { StyleProp, Text, TextStyle, View, ViewStyle } from "react-native";

import { styles } from "./styles";

interface CustomTextProps {
  label: string;
  style?: StyleProp<TextStyle>
}
export function CustomText({ label, style }: CustomTextProps) {
  return <Text style={[styles.title, style]}>{label}</Text>;
}
