import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import { Card } from '../../components/molecules/Card';
import { Container } from '../../components/atoms/Container';
import { HomeList } from '../../components/organisms/HomeList';

export function HomeScreen() {
  return (
    <Container style={styles.container}>
      <HomeList/>
    </Container>
  );
}