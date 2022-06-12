import { StyleSheet, Dimensions } from "react-native";

export const windowWidth = Dimensions.get("window").width;
export const windowHeight = Dimensions.get("window").height;

export const center = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: -15,
  height: "100%",
};
