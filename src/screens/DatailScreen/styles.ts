import { StyleSheet } from "react-native";
import { theme } from "../../themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.dark,
  },

  descriptionText: {
    marginLeft: theme.metrics.px(24),
    fontFamily: theme.fonts.bold,
    fontSize: theme.metrics.px(18),
    color: theme.colors.white,
    fontWeight: "bold",
    marginTop: theme.metrics.px(24),
  },
  description: {
    marginTop: theme.metrics.px(12),
    marginLeft: theme.metrics.px(24),
    marginRight: theme.metrics.px(24),
    fontSize: theme.metrics.px(14),
    color: theme.colors.white,
    lineHeight: theme.metrics.px(20)
  },
});
