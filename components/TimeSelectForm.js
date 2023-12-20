import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Padding, Border, Color } from "../GlobalStyles";

const TimeSelectForm = () => {
  return (
    <View style={styles.selectTimeParent}>
      <Text style={styles.selectTime}>Select Time</Text>
      <View style={styles.frameParent}>
        <View style={styles.frameFlexBox1}>
          <View style={styles.wrapper}>
            <Text style={[styles.text, styles.textTypo]}>09:30</Text>
          </View>
          <View style={[styles.container, styles.frameFlexBox]}>
            <Text style={[styles.text1, styles.textTypo]}>10:30</Text>
          </View>
          <View style={[styles.frame, styles.frameFlexBox]}>
            <Text style={[styles.text, styles.textTypo]}>11:00</Text>
          </View>
        </View>
        <View style={[styles.frameContainer, styles.frameFlexBox1]}>
          <View style={styles.wrapper}>
            <Text style={[styles.text, styles.textTypo]}>11:30</Text>
          </View>
          <View style={[styles.wrapper1, styles.frameFlexBox]}>
            <Text style={[styles.text4, styles.textTypo]}>12:00</Text>
          </View>
          <View style={[styles.wrapper1, styles.frameFlexBox]}>
            <Text style={[styles.text4, styles.textTypo]}>12:30</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "center",
    fontSize: FontSize.boldP2_size,
    fontFamily: FontFamily.boldH5,
    fontWeight: "700",
  },
  frameFlexBox: {
    marginLeft: 12,
    padding: Padding.p_3xs,
    height: 42,
    borderRadius: Border.br_9xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  frameFlexBox1: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  selectTime: {
    fontSize: FontSize.boldH2_size,
    textAlign: "left",
    color: Color.neutralColorCoolGrey600,
    fontFamily: FontFamily.boldH5,
    fontWeight: "700",
  },
  text: {
    color: Color.colorForestgreen,
  },
  wrapper: {
    padding: Padding.p_3xs,
    height: 42,
    borderRadius: Border.br_9xs,
    borderWidth: 1,
    borderColor: Color.colorForestgreen,
    borderStyle: "solid",
    backgroundColor: Color.neutralColorCoolGrey50,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  text1: {
    color: Color.conditionalPopOver,
  },
  container: {
    backgroundColor: Color.colorForestgreen,
    width: 103,
  },
  frame: {
    borderWidth: 1,
    borderStyle: "solid",
    flex: 1,
    marginLeft: 12,
    borderColor: Color.colorForestgreen,
    backgroundColor: Color.neutralColorCoolGrey50,
  },
  text4: {
    color: Color.neutralColorCoolGrey600,
  },
  wrapper1: {
    backgroundColor: Color.neutralColorCoolGrey300,
    borderColor: Color.colorLightsteelblue,
    opacity: 0.5,
    borderWidth: 1,
    borderStyle: "solid",
    flex: 1,
    marginLeft: 12,
  },
  frameContainer: {
    marginTop: 20,
  },
  frameParent: {
    marginTop: 12,
    alignSelf: "stretch",
  },
  selectTimeParent: {
    position: "absolute",
    top: 563,
    left: 27,
    width: 332,
    height: 147,
  },
});

export default TimeSelectForm;
