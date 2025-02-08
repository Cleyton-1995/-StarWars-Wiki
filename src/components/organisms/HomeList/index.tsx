import React from "react";
import { FlatList, Text, View } from "react-native";
import { Card } from "../../molecules/Card";
import { styles } from "./styles";

interface FakeDataItem {
  id: number;
  image_url: string;
}

interface HomeListProps {
  title?: string;
  data?:  { id: number; image_url: string }[];
}

export function HomeList({ data, title }: HomeListProps) {
  return (
    <View style={styles.container} >
      <Text  style={styles.title}>{title}</Text>

      <FlatList
        horizontal
        data={data}
        renderItem={({ item }: { item: FakeDataItem }) => <Card item={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
}
