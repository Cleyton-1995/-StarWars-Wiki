import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";
import { Logo } from "../../components/atoms/Logo";
import { GreedList } from "../../components/organisms/GreedList";
import { Input } from "../../components/atoms/Input";
import { useGetData } from "../../services/hooks/useGetData";

export function Search() {
  const [loading, setLoading] = useState(true);

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const { getSearch } = useGetData();

  async function callGetSearch(query) {
    setLoading(true);
    const result = await getSearch(query);
    setResults(result);
    setLoading(false);
  }

  useEffect(() => {
    if (query.length > 0 && query.length % 3 === 0) {
      callGetSearch(query);
    }
  }, [query]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo style={styles.logo} />
        <Text style={styles.favoriteText}>Pesquisar</Text>
      </View>

      <Input value={query} onChangeText={(text) => setQuery(text)} />

      <GreedList loading={loading} data={results} />
    </View>
  );
}
