import { colors } from "./../../../themes/colors";
import { StyleSheet } from "react-native";
import { theme } from "../../../themes";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: theme.metrics.px(460),
    marginBottom: theme.metrics.px(20),
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
    marginTop: theme.metrics.px(8),
  },

  labelSubtitle: {
    color: theme.colors.white,
    fontSize: theme.metrics.px(18),
  },

  tag: {
    height: theme.metrics.px(24),
    paddingHorizontal: theme.metrics.px(4),
    marginTop: theme.metrics.px(214),
  },

  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.metrics.px(10),
  },

  buttonAdd: {
    color: theme.colors.white,
    fontSize: theme.metrics.px(20),
    justifyContent: "center",
    alignItems: "center",
  },
  buttonPlay: {
    display: "flex",
    color: theme.colors.red,
    fontSize: theme.metrics.px(20),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: theme.colors.white,
    paddingHorizontal: theme.metrics.px(10),
    paddingVertical: theme.metrics.px(8),
    borderRadius: theme.metrics.px(8),
    gap: theme.metrics.px(2),
  },

  buttonInfo: {
    color: theme.colors.white,
    fontSize: theme.metrics.px(20),
    justifyContent: "center",
    alignItems: "center",
  },
});
