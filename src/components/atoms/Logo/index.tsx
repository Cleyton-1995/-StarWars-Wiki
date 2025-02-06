import React from "react";
import { Image, StyleProp, TextStyle, View } from "react-native";

interface LogoProps {
  style?: StyleProp<TextStyle>;
}
export function Logo({ style }: LogoProps) {
  return (
      <Image style={style} source={require("../../../assets/logo.png")} />
  );
}
