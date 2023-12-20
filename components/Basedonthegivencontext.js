import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import Property1DefaultState from "./Property1DefaultState";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const Basedonthegivencontext = () => {
  return (
    <View style={styles.frameParent}>
      <View>
        <View style={styles.formElement}>
          <View style={styles.labelParent}>
            <Text style={[styles.label, styles.labelTypo]}>
              Reason for Visit
            </Text>
            <Text style={[styles.text, styles.textTypo]}>*</Text>
          </View>
          <View style={[styles.inputType, styles.inputSpaceBlock]}>
            <View style={styles.iconEmailParent}>
              <Image
                style={[styles.iconEmail, styles.iconCommon]}
                contentFit="cover"
                source={require("../assets/icon--email.png")}
              />
              <Text style={[styles.placeholder, styles.placeholderTypo]}>
                Select
              </Text>
              <Image
                style={[styles.chevronDownIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/chevrondown.png")}
              />
            </View>
          </View>
        </View>
        <View
          style={[
            styles.bxcurrentLocationParent,
            styles.formElement1SpaceBlock,
          ]}
        >
          <Image
            style={[styles.bxcurrentLocationIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/bxcurrentlocation.png")}
          />
          <Text style={[styles.drHahnMay, styles.labelTypo]}>
            Dr. Hahn may contact you requesting additional information based on
            your response.
          </Text>
        </View>
      </View>
      <View style={styles.formElement1SpaceBlock}>
        <View style={styles.labelParent}>
          <Text style={[styles.label, styles.labelTypo]}>Email</Text>
          <Text style={[styles.text, styles.textTypo]}>*</Text>
        </View>
        <View style={[styles.inputType1, styles.inputBorder]}>
          <Text style={styles.placeholderTypo} />
        </View>
      </View>
      <Property1DefaultState
        blinkingCursor={require("../assets/blinking-cursor1.png")}
        blinkingCursor1={require("../assets/blinking-cursor1.png")}
        blinkingCursor2={require("../assets/blinking-cursor1.png")}
        blinkingCursor3={require("../assets/blinking-cursor1.png")}
        blinkingCursor4={require("../assets/blinking-cursor1.png")}
        blinkingCursor5={require("../assets/blinking-cursor1.png")}
        blinkingCursor6={require("../assets/blinking-cursor1.png")}
        blinkingCursor7={require("../assets/blinking-cursor1.png")}
        blinkingCursor8={require("../assets/blinking-cursor1.png")}
        blinkingCursor9={require("../assets/blinking-cursor1.png")}
        blinkingCursor10={require("../assets/blinking-cursor1.png")}
        blinkingCursor11={require("../assets/blinking-cursor1.png")}
        blinkingCursor12={require("../assets/blinking-cursor1.png")}
        blinkingCursor13={require("../assets/blinking-cursor1.png")}
        blinkingCursor14={require("../assets/blinking-cursor1.png")}
        blinkingCursor15={require("../assets/blinking-cursor1.png")}
        blinkingCursor16={require("../assets/blinking-cursor1.png")}
        blinkingCursor17={require("../assets/blinking-cursor1.png")}
        blinkingCursor18={require("../assets/blinking-cursor1.png")}
        blinkingCursor19={require("../assets/blinking-cursor1.png")}
        blinkingCursor20={require("../assets/blinking-cursor1.png")}
        blinkingCursor21={require("../assets/blinking-cursor1.png")}
        blinkingCursor22={require("../assets/blinking-cursor1.png")}
        blinkingCursor23={require("../assets/blinking-cursor1.png")}
        blinkingCursor24={require("../assets/blinking-cursor1.png")}
        blinkingCursor25={require("../assets/blinking-cursor1.png")}
        keyField="Email"
        property1DefaultStatePosition="relative"
        property1DefaultStateWidth={311}
        property1DefaultStateTop="unset"
        property1DefaultStateLeft="unset"
        property1DefaultStateMarginTop={12}
        keyFieldFontFamily="Mulish-Regular"
        keyFieldColor="#d1d5db"
      />
      <View style={styles.formElement1SpaceBlock}>
        <View style={styles.labelParent}>
          <Text style={[styles.label, styles.labelTypo]}>Mobile Phone</Text>
          <Text style={[styles.text2, styles.textTypo]}>*</Text>
        </View>
        <View style={[styles.inputType2, styles.inputBorder]}>
          <View style={styles.iconEmailParent}>
            <Image
              style={[styles.iconEmail, styles.iconCommon]}
              contentFit="cover"
              source={require("../assets/indonesia.png")}
            />
            <Text style={styles.text3}>+1</Text>
            <Text style={[styles.placeholder, styles.placeholderTypo]}>
              812-3456-7890
            </Text>
          </View>
        </View>
      </View>
      <Property1DefaultState
        blinkingCursor={require("../assets/blinking-cursor1.png")}
        blinkingCursor1={require("../assets/blinking-cursor1.png")}
        blinkingCursor2={require("../assets/blinking-cursor1.png")}
        blinkingCursor3={require("../assets/blinking-cursor1.png")}
        blinkingCursor4={require("../assets/blinking-cursor1.png")}
        blinkingCursor5={require("../assets/blinking-cursor1.png")}
        blinkingCursor6={require("../assets/blinking-cursor1.png")}
        blinkingCursor7={require("../assets/blinking-cursor1.png")}
        blinkingCursor8={require("../assets/blinking-cursor1.png")}
        blinkingCursor9={require("../assets/blinking-cursor1.png")}
        blinkingCursor10={require("../assets/blinking-cursor1.png")}
        blinkingCursor11={require("../assets/blinking-cursor1.png")}
        blinkingCursor12={require("../assets/blinking-cursor1.png")}
        blinkingCursor13={require("../assets/blinking-cursor1.png")}
        blinkingCursor14={require("../assets/blinking-cursor1.png")}
        blinkingCursor15={require("../assets/blinking-cursor1.png")}
        blinkingCursor16={require("../assets/blinking-cursor1.png")}
        blinkingCursor17={require("../assets/blinking-cursor1.png")}
        blinkingCursor18={require("../assets/blinking-cursor1.png")}
        blinkingCursor19={require("../assets/blinking-cursor1.png")}
        blinkingCursor20={require("../assets/blinking-cursor1.png")}
        blinkingCursor21={require("../assets/blinking-cursor1.png")}
        blinkingCursor22={require("../assets/blinking-cursor1.png")}
        blinkingCursor23={require("../assets/blinking-cursor1.png")}
        blinkingCursor24={require("../assets/blinking-cursor1.png")}
        blinkingCursor25={require("../assets/blinking-cursor1.png")}
        keyField="Phone"
        property1DefaultStatePosition="relative"
        property1DefaultStateWidth={311}
        property1DefaultStateTop="unset"
        property1DefaultStateLeft="unset"
        property1DefaultStateMarginTop={12}
        keyFieldFontFamily="Mulish-Regular"
        keyFieldColor="#d1d5db"
      />
      <View style={styles.formElement1SpaceBlock}>
        <View style={styles.labelParent}>
          <Text style={[styles.label, styles.labelTypo]}>Symptoms</Text>
          <Text style={[styles.text, styles.textTypo]}>*</Text>
        </View>
        <View style={[styles.inputType3, styles.iconCommon]}>
          <View style={styles.iconEmailParent}>
            <Image
              style={[styles.iconEmail, styles.iconCommon]}
              contentFit="cover"
              source={require("../assets/icon--email.png")}
            />
            <Text style={[styles.placeholder, styles.placeholderTypo]}>
              Write here
            </Text>
            <Image
              style={[styles.chevronDownIcon1, styles.iconCommon]}
              contentFit="cover"
              source={require("../assets/chevrondown.png")}
            />
          </View>
        </View>
      </View>
      <Property1DefaultState
        blinkingCursor={require("../assets/blinking-cursor1.png")}
        blinkingCursor1={require("../assets/blinking-cursor1.png")}
        blinkingCursor2={require("../assets/blinking-cursor1.png")}
        blinkingCursor3={require("../assets/blinking-cursor1.png")}
        blinkingCursor4={require("../assets/blinking-cursor1.png")}
        blinkingCursor5={require("../assets/blinking-cursor1.png")}
        blinkingCursor6={require("../assets/blinking-cursor1.png")}
        blinkingCursor7={require("../assets/blinking-cursor1.png")}
        blinkingCursor8={require("../assets/blinking-cursor1.png")}
        blinkingCursor9={require("../assets/blinking-cursor1.png")}
        blinkingCursor10={require("../assets/blinking-cursor1.png")}
        blinkingCursor11={require("../assets/blinking-cursor1.png")}
        blinkingCursor12={require("../assets/blinking-cursor1.png")}
        blinkingCursor13={require("../assets/blinking-cursor1.png")}
        blinkingCursor14={require("../assets/blinking-cursor1.png")}
        blinkingCursor15={require("../assets/blinking-cursor1.png")}
        blinkingCursor16={require("../assets/blinking-cursor1.png")}
        blinkingCursor17={require("../assets/blinking-cursor1.png")}
        blinkingCursor18={require("../assets/blinking-cursor1.png")}
        blinkingCursor19={require("../assets/blinking-cursor1.png")}
        blinkingCursor20={require("../assets/blinking-cursor1.png")}
        blinkingCursor21={require("../assets/blinking-cursor1.png")}
        blinkingCursor22={require("../assets/blinking-cursor1.png")}
        blinkingCursor23={require("../assets/blinking-cursor1.png")}
        blinkingCursor24={require("../assets/blinking-cursor1.png")}
        blinkingCursor25={require("../assets/blinking-cursor1.png")}
        keyField="Response"
        property1DefaultStatePosition="relative"
        property1DefaultStateWidth={311}
        property1DefaultStateTop="unset"
        property1DefaultStateLeft="unset"
        property1DefaultStateMarginTop={12}
        keyFieldFontFamily="Mulish-Regular"
        keyFieldColor="#d1d5db"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  labelTypo: {
    textAlign: "left",
    fontFamily: FontFamily.semiBoldH6,
    fontWeight: "600",
  },
  textTypo: {
    color: Color.themePrimaryRed,
    lineHeight: 22,
    textAlign: "left",
    fontSize: FontSize.body_size,
  },
  inputSpaceBlock: {
    marginTop: 8,
    paddingBottom: Padding.p_3xs,
    paddingRight: Padding.p_xs,
    paddingTop: Padding.p_3xs,
    paddingLeft: Padding.p_xl,
    justifyContent: "center",
    height: 40,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    backgroundColor: Color.conditionalPopOver,
    alignSelf: "stretch",
    borderRadius: Border.br_7xs,
    flexDirection: "row",
  },
  iconCommon: {
    display: "none",
    overflow: "hidden",
  },
  placeholderTypo: {
    color: Color.neutralColorCoolGrey300,
    fontFamily: FontFamily.regulerP2,
    textAlign: "left",
    fontSize: FontSize.body_size,
  },
  iconLayout: {
    height: 20,
    width: 20,
  },
  formElement1SpaceBlock: {
    marginTop: 12,
    width: 343,
  },
  inputBorder: {
    paddingVertical: Padding.p_3xs,
    display: "none",
    marginTop: 8,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    backgroundColor: Color.conditionalPopOver,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  label: {
    color: Color.neutralColorCoolGrey600,
    fontSize: FontSize.body_size,
    textAlign: "left",
    fontFamily: FontFamily.semiBoldH6,
    fontWeight: "600",
  },
  text: {
    fontFamily: FontFamily.desktopRegulerH5,
  },
  labelParent: {
    flexDirection: "row",
  },
  iconEmail: {
    height: 20,
    width: 20,
  },
  placeholder: {
    marginLeft: 8,
    flex: 1,
  },
  chevronDownIcon: {
    marginLeft: 8,
    overflow: "hidden",
  },
  iconEmailParent: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
  },
  inputType: {
    overflow: "hidden",
  },
  formElement: {
    width: 343,
  },
  bxcurrentLocationIcon: {
    overflow: "hidden",
  },
  drHahnMay: {
    fontSize: FontSize.size_smi,
    color: Color.colorForestgreen,
    marginLeft: 8,
    flex: 1,
    textAlign: "left",
    fontFamily: FontFamily.semiBoldH6,
    fontWeight: "600",
  },
  bxcurrentLocationParent: {
    flexDirection: "row",
  },
  inputType1: {
    paddingHorizontal: Padding.p_xl,
    borderRadius: Border.br_7xs,
    paddingVertical: Padding.p_3xs,
  },
  text2: {
    fontFamily: FontFamily.body14Regular,
  },
  text3: {
    marginLeft: 8,
    fontFamily: FontFamily.regulerP2,
    textAlign: "left",
    color: Color.neutralColorCoolGrey600,
    fontSize: FontSize.body_size,
  },
  inputType2: {
    borderRadius: Border.br_11xs,
    height: 42,
    paddingHorizontal: Padding.p_xs,
  },
  chevronDownIcon1: {
    marginLeft: 8,
    height: 20,
    width: 20,
  },
  inputType3: {
    marginTop: 8,
    paddingBottom: Padding.p_3xs,
    paddingRight: Padding.p_xs,
    paddingTop: Padding.p_3xs,
    paddingLeft: Padding.p_xl,
    justifyContent: "center",
    height: 40,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    backgroundColor: Color.conditionalPopOver,
    alignSelf: "stretch",
    borderRadius: Border.br_7xs,
    flexDirection: "row",
  },
  frameParent: {
    position: "absolute",
    top: 168,
    left: 24,
  },
});

export default Basedonthegivencontext;
