import { StyleSheet } from "react-native";
import { theme } from "../../../themes";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.red,
    borderRadius: theme.metrics.px(24),
    maxWidth: theme.metrics.px(90),
    color: theme.colors.white,
    padding: theme.metrics.px(3.5),
    width: "auto",
    height: theme.metrics.px(24),
  },
  text: {
    textAlign: "center",
    color: theme.colors.white,
  },
});
