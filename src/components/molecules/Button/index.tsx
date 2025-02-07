import React from "react";
import { TouchableOpacity, Text, View, StyleProp, ViewStyle, TextStyle } from "react-native";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";
import { styles } from "./styles";
import { theme } from "../../../themes";

// Definição das bibliotecas de ícones disponíveis
type IconLibrary = "Ionicons" | "MaterialIcons" | "Feather";

interface ButtonProps {
  icon?: string; 
  label: string; 
  library?: IconLibrary; 
  iconSize?: number; 
  iconColor?: string;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<TextStyle>;
  onPress?: () => void;
}

export function Button({
  icon,
  label,
  library = "Ionicons",
  iconSize = 24,
  iconColor = theme.colors.white,
  style,
  textStyle,
  onPress,
}: ButtonProps) {
  const IconComponent =
    library === "MaterialIcons" ? MaterialIcons :
    library === "Feather" ? Feather :
    Ionicons;

  return (
    <TouchableOpacity activeOpacity={0.8} style={[styles.button, style]} onPress={onPress}>
      {icon && <IconComponent name={icon as any} size={iconSize} color={iconColor} />}
      <Text style={[styles.buttonText, textStyle]}>{label}</Text>
    </TouchableOpacity>
  );
}
