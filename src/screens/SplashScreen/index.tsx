import React from "react";

import { styles } from "./styles";
import { CustomText } from "../../components/atoms/Text";
import { Logo } from "../../components/atoms/Logo";
import { Container } from "../../components/atoms/Container";

export function SplashScreen() {
  return (
    <Container style={styles.container}>
      <Logo style={styles.logo} />
      <CustomText style={styles.title} label=" StarWars-Wiki" />
    </Container>
  );
}
