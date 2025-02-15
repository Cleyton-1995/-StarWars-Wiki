import { StyleSheet } from "react-native";
import { theme } from "../../../themes";

export const styles = StyleSheet.create({
  contentContainer: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingTop: theme.metrics.px(12),
  },

  card: {
    height: theme.metrics.px(150),
    width: theme.metrics.px(102),
    marginBottom: theme.metrics.px(12),
  },

  text: {
    fontFamily: theme.fonts.semiBold,
    fontSize: theme.metrics.px(14),
    color: theme.colors.white,
    width: theme.metrics.px(115),
    textAlign: "center"
  },

  image: {
    width: theme.metrics.px(48),
    height: theme.metrics.px(48),
    marginBottom: theme.metrics.px(12)
  },

  selo: {
    width: "100%",
    marginTop: 200, 
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
