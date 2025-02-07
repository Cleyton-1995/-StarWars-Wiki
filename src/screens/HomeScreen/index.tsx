import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import { Card } from '../../components/molecules/Card';

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <Card item={{image_url: "https://sociedadejedi.com.br/wp-content/uploads/2016/01/Vader1.jpg"}} />
    </View>
  );
}