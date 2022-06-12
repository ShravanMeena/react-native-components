import React, { useEffect, useState } from "react";
import {
  Modal,
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  BackHandler,
  Text,
} from "react-native";
import { center, windowHeight, windowWidth } from "../../utils/helper";

export function Title({ children, style, center, light }) {
  return (
    <Text
      style={[
        {
          color: light ? "rgba(255,255,255,.5)" : "rgba(255,255,255,.8)",
          textAlign: center && "center",
          fontSize: 14,
        },
        { ...style },
      ]}
    >
      {children}
    </Text>
  );
}

export default function TransparentModal({
  headerShown,

  headerTitle,
}) {
  const [isShow, setShow] = useState(false);

  return (
    <>
      <Modal animationType="fade" visible={isShow} transparent={true}>
        <View style={[styles.modalContainer]}>
          <View style={[styles.modalContainerInner]}>
            <View style={[styles.closeContainer]}>
              <View>{headerShown && <Title>{headerTitle}</Title>}</View>
              <TouchableOpacity
                style={{
                  ...center,
                }}
                onPress={() => setShow(false)}
              >
                <Title>X</Title>
              </TouchableOpacity>
            </View>

            <View style={{ marginTop: 55, paddingHorizontal: 10 }}>
              <Title style={{ ...center }}>
                Open up App.js to start working on your app!
              </Title>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        onPress={() => {
          setShow(true);
        }}
        style={{ backgroundColor: "red", padding: 10, borderRadius: 4 }}
      >
        <Title>I'm transparent modal</Title>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF3E0",
  },

  modal: {
    width: 300,
    height: 200,
    backgroundColor: "#00B8D4",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "red",
  },
  modalContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    flex: 1,
    justifyContent: "center",
  },
  modalContainerInner: {
    backgroundColor: "#161616",
    borderRadius: 4,
    alignSelf: "center",
    borderWidth: 0.5,
    borderColor: "rgba(225, 1, 45, 0.5)",
    position: "relative",
    width: windowWidth - 30,
    minHeight: windowHeight / 6,
    maxHeight: windowHeight * 0.8,
    paddingBottom: 10,
    padding: 1,
  },
  text: {
    fontSize: 28,
    textAlign: "center",
    color: "white",
  },

  closeContainer: {
    position: "absolute",
    top: 0,
    height: 40,
    width: windowWidth - 40,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
});
