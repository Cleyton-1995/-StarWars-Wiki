import React, { useEffect, useMemo, useState } from "react";
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
import { useNavigation } from "@react-navigation/native";
import { useFavorites } from "../../../services/hooks/useFavorites";

interface HeroProps {
  item: {
    id: string;
    image_url: string;
    title: string;
    subtitle: string;
    type: string;
    description?: string;
  };
  withoutLogo?: boolean;
}
export function Hero({
  item: { id, description, image_url, subtitle, title, type },
  withoutLogo,
}: HeroProps) {
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  const item = {
    id,
    image_url,
    title,
    subtitle,
    type,
    description,
  };

  const navigation = useNavigation();

  const { addFavorites, getFavorites, removeFavorite } = useFavorites();

  function onBack() {
    navigation.navigate("HomeScreen");
  }

  const checkIsFavorite = async () => {
    const favorites = await getFavorites();
    const isInFavorite = favorites.filter(
      (fv) => fv.id === item.id && fv.title === item.title
    );
    setIsFavorite(isInFavorite.length > 0);
  };

  useEffect(() => {
    checkIsFavorite();
  }, []);

  async function addDataToFavorite() {
    const result = await addFavorites(item);
    console.log({ result });
    checkIsFavorite();
  }

  async function removeDataFromFavorite() {
    const result = await removeFavorite(item);
    console.log({ result });
    checkIsFavorite();
  }

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
          {withoutLogo ? (
            <Logo
              style={styles.icon}
              image={false}
              icon="chevron-back"
              library="Ionicons"
              iconColor={theme.colors.white}
              onPress={onBack}
              barStyle={styles.icon}
            />
          ) : (
            <Logo style={styles.logo} />
          )}

          <Tag label={type} style={styles.tag} />

          <CustomText style={styles.labelTitle} label={title} />

          <CustomText style={styles.labelSubtitle} label={subtitle} />

          <View style={styles.buttonContainer}>
            <Button
              label={isFavorite ? "Rem. Favoritos" : "Add. Favoritos"}
              icon={isFavorite ? "remove-circle-outline" : "add-circle-outline"}
              library="Ionicons"
              iconColor={theme.colors.white}
              style={styles.buttonAdd}
              textStyle={{ fontSize: 10 }}
              onPress={isFavorite ? removeDataFromFavorite : addDataToFavorite}
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
