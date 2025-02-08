import { StyleSheet } from "react-native";
import { theme } from "../../../themes";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
  },

  title: {
    color: theme.colors.white,
    fontFamily: theme.fonts.black,
    marginLeft: theme.metrics.px(24),
    paddingTop: theme.metrics.px(12),
    fontSize: theme.metrics.px(18),
    fontWeight: "bold"
  },
  contentContainer: {
    paddingTop: theme.metrics.px(12),
    paddingLeft: theme.metrics.px(24)
  }
});
