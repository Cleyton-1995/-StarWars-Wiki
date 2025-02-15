import { StyleSheet } from 'react-native';
import { theme } from '../../themes';

export const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingHorizontal: theme.metrics.px(24),
      paddingVertical: theme.metrics.px(56),
      backgroundColor: theme.colors.dark,
      
    },
  
    header: {
      alignItems: "center",
      flexDirection: "row",
      gap: theme.metrics.px(12),
    },
  
    favoriteText: {
      color: theme.colors.white,
      fontSize: theme.metrics.px(28),
      fontWeight: "bold",
      fontFamily: theme.fonts.bold
    },
  
    logo: {
      height: theme.metrics.px(48),
      width: theme.metrics.px(48),
    },
});