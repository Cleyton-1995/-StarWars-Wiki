import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../../themes/colors";
import { Logo } from "../../atoms/Logo";
import { CustomText } from "../../atoms/Text";
import { Tag } from "../../molecules/Tag";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { theme } from "../../../themes";
import { Button } from "../../molecules/Button";

interface HeroProps {
  item: {
    image_url: string;
    title: string;
    subtitle: string;
    type: string;
    desccription?: string;
  };
}
export function Hero({
  item: { desccription, image_url, subtitle, title, type },
}: HeroProps) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={[styles.ImageBackground]}
        source={{
          uri: image_url,
        }}
      >
        <LinearGradient
          style={styles.gradient}
          colors={[colors.dark, "transparent", colors.dark]}
        >
          <Logo style={styles.logo} />

          <Tag label={type} style={styles.tag} />

          <CustomText style={styles.labelTitle} label={title} />

          <CustomText style={styles.labelSubtitle} label={subtitle} />

          <View style={styles.buttonContainer}>
            <Button
              icon="add-circle-outline"
              label="Favoritos"
              library="Ionicons"
              iconColor={theme.colors.white}
              style={styles.buttonAdd}
              textStyle={{ fontSize: 10 }}
            />
            <Button
              icon="play"
              label="Assistir"
              library="Ionicons"
              iconColor={theme.colors.black}
              style={styles.buttonPlay}
              textStyle={{ color: theme.colors.black, fontSize: 14 }}
            />
            <Button
              icon="info-outline"
              label="Saiba Mais"
              library="MaterialIcons"
              iconColor={theme.colors.white}
              style={styles.buttonInfo}
              textStyle={{ fontSize: 10 }}
            />
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}
