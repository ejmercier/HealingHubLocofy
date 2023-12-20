import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, Border, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1DefaultState = ({
  blinkingCursor,
  blinkingCursor1,
  blinkingCursor2,
  blinkingCursor3,
  blinkingCursor4,
  blinkingCursor5,
  blinkingCursor6,
  blinkingCursor7,
  blinkingCursor8,
  blinkingCursor9,
  blinkingCursor10,
  blinkingCursor11,
  blinkingCursor12,
  blinkingCursor13,
  blinkingCursor14,
  blinkingCursor15,
  blinkingCursor16,
  blinkingCursor17,
  blinkingCursor18,
  blinkingCursor19,
  blinkingCursor20,
  blinkingCursor21,
  blinkingCursor22,
  blinkingCursor23,
  blinkingCursor24,
  blinkingCursor25,
  keyField,
  property1DefaultStatePosition,
  property1DefaultStateWidth,
  property1DefaultStateTop,
  property1DefaultStateLeft,
  property1DefaultStateMarginTop,
  keyFieldFontFamily,
  keyFieldColor,
}) => {
  const property1DefaultStateStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1DefaultStatePosition),
      ...getStyleValue("width", property1DefaultStateWidth),
      ...getStyleValue("top", property1DefaultStateTop),
      ...getStyleValue("left", property1DefaultStateLeft),
      ...getStyleValue("marginTop", property1DefaultStateMarginTop),
    };
  }, [
    property1DefaultStatePosition,
    property1DefaultStateWidth,
    property1DefaultStateTop,
    property1DefaultStateLeft,
    property1DefaultStateMarginTop,
  ]);

  const keyFieldStyle = useMemo(() => {
    return {
      ...getStyleValue("fontFamily", keyFieldFontFamily),
      ...getStyleValue("color", keyFieldColor),
    };
  }, [keyFieldFontFamily, keyFieldColor]);

  return (
    <View style={[styles.property1defaultState, property1DefaultStateStyle]}>
      <View style={styles.box} />
      <View style={styles.value}>
        <View style={[styles.view, styles.viewLayout]}>
          <Text style={[styles.valueField, styles.fieldTypo]}>{` `}</Text>
          <Image
            style={styles.blinkingCursorIcon}
            contentFit="cover"
            source={blinkingCursor}
          />
        </View>
        <View style={[styles.view1, styles.viewLayout]}>
          <Text style={[styles.valueField, styles.fieldTypo]}>{` `}</Text>
          <Image
            style={styles.blinkingCursorIcon}
            contentFit="cover"
            source={blinkingCursor1}
          />
        </View>
        <View style={[styles.view2, styles.viewLayout]}>
          <Text style={[styles.valueField, styles.fieldTypo]}>{` `}</Text>
          <Image
            style={styles.blinkingCursorIcon}
            contentFit="cover"
            source={blinkingCursor2}
          />
        </View>
        <View style={[styles.view3, styles.viewLayout]}>
          <Text style={[styles.valueField, styles.fieldTypo]}>{` `}</Text>
          <Image
            style={styles.blinkingCursorIcon}
            contentFit="cover"
            source={blinkingCursor3}
          />
        </View>
        <View style={[styles.view4, styles.viewLayout]}>
          <Text style={[styles.valueField, styles.fieldTypo]}>{` `}</Text>
          <Image
            style={styles.blinkingCursorIcon}
            contentFit="cover"
            source={blinkingCursor4}
          />
        </View>
        <View style={[styles.view5, styles.viewLayout]}>
          <Text style={[styles.valueField, styles.fieldTypo]}>{` `}</Text>
          <Image
            style={styles.blinkingCursorIcon}
            contentFit="cover"
            source={blinkingCursor5}
          />
        </View>
        <View style={[styles.view6, styles.viewLayout]}>
          <Text style={[styles.valueField, styles.fieldTypo]}>{` `}</Text>
          <Image
            style={styles.blinkingCursorIcon}
            contentFit="cover"
            source={blinkingCursor6}
          />
        </View>
        <View style={[styles.view7, styles.viewLayout]}>
          <Text style={[styles.valueField, styles.fieldTypo]}>{` `}</Text>
          <Image
            style={styles.blinkingCursorIcon}
            contentFit="cover"
            source={blinkingCursor7}
          />
        </View>
        <View style={[styles.view8, styles.viewLayout]}>
          <Text style={[styles.valueField, styles.fieldTypo]}>{` `}</Text>
          <Image
            style={styles.blinkingCursorIcon}
            contentFit="cover"
            source={blinkingCursor8}
          />
        </View>
        <View style={[styles.view9, styles.viewLayout]}>
          <Text style={[styles.valueField, styles.fieldTypo]}>{` `}</Text>
          <Image
            style={styles.blinkingCursorIcon}
            contentFit="cover"
            source={blinkingCursor9}
          />
        </View>
        <View style={[styles.view10, styles.viewLayout]}>
          <Text style={[styles.valueField, styles.fieldTypo]}>{` `}</Text>
          <Image
            style={styles.blinkingCursorIcon}
            contentFit="cover"
            source={blinkingCursor10}
          />
        </View>
        <View style={[styles.view11, styles.viewLayout]}>
          <Text style={[styles.valueField, styles.fieldTypo]}>{` `}</Text>
          <Image
            style={styles.blinkingCursorIcon}
            contentFit="cover"
            source={blinkingCursor11}
          />
        </View>
        <View style={[styles.view12, styles.viewLayout]}>
          <Text style={[styles.valueField, styles.fieldTypo]}>{` `}</Text>
          <Image
            style={styles.blinkingCursorIcon}
            contentFit="cover"
            source={blinkingCursor12}
          />
        </View>
        <View style={[styles.view13, styles.viewLayout]}>
          <Text style={[styles.valueField, styles.fieldTypo]}>{` `}</Text>
          <Image
            style={styles.blinkingCursorIcon}
            contentFit="cover"
            source={blinkingCursor13}
          />
        </View>
        <View style={[styles.view14, styles.viewLayout]}>
          <Text style={[styles.valueField, styles.fieldTypo]}>{` `}</Text>
          <Image
            style={styles.blinkingCursorIcon}
            contentFit="cover"
            source={blinkingCursor14}
          />
        </View>
        <View style={[styles.view15, styles.viewLayout]}>
          <Text style={[styles.valueField, styles.fieldTypo]}>{` `}</Text>
          <Image
            style={styles.blinkingCursorIcon}
            contentFit="cover"
            source={blinkingCursor15}
          />
        </View>
        <View style={[styles.view16, styles.viewLayout]}>
          <Text style={[styles.valueField, styles.fieldTypo]}>{` `}</Text>
          <Image
            style={styles.blinkingCursorIcon}
            contentFit="cover"
            source={blinkingCursor16}
          />
        </View>
        <View style={[styles.view17, styles.viewLayout]}>
          <Text style={[styles.valueField, styles.fieldTypo]}>{` `}</Text>
          <Image
            style={styles.blinkingCursorIcon}
            contentFit="cover"
            source={blinkingCursor17}
          />
        </View>
        <View style={[styles.view18, styles.viewLayout]}>
          <Text style={[styles.valueField, styles.fieldTypo]}>{` `}</Text>
          <Image
            style={styles.blinkingCursorIcon}
            contentFit="cover"
            source={blinkingCursor18}
          />
        </View>
        <View style={[styles.view19, styles.viewLayout]}>
          <Text style={[styles.valueField, styles.fieldTypo]}>{` `}</Text>
          <Image
            style={styles.blinkingCursorIcon}
            contentFit="cover"
            source={blinkingCursor19}
          />
        </View>
        <View style={[styles.view20, styles.viewLayout]}>
          <Text style={[styles.valueField, styles.fieldTypo]}>{` `}</Text>
          <Image
            style={styles.blinkingCursorIcon}
            contentFit="cover"
            source={blinkingCursor20}
          />
        </View>
        <View style={[styles.view21, styles.viewLayout]}>
          <Text style={[styles.valueField, styles.fieldTypo]}>{` `}</Text>
          <Image
            style={styles.blinkingCursorIcon}
            contentFit="cover"
            source={blinkingCursor21}
          />
        </View>
        <View style={[styles.view22, styles.viewLayout]}>
          <Text style={[styles.valueField, styles.fieldTypo]}>{` `}</Text>
          <Image
            style={styles.blinkingCursorIcon}
            contentFit="cover"
            source={blinkingCursor22}
          />
        </View>
        <View style={[styles.view23, styles.viewLayout]}>
          <Text style={[styles.valueField, styles.fieldTypo]}>{` `}</Text>
          <Image
            style={styles.blinkingCursorIcon}
            contentFit="cover"
            source={blinkingCursor23}
          />
        </View>
        <View style={[styles.view24, styles.viewLayout]}>
          <Text style={[styles.valueField, styles.fieldTypo]}>{` `}</Text>
          <Image
            style={styles.blinkingCursorIcon}
            contentFit="cover"
            source={blinkingCursor24}
          />
        </View>
        <View style={[styles.view25, styles.viewLayout]}>
          <Text style={[styles.valueField, styles.fieldTypo]}>{` `}</Text>
          <Image
            style={styles.blinkingCursorIcon}
            contentFit="cover"
            source={blinkingCursor25}
          />
        </View>
      </View>
      <Text style={[styles.keyField, styles.fieldTypo, keyFieldStyle]}>
        {keyField}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewLayout: {
    width: 13,
    top: 0,
    height: 15,
    backgroundColor: Color.conditionalPopOver,
    position: "absolute",
  },
  fieldTypo: {
    fontSize: FontSize.body_size,
    position: "absolute",
  },
  box: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_9xs,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_300,
    borderWidth: 1,
    backgroundColor: Color.conditionalPopOver,
    position: "absolute",
  },
  valueField: {
    top: -4,
    left: 6,
    fontFamily: FontFamily.montserratRegular,
    color: Color.labelColorLightPrimary,
    textAlign: "center",
  },
  blinkingCursorIcon: {
    top: 1,
    left: 1,
    width: 0,
    height: 13,
    position: "absolute",
  },
  view: {
    left: 289,
  },
  view1: {
    left: 277,
  },
  view2: {
    left: 265,
  },
  view3: {
    left: 253,
  },
  view4: {
    left: 241,
  },
  view5: {
    left: 229,
  },
  view6: {
    left: 217,
  },
  view7: {
    left: 205,
  },
  view8: {
    left: 193,
  },
  view9: {
    left: 181,
  },
  view10: {
    left: 169,
  },
  view11: {
    left: 157,
  },
  view12: {
    left: 145,
  },
  view13: {
    left: 133,
  },
  view14: {
    left: 121,
  },
  view15: {
    left: 109,
  },
  view16: {
    left: 98,
  },
  view17: {
    left: 87,
  },
  view18: {
    left: 76,
  },
  view19: {
    left: 65,
  },
  view20: {
    left: 54,
  },
  view21: {
    left: 43,
  },
  view22: {
    left: 32,
  },
  view23: {
    left: 21,
  },
  view24: {
    left: 10,
  },
  view25: {
    left: 0,
  },
  value: {
    top: 17,
    left: 15,
    width: 302,
    display: "none",
    height: 15,
    position: "absolute",
  },
  keyField: {
    top: "31.82%",
    left: 16,
    fontFamily: FontFamily.pTMonoRegular,
    color: Color.colorDarkslategray_100,
    textAlign: "left",
    opacity: 0.8,
  },
  property1defaultState: {
    width: 327,
    height: 44,
  },
});

export default Property1DefaultState;
