import { StyleSheet } from 'react-native';
import { theme } from '../../themes';

export const styles = StyleSheet.create({
 logo: {
     height: theme.metrics.px(48),
     width: theme.metrics.px(48),
   },
 
   icon: {
     height: theme.metrics.px(48),
     width: theme.metrics.px(48),
     paddingTop: theme.metrics.px(10),
   },

   container: {
      flex: 1,
      backgroundColor: theme.colors.dark,
      alignItems: "center",
      justifyContent: "center",
    },
    backButton: {
      position: "absolute",
      top: 40,
      left: 20,
    },
    errorContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
});