import React from "react";
import {
  Image,
  StyleProp,
  ImageStyle,
  View,
  TextStyle,
  TouchableOpacity,
} from "react-native";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";

import LogoImage from "../../../assets/lg.png";
import { theme } from "../../../themes";

type IconLibrary = "Ionicons" | "MaterialIcons" | "Feather";

interface LogoProps {
  style?: StyleProp<ImageStyle>;
  barStyle?: StyleProp<TextStyle>;
  image?: boolean;
  icon?: string;
  library?: IconLibrary;
  iconSize?: number;
  iconColor?: string;
  onPress?: () => void;
}

export function Logo({
  style,
  image = true,
  icon,
  library = "Ionicons",
  iconSize = 24,
  iconColor = theme.colors.white,
  onPress,
}: LogoProps) {
  const IconComponent =
    library === "MaterialIcons"
      ? MaterialIcons
      : library === "Feather"
      ? Feather
      : Ionicons;

  return (
    <View style={style}>
      {image ? (
        <Image style={style} source={LogoImage} />
      ) : (
        <TouchableOpacity activeOpacity={0.8}>
          icon && (
          <IconComponent
            onPress={onPress}
            name={icon as any}
            size={iconSize}
            color={iconColor}
          />
          )
        </TouchableOpacity>
      )}
    </View>
  );
}
