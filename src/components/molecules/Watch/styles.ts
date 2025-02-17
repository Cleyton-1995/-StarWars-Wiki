import { StyleSheet } from "react-native";
import { theme } from "../../../themes";

export const styles = StyleSheet.create({
  container: {
    width: theme.metrics.px(88),
    height: theme.metrics.px(124),
    borderRadius: theme.metrics.px(8),
    overflow: "hidden",
    marginRight: theme.metrics.px(12),
  },

  cardImage: {
    width: "100%",
    height: "100%",
  },
});
