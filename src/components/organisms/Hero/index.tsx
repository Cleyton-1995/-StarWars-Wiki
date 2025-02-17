import React, { useEffect, useMemo, useState } from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../../themes/colors";
import { Logo } from "../../atoms/Logo";
import { CustomText } from "../../atoms/Text";
import { Tag } from "../../molecules/Tag";
import { theme } from "../../../themes";
import { Button } from "../../molecules/Button";
import { useNavigation } from "@react-navigation/native";
import { useFavorites } from "../../../services/hooks/useFavorites";
import { useDataStorage } from "../../../services/storage/dataStorage";
import { SuccessModal } from "../../molecules/successModal";

interface HeroProps {
  item: {
    id: string;
    image_url: string;
    title: string;
    subtitle: string;
    type: string;
    description?: string;
    video: string;
  };
  withoutLogo?: boolean;
  hideInfoButton?: boolean;
  hideButtons?: boolean;
}
export function Hero({
  item: { video, id, description, image_url, subtitle, title, type },
  withoutLogo,
  hideInfoButton = false,
  hideButtons = false,
}: HeroProps) {
  const { setSelectedData } = useDataStorage();

  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showFavoriteModal, setShowFavoriteModal] = useState(null);

  const item = {
    id,
    image_url,
    title,
    subtitle,
    type,
    description,
    video,
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

  function closeModal() {
    setTimeout(() => {
      setShowFavoriteModal(null);
    }, 1000);
  }

  async function addDataToFavorite() {
    await addFavorites(item);
    setShowFavoriteModal("added");
    checkIsFavorite();
    closeModal();
  }

  async function removeDataFromFavorite() {
    await removeFavorite(item);
    setShowFavoriteModal("removed");
    checkIsFavorite();
    closeModal();
  }

  function onPressDatail() {
    setSelectedData(item);
    navigation.navigate("DatailScreen");
  }

  function onPressWatch() {
    setSelectedData(item);
    navigation.navigate("WatchScreen", { filmId: item.id });
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

          {!hideButtons && ( // Agora, se hideButtons for true, os botões não aparecem
            <View style={styles.buttonContainer}>
              <Button
                label={isFavorite ? "Rem. Favoritos" : "Add. Favoritos"}
                icon={
                  isFavorite ? "remove-circle-outline" : "add-circle-outline"
                }
                library="Ionicons"
                iconColor={theme.colors.white}
                style={styles.buttonAdd}
                textStyle={{ fontSize: 10 }}
                onPress={
                  isFavorite ? removeDataFromFavorite : addDataToFavorite
                }
              />
              <Button
                icon="play"
                label="Assistir"
                library="Ionicons"
                iconColor={theme.colors.black}
                style={styles.buttonPlay}
                textStyle={{ color: theme.colors.black, fontSize: 14 }}
                onPress={onPressWatch}
              />
              {!hideInfoButton && (
                <Button
                  icon="info-outline"
                  label="Saiba Mais"
                  library="MaterialIcons"
                  iconColor={theme.colors.white}
                  style={styles.buttonInfo}
                  textStyle={{ fontSize: 10 }}
                  onPress={onPressDatail}
                />
              )}
            </View>
          )}
        </LinearGradient>
      </ImageBackground>
      {!!showFavoriteModal && (
        <SuccessModal
          type={setShowFavoriteModal}
          visible={!!showFavoriteModal}
          onClose={() => showFavoriteModal(null)}
        />
      )}
    </View>
  );
}
