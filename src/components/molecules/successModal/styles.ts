import { StyleSheet } from "react-native";
import { theme } from "../../../themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.darkTransparent,
    top: theme.metrics.px(-100),
  },

  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.dark,
    height: theme.metrics.px(326),
    width: theme.metrics.px(326),
    borderRadius: theme.metrics.px(24),
    padding: theme.metrics.px(24),
  },

  text: {
    fontSize: theme.metrics.px(28),
    fontFamily: theme.fonts.bold,
    color: theme.colors.white,
    textAlign: "center",
  },

  image: {
   width: theme.metrics.px(80),
   height: theme.metrics.px(80),
   marginBottom: theme.metrics.px(12),
 },
});
