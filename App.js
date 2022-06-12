import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import ProgressForm from "./src/views/Stepper";
import TransparentModal from "./src/views/TransparentModal";

export default function App() {
  const [show, setShow] = useState(0);

  let data = [
    {
      title: "MODAL",
      id: 1,
    },
    {
      title: "PROGRSS FORM",
      id: 2,
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {show === 0 ? (
        <>
          {data?.map((_, index) => {
            return (
              <TouchableOpacity onPress={() => setShow(_.id)}>
                <Text>{_.title}</Text>
              </TouchableOpacity>
            );
          })}
        </>
      ) : (
        <>
          <TouchableOpacity onPress={() => setShow(0)}>
            <Text>GO Back</Text>
          </TouchableOpacity>
          {show === 1 && <TransparentModal />}
          {show === 2 && <ProgressForm />}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
