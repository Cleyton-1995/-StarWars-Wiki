import React from "react";
import { FlatList, Image, StyleProp, Text, TextStyle, View } from "react-native";

import { styles } from "./styles";
import { Card } from "../../molecules/Card";

import Selo from "../../../assets/selo9.png";

interface Item {
  id: number;
  image_url: string;
}

interface HomeListProps {
  type?: string;
  loading?: boolean;
  data?: { id: number; image_url: string }[];
    style?: StyleProp<TextStyle>;
}
export function GreedList({ data, type, loading, style  }: HomeListProps) {
  return (
    <FlatList
      numColumns={3}
      data={data}
      renderItem={({ item }: { item: Item }) => (
        <Card style={styles.card} item={item} />
      )}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.contentContainer}
      ListEmptyComponent={() => (
        <View style={[styles.selo, style]} >
          <Image
            source={Selo}
            style={styles.image}
          />
          <Text style={styles.text}>
            {`Nenhum ${ 
              type === "favorites" ? "favorito" : "resultado"
            } encontrado.
            `}
          </Text>
        </View>
      )}
    />
  );
}
