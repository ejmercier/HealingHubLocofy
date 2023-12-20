import React, { useMemo } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Button1 = ({
  pageTitle,
  buttonPosition,
  buttonTop,
  buttonLeft,
  buttonWidth,
  buttonHeight,
  buttonRight,
  buttonBottom,
  rectangleViewWidth,
  rectangleViewRight,
  rectangleViewLeft,
  rectangleViewBackgroundColor,
  pageTitleTop,
  pageTitleFontSize,
  pageTitleColor,
  onButtonPress,
}) => {
  const buttonStyle = useMemo(() => {
    return {
      ...getStyleValue("position", buttonPosition),
      ...getStyleValue("top", buttonTop),
      ...getStyleValue("left", buttonLeft),
      ...getStyleValue("width", buttonWidth),
      ...getStyleValue("height", buttonHeight),
      ...getStyleValue("right", buttonRight),
      ...getStyleValue("bottom", buttonBottom),
    };
  }, [
    buttonPosition,
    buttonTop,
    buttonLeft,
    buttonWidth,
    buttonHeight,
    buttonRight,
    buttonBottom,
  ]);

  const rectangleViewStyle = useMemo(() => {
    return {
      ...getStyleValue("width", rectangleViewWidth),
      ...getStyleValue("right", rectangleViewRight),
      ...getStyleValue("left", rectangleViewLeft),
      ...getStyleValue("backgroundColor", rectangleViewBackgroundColor),
    };
  }, [
    rectangleViewWidth,
    rectangleViewRight,
    rectangleViewLeft,
    rectangleViewBackgroundColor,
  ]);

  const pageTitleStyle = useMemo(() => {
    return {
      ...getStyleValue("top", pageTitleTop),
      ...getStyleValue("fontSize", pageTitleFontSize),
      ...getStyleValue("color", pageTitleColor),
    };
  }, [pageTitleTop, pageTitleFontSize, pageTitleColor]);

  return (
    <Pressable style={[styles.button, buttonStyle]} onPress={onButtonPress}>
      <View style={[styles.buttonChild, rectangleViewStyle]} />
      <Text style={[styles.pageTitle, pageTitleStyle]}>{pageTitle}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonChild: {
    height: "100%",
    width: "96.89%",
    top: "0%",
    right: "0.56%",
    bottom: "0%",
    left: "2.54%",
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorDarkkhaki,
    position: "absolute",
  },
  pageTitle: {
    width: "100%",
    top: "33.33%",
    left: "0%",
    fontSize: FontSize.size_4xl,
    fontWeight: "700",
    fontFamily: FontFamily.abhayaLibreBold,
    color: Color.conditionalPopOver,
    textAlign: "center",
    position: "absolute",
  },
  button: {
    width: 354,
    height: 60,
  },
});

export default Button1;
