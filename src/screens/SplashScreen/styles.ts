import { StyleSheet } from "react-native";
import { theme } from "../../themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.dark,
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    height: theme.metrics.px(100),
    width: theme.metrics.px(100),
  },

  title: {
    color: theme.colors.white,
    fontSize: theme.metrics.px(24),
    fontWeight: "bold",
    fontFamily: theme.fonts.bold,
  },
});
