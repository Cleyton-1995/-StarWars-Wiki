import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useDataStorage } from "../../../services/storage/dataStorage";

interface CardProps {
  item: {
    image_url: string;
    title: string;
    subtitle: string;
    type: string;
    description?: string;
  };
}

export function Card({ item }: CardProps) {
  const navigation = useNavigation();

  const { setSelectedData } = useDataStorage();

  function onSelectedData() {
    setSelectedData(item);
    navigation.navigate("DatailScreen");
  }

  return (
    <TouchableOpacity
      onPress={onSelectedData}
      activeOpacity={0.8}
      style={styles.container}
    >
      <Image source={{ uri: item.image_url }} style={styles.cardImage} />
    </TouchableOpacity>
  );
}
