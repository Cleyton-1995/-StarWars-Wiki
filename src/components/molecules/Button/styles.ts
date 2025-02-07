import { StyleSheet } from "react-native";
import { theme } from "../../../themes";

export const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: theme.metrics.px(12),
    paddingVertical: theme.metrics.px(8),
    borderRadius: theme.metrics.px(8),
    gap: theme.metrics.px(6),
    backgroundColor: theme.colors.dark, // Padrão
  },

  buttonText: {
    color: theme.colors.white,
    fontSize: theme.metrics.px(16),
    fontFamily: theme.fonts.bold,
  },
});
