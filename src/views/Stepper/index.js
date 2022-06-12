import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { center } from "../../utils/helper";
import { Title } from "../TransparentModal";

const RightArrow = require("../../assets/rightArrow.png");

const ProgressForm = ({}) => {
  const [step, setStep] = useState(1);

  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.stepWrapper}>
          {step >= 1 ? (
            <View style={styles.activeCircle}>
              <Text style={styles.stepText}>✊</Text>
            </View>
          ) : (
            <View style={styles.activeCircle}>
              <Text style={styles.stepText}>1</Text>
            </View>
          )}
        </View>
        <View style={styles.line} />
        <View style={styles.stepWrapper}>
          {step >= 2 ? (
            <View style={styles.activeCircle}>
              {step === 2 ? (
                <Text style={styles.stepText}>2</Text>
              ) : (
                <Text style={styles.stepText}>✊</Text>
              )}
            </View>
          ) : (
            <View style={styles.inActiveCircle}>
              <Text style={styles.stepText}>2</Text>
            </View>
          )}
        </View>
        <View style={styles.line} />
        <View style={styles.stepWrapper}>
          {step >= 3 ? (
            <View style={styles.activeCircle}>
              {step === 3 ? (
                <Text style={styles.stepText}>3</Text>
              ) : (
                <Text style={styles.stepText}>✊</Text>
              )}
            </View>
          ) : (
            <View style={styles.inActiveCircle}>
              <Text style={styles.stepText}>3</Text>
            </View>
          )}
        </View>
        <View style={styles.line} />
        <View style={styles.stepWrapper}>
          {step >= 4 ? (
            <View style={styles.activeCircle}>
              {step === 4 ? (
                <Text style={styles.stepText}>4</Text>
              ) : (
                <Text style={styles.stepText}>✊</Text>
              )}
            </View>
          ) : (
            <View style={styles.inActiveCircle}>
              <Text style={styles.stepText}>4</Text>
            </View>
          )}
        </View>
      </View>

      {[1, 2, 3, 4, 5].map((_, index) => {
        return (
          <>
            {step === index + 1 && (
              <Title style={{ color: "red" }}>
                {step === 5 ? "SUCCCES" : `I'm step ${_}`}
              </Title>
            )}
          </>
        );
      })}

      <View style={{ ...center, flexDirection: "row" }}>
        <View style={{ ...center }}>
          <TouchableOpacity
            onPress={() => setStep(step === 1 ? 1 : step - 1)}
            style={[styles.btn, { width: 100 }]}
          >
            <Title>Back</Title>
          </TouchableOpacity>
        </View>

        <View style={{ ...center }}>
          {step >= 4 ? (
            <TouchableOpacity
              onPress={() => setStep(5)}
              style={[styles.btn, { width: 100, marginLeft: 20 }]}
            >
              <Title>Submit</Title>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => setStep(step === 4 ? 4 : step + 1)}
              style={[styles.btn, { width: 100, marginLeft: 20 }]}
            >
              <Title>Next</Title>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 200,
  },
  btn: {
    backgroundColor: "#E1012D",
    ...center,
    width: 200,
    height: 28,
  },
  stepWrapper: {
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    width: "12%",
    height: "100%",
  },
  activeCircle: {
    width: 40,
    height: 40,
    backgroundColor: "#E1012D",
    borderRadius: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inActiveCircle: {
    width: 40,
    height: 40,
    backgroundColor: "#636262",
    borderRadius: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  stepText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
  stepCompoText: {
    color: "red",
    textAlign: "center",
    width: "100%",
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 20,
  },
  line: {
    height: 2,
    backgroundColor: "#636262",
    width: "16%",
  },
});
export default ProgressForm;
