import React, { useEffect } from "react";
import { styles } from "./styles";
import { CustomText } from "../../components/atoms/Text";
import { Logo } from "../../components/atoms/Logo";
import { Container } from "../../components/atoms/Container";

export function SplashScreen({ navigation }: any) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("HomeScreen");
    }, 1000);
  }, [navigation]);

  return (
    <Container style={styles.container}>
      <Logo style={styles.logo} />
      <CustomText style={styles.title} label=" Naruto-Wiki" />
    </Container>
  );
}
