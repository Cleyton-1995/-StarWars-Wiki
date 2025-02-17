import React from "react";
import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";
import { Watch } from "../../molecules/Watch";

interface FakeDataItem {
  id: number;
  image_url: string;
  video: string;
}

interface HomeListProps {
  data?:  { id: number; image_url: string, video: string }[];
}

export function WatchList({ data, }: HomeListProps) {
  return (
    <View style={styles.container} >
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }: { item: FakeDataItem }) => <Watch item={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
}
