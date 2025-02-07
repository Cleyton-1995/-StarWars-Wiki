import React from "react";
import { StyleProp, Text, TextStyle } from "react-native";

interface CustomTextProps {
  label: string;
  style?: StyleProp<TextStyle>
}
export function CustomText({ label, style }: CustomTextProps) {
  return <Text style={ style}>{label}</Text>;
}
