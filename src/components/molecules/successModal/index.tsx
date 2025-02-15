import React from "react";
import { Image, Text, View } from "react-native";
import Nauto from "../../../assets/narutos.png";

import { styles } from "./styles";

interface ModalProps {
  visible?: boolean;
  onClose?: () => void;
  type?: "added" | "removed";
}

export function SuccessModal({ onClose, type, visible }: ModalProps) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image resizeMode="contain" style={styles.image} source={Nauto} />

        <Text style={styles.text}>
          {type === "added"
            ? "Favorito adicionado com sucesso!"
            : type === "removed"
            ? "Favorito removido com sucesso!"
            : "Ação realizada com sucesso!"}
        </Text>
      </View>
    </View>
  );
}
