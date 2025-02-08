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
      "https://play-lh.googleusercontent.com/3uBdCYP7gT8Uvnqqdvdxa3shr4anQBw4t_rsebsmJvl6XuQvBpv7TJpsOuoUk8OgeaY",
  },
  {
    id: 1,
    image_url:
      "https://m.media-amazon.com/images/S/pv-target-images/1de9f16753abc812b432627a10dc66f48428cf0c5165c66dc3c73c97870a43fc.jpg",
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
