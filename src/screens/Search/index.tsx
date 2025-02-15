import React, { useState } from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";
import { Logo } from "../../components/atoms/Logo";
import { GreedList } from "../../components/organisms/GreedList";
import { Input } from "../../components/atoms/Input";

export function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo style={styles.logo} />
        <Text style={styles.favoriteText}>Pesquisar</Text>
      </View>

      <Input value={query} onChangeText={setQuery} />

      <GreedList data={results} />
    </View>
  );
}
