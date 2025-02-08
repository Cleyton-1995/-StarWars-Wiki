import React from "react";
import { ScrollView } from "react-native";

import { styles } from "./styles";
import { Hero } from "../../components/organisms/Hero";
import { useDataStorage } from "../../services/storage/dataStorage";
export function DatailScreen() {
    const { selectedData } = useDataStorage();
  

  return (
    <ScrollView style={styles.container}>
      <Hero
        item={selectedData}
        withoutLogo
      />
    </ScrollView>
  );
}
