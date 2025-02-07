import { colors } from "./../../../themes/colors";
import { StyleSheet } from "react-native";
import { theme } from "../../../themes";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: theme.metrics.px(460),
  },

  ImageBackground: {
    width: "100%",
    height: "100%",
  },

  gradient: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    paddingHorizontal: theme.metrics.px(24),
    paddingTop: theme.metrics.px(56),
  },

  logo: {
    height: theme.metrics.px(28),
    width: theme.metrics.px(28),
  },

  labelTitle: {
    color: theme.colors.white,
    fontFamily: theme.fonts.bold,
    fontWeight: "bold",
    fontSize: theme.metrics.px(28),
    marginTop: theme.metrics.px(214),
  },

  labelSubtitle: {
    color: theme.colors.white,
    fontSize: theme.metrics.px(18),
  },
});
