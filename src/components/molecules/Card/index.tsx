import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface CardProps {
  item: {
    image_url: string;
  };
}

export function Card({ item }: CardProps) {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container}>
      <Image source={{ uri: item.image_url }} style={styles.cardImage} />
    </TouchableOpacity>
  );
}
