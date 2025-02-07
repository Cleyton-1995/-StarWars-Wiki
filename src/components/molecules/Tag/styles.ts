import { StyleSheet } from 'react-native';
import { theme } from '../../../themes';

export const styles = StyleSheet.create({
  container: {
   display: 'flex',
   textAlign: 'center',
   alignItems: 'center',
   justifyContent: 'center',
   backgroundColor: theme.colors.red,
   borderRadius: theme.metrics.px(24),
   maxWidth: theme.metrics.px(80),
   paddingTop: theme.metrics.px(2),
   color: theme.colors.white,
   width: "auto",
  }
});