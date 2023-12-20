import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StateDefaultErrorFalseIc = ({
  exclamation,
  iconLeft,
  emailAddress,
  arrowDown,
  selectedShape,
  indicatorRight,
  showArrowDownIcon,
  stateDefaultErrorFalseIcPosition,
  stateDefaultErrorFalseIcHeight,
  stateDefaultErrorFalseIcWidth,
  stateDefaultErrorFalseIcTop,
  stateDefaultErrorFalseIcRight,
  stateDefaultErrorFalseIcBottom,
  stateDefaultErrorFalseIcLeft,
  selectedShapeWidth,
  selectedShapeRight,
  selectedShapeLeft,
  fieldBorderColor,
  emailAddressColor,
  arrowDownIconOverflow,
}) => {
  const stateDefaultErrorFalseIcStyle = useMemo(() => {
    return {
      ...getStyleValue("position", stateDefaultErrorFalseIcPosition),
      ...getStyleValue("height", stateDefaultErrorFalseIcHeight),
      ...getStyleValue("width", stateDefaultErrorFalseIcWidth),
      ...getStyleValue("top", stateDefaultErrorFalseIcTop),
      ...getStyleValue("right", stateDefaultErrorFalseIcRight),
      ...getStyleValue("bottom", stateDefaultErrorFalseIcBottom),
      ...getStyleValue("left", stateDefaultErrorFalseIcLeft),
    };
  }, [
    stateDefaultErrorFalseIcPosition,
    stateDefaultErrorFalseIcHeight,
    stateDefaultErrorFalseIcWidth,
    stateDefaultErrorFalseIcTop,
    stateDefaultErrorFalseIcRight,
    stateDefaultErrorFalseIcBottom,
    stateDefaultErrorFalseIcLeft,
  ]);

  const selectedShapeStyle = useMemo(() => {
    return {
      ...getStyleValue("width", selectedShapeWidth),
      ...getStyleValue("right", selectedShapeRight),
      ...getStyleValue("left", selectedShapeLeft),
    };
  }, [selectedShapeWidth, selectedShapeRight, selectedShapeLeft]);

  const fieldStyle = useMemo(() => {
    return {
      ...getStyleValue("borderColor", fieldBorderColor),
    };
  }, [fieldBorderColor]);

  const emailAddressStyle = useMemo(() => {
    return {
      ...getStyleValue("color", emailAddressColor),
    };
  }, [emailAddressColor]);

  const arrowDownIconStyle = useMemo(() => {
    return {
      ...getStyleValue("overflow", arrowDownIconOverflow),
    };
  }, [arrowDownIconOverflow]);

  return (
    <View
      style={[styles.statedefaultErrorfalseIc, stateDefaultErrorFalseIcStyle]}
    >
      {!selectedShape && (
        <View
          style={[styles.selectedShape, styles.fieldBorder, selectedShapeStyle]}
        />
      )}
      <View style={[styles.message, styles.fieldFlexBox]}>
        <Image
          style={styles.exclamationIcon}
          contentFit="cover"
          source={exclamation}
        />
        <Text style={[styles.message1, styles.message1Typo]}>Message</Text>
      </View>
      <View style={[styles.field, styles.fieldFlexBox, fieldStyle]}>
        <Image
          style={[styles.iconLeft, styles.iconLayout]}
          contentFit="cover"
          source={iconLeft}
        />
        <View style={[styles.indicator, styles.indicatorLayout]} />
        <Text
          style={[styles.emailAddress, styles.message1Typo, emailAddressStyle]}
        >
          {emailAddress}
        </Text>
        {!indicatorRight && (
          <View style={[styles.indicatorRight, styles.spacerLayout]} />
        )}
        <View style={[styles.spacer, styles.spacerLayout]} />
        {showArrowDownIcon && (
          <Image
            style={[
              styles.arrowDownIcon,
              styles.iconLayout,
              arrowDownIconStyle,
            ]}
            contentFit="cover"
            source={arrowDown}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fieldBorder: {
    borderColor: Color.black20,
    borderStyle: "solid",
    borderRadius: Border.br_9xs,
  },
  fieldFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  message1Typo: {
    textAlign: "left",
    color: Color.black60,
    fontFamily: FontFamily.body,
  },
  iconLayout: {
    height: 18,
    display: "none",
  },
  indicatorLayout: {
    width: 1,
    backgroundColor: Color.black,
    display: "none",
  },
  spacerLayout: {
    height: 22,
    borderRadius: Border.br_12xs,
  },
  selectedShape: {
    width: "101.6%",
    top: -3,
    right: "-0.8%",
    left: "-0.8%",
    borderWidth: 3,
    height: 54,
    display: "none",
    position: "absolute",
    borderStyle: "solid",
    borderRadius: Border.br_9xs,
  },
  exclamationIcon: {
    width: 13,
    height: 13,
    overflow: "hidden",
    display: "none",
  },
  message1: {
    fontSize: FontSize.label_size,
    lineHeight: 14,
    marginLeft: 3,
  },
  message: {
    top: 56,
    left: 0,
    display: "none",
  },
  iconLeft: {
    width: 26,
  },
  indicator: {
    alignSelf: "stretch",
    borderRadius: Border.br_12xs,
    width: 1,
    backgroundColor: Color.black,
  },
  emailAddress: {
    fontSize: FontSize.body_size,
    lineHeight: 22,
  },
  indicatorRight: {
    width: 1,
    backgroundColor: Color.black,
    display: "none",
  },
  spacer: {
    flex: 1,
  },
  arrowDownIcon: {
    width: 18,
  },
  field: {
    width: "100%",
    top: 0,
    right: "0%",
    left: "0%",
    borderWidth: 1,
    alignItems: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_smi,
    overflow: "hidden",
    borderColor: Color.black20,
    borderStyle: "solid",
    borderRadius: Border.br_9xs,
    height: 48,
  },
  statedefaultErrorfalseIc: {
    width: 375,
    height: 48,
  },
});

export default StateDefaultErrorFalseIc;
