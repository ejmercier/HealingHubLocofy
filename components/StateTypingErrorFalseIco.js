import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import StateDefaultErrorFalseIc from "./StateDefaultErrorFalseIc";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StateTypingErrorFalseIco = ({
  exclamation,
  iconLeft,
  emailAddress,
  arrowDown,
  stateTypingErrorFalseIcoPosition,
  stateTypingErrorFalseIcoWidth,
  stateTypingErrorFalseIcoHeight,
  stateTypingErrorFalseIcoTop,
  stateTypingErrorFalseIcoLeft,
  selectedShapeWidth,
  selectedShapeRight,
  selectedShapeLeft,
  arrowDownIconOverflow,
}) => {
  const stateTypingErrorFalseIcoStyle = useMemo(() => {
    return {
      ...getStyleValue("position", stateTypingErrorFalseIcoPosition),
      ...getStyleValue("width", stateTypingErrorFalseIcoWidth),
      ...getStyleValue("height", stateTypingErrorFalseIcoHeight),
      ...getStyleValue("top", stateTypingErrorFalseIcoTop),
      ...getStyleValue("left", stateTypingErrorFalseIcoLeft),
    };
  }, [
    stateTypingErrorFalseIcoPosition,
    stateTypingErrorFalseIcoWidth,
    stateTypingErrorFalseIcoHeight,
    stateTypingErrorFalseIcoTop,
    stateTypingErrorFalseIcoLeft,
  ]);

  const selectedShapeStyle = useMemo(() => {
    return {
      ...getStyleValue("width", selectedShapeWidth),
      ...getStyleValue("right", selectedShapeRight),
      ...getStyleValue("left", selectedShapeLeft),
    };
  }, [selectedShapeWidth, selectedShapeRight, selectedShapeLeft]);

  const arrowDownIconStyle = useMemo(() => {
    return {
      ...getStyleValue("overflow", arrowDownIconOverflow),
    };
  }, [arrowDownIconOverflow]);

  return (
    <View
      style={[styles.statetypingErrorfalseIco, stateTypingErrorFalseIcoStyle]}
    >
      <StateDefaultErrorFalseIc
        exclamation={require("../assets/exclamation.png")}
        iconLeft={require("../assets/icon-left.png")}
        emailAddress="machie"
        arrowDown={require("../assets/arrow-down.png")}
        selectedShape
        indicatorRight
        showArrowDownIcon
        stateDefaultErrorFalseIcPosition="absolute"
        stateDefaultErrorFalseIcHeight="100%"
        stateDefaultErrorFalseIcWidth="100%"
        stateDefaultErrorFalseIcTop="0%"
        stateDefaultErrorFalseIcRight="0%"
        stateDefaultErrorFalseIcBottom="0%"
        stateDefaultErrorFalseIcLeft="0%"
        selectedShapeWidth="101.6%"
        selectedShapeRight="-0.8%"
        selectedShapeLeft="-0.8%"
        fieldBorderColor="#111113"
        emailAddressColor="#111113"
        arrowDownIconOverflow="unset"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  statetypingErrorfalseIco: {
    width: 375,
    height: 48,
  },
});

export default StateTypingErrorFalseIco;
