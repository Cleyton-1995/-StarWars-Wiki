import React from "react";
import { Image, StyleProp, ImageStyle, View } from "react-native";

import LogoImage from "../../../assets/logo.png";

interface LogoProps {
  style?: StyleProp<ImageStyle>;
}
export function Logo({ style }: LogoProps) {
  return <Image style={style} source={LogoImage} />;
}
