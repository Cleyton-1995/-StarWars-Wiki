import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";

export interface ContainerProps {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}

export function Container({ style, children }: ContainerProps) {
  return <View style={style}>{children}</View>;
}
