import { StyleSheet } from "react-native";
import { theme } from "../../../themes";

export const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.metrics.px(8),
    gap: theme.metrics.px(6),
    backgroundColor: theme.colors.dark,
  },

  buttonText: {
    color: theme.colors.white,
    fontFamily: theme.fonts.bold,
  },
});
