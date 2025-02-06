import React from "react";
import { StyleProp, Text, TextStyle, View, ViewStyle } from "react-native";

import { styles } from "./styles";

interface CustomTextProps {
  label: string;
}
export function CustomText({ label }: CustomTextProps) {
  return <Text style={[styles.title]}>{label}</Text>;
}
