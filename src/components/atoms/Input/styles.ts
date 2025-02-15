import { StyleSheet } from "react-native";
import { theme } from "../../../themes";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: theme.metrics.px(327),
    height: theme.metrics.px(42),
    borderRadius: theme.metrics.px(12),
    borderWidth: theme.metrics.px(1),
    borderColor: theme.colors.light,
    color: theme.colors.white,
    padding: theme.metrics.px(6),
    marginTop: theme.metrics.px(12),
    fontFamily: theme.fonts.semiBold,
    fontSize: theme.metrics.px(14),
  },
});
