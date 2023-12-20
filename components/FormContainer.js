import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const FormContainer = () => {
  return (
    <View style={styles.reasonForVisitParent}>
      <Text style={styles.reasonForVisit}>Reason for Visit</Text>
      <View style={styles.frameParent}>
        <View style={styles.initialConsultationParent}>
          <Text style={styles.initialConsultation}>Initial Consultation</Text>
          <Text style={[styles.xRayCompletionAnd, styles.july2024Typo]}>
            X-ray completion and evaluation.
          </Text>
        </View>
        <View style={styles.dateParent}>
          <Text style={styles.initialConsultation}>Date</Text>
          <Text style={styles.july2024Typo}>13 July 2024 - 10:30am</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  july2024Typo: {
    marginTop: 6,
    fontSize: FontSize.body_size,
    textAlign: "left",
    color: Color.primaryNavy1,
    fontFamily: FontFamily.boldH5,
    fontWeight: "700",
  },
  reasonForVisit: {
    fontSize: FontSize.boldH3_size,
    lineHeight: 28,
    textAlign: "left",
    color: Color.primaryNavy1,
    fontFamily: FontFamily.boldH5,
    fontWeight: "700",
    alignSelf: "stretch",
  },
  initialConsultation: {
    fontSize: FontSize.boldP2_size,
    fontFamily: FontFamily.regulerP2,
    color: Color.coolGreyCoolGrey500,
    textAlign: "left",
  },
  xRayCompletionAnd: {
    alignSelf: "stretch",
  },
  initialConsultationParent: {
    width: 328,
  },
  dateParent: {
    width: 328,
    marginTop: 12,
  },
  frameParent: {
    marginTop: 12,
    alignSelf: "stretch",
  },
  reasonForVisitParent: {
    position: "absolute",
    top: 450,
    left: 18,
    borderRadius: Border.br_xs,
    backgroundColor: Color.conditionalPopOver,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: 343,
    padding: Padding.p_xs,
  },
});

export default FormContainer;
