import React from "react";
import { FlatList, Image, Text, View } from "react-native";

import { styles } from "./styles";
import { Container } from "../../atoms/Container";
import { Card } from "../../molecules/Card";

import Selo from "../../../assets/selo9.png";

interface Item {
  id: number;
  image_url: string;
}

interface HomeListProps {
  type?: string;
  data?: { id: number; image_url: string }[];
}
export function GreedList({ data, type }: HomeListProps) {
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
        <View style={styles.selo} >
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
