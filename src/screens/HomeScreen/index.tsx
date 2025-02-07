import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import { Card } from '../../components/molecules/Card';
import { Container } from '../../components/atoms/Container';
import { HomeList } from '../../components/organisms/HomeList';
import { Hero } from '../../components/organisms/Hero';

export function HomeScreen() {
  return (
    <Container style={styles.container}>
      <Hero/>
      <HomeList/>
    </Container>
  );
}