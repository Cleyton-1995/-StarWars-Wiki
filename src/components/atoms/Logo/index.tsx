import React from "react";
import { Image, StyleProp, ImageStyle, View } from "react-native";

interface LogoProps {
  style?: StyleProp<ImageStyle>;
}
export function Logo({ style }: LogoProps) {
  return (
      <Image style={style} source={require("../../../assets/logo.png")} />
  );
}
