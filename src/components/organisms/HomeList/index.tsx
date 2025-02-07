import React from "react";
import { FlatList, View } from "react-native";
import { Card } from "../../molecules/Card";

interface FakeDataItem {
  id: number;
  image_url: string;
}

const fakeData: FakeDataItem[] = [
  {
    id: 0,
    image_url:
      "https://sociedadejedi.com.br/wp-content/uploads/2016/01/Vader1.jpg",
  },
  {
    id: 1,
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/e/ed/2015-07-31_Cologne_Star_Wars_Exhibition_03.jpg",
  },
];

export function HomeList() {
  return (
    <FlatList
      horizontal
      data={fakeData}
      renderItem={({ item }: { item: FakeDataItem }) => <Card item={item} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}
