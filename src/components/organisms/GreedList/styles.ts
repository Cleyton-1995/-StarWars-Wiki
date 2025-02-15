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
   marginBottom: theme.metrics.px(12)
  }
});
