import React from "react";
import { FlatList, Text, View } from "react-native";

import { styles } from "./styles";
import { Card } from "../src/components/molecules/Card";

interface Item {
  id: number;
  image_url: string;
}

interface HomeListProps {
  data?: { id: number; image_url: string }[];
}
export function GreedList({ data }: HomeListProps) {
  return (
    <FlatList
      numColumns={3}
      data={data}
      renderItem={({ item }: { item: Item }) => <Card style={styles.card} item={item} />}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.contentContainer}
    />
  );
}
