import { StyleSheet } from "react-native";
import { theme } from "../../../themes";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.red,
    borderRadius: theme.metrics.px(24),
    maxWidth: theme.metrics.px(100),
    color: theme.colors.white,
    width: "auto",
    height: theme.metrics.px(24),
  },
  text: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: theme.colors.white,
  },
});
