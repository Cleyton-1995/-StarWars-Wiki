import React, { useState } from "react";
import { ScrollView, Text } from "react-native";

import { styles } from "./styles";
import { Hero } from "../../components/organisms/Hero";
import { useDataStorage } from "../../services/storage/dataStorage";
import { theme } from "../../themes";
export function DatailScreen() {
  const { selectedData } = useDataStorage();

  const isCharacter = selectedData.type?.toLowerCase() === "personagem";

  const descriptionMarginTop = isCharacter
    ? theme.metrics.px(-50) // Para personagens
    : theme.metrics.px(24);

  return (
    <ScrollView style={styles.container}>
      <Hero
        item={selectedData}
        withoutLogo
        hideInfoButton={true}
        hideButtons={isCharacter}
      />

      <Text
        style={[styles.descriptionText, { marginTop: descriptionMarginTop }]}
      >
        Descrição
      </Text>

      <Text style={styles.description}>{selectedData.description}</Text>
    </ScrollView>
  );
}
