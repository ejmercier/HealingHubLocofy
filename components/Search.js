import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Search = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.search}>
      <View style={styles.preOpParent}>
        <Pressable onPress={() => navigation.navigate("PatientTab")}>
          <Text style={[styles.preOp1, styles.kidsTypo]}>Pre-op</Text>
        </Pressable>
        <Text style={[styles.postOp, styles.kidsTypo]}>Post-op</Text>
        <Text style={[styles.kids, styles.kidsTypo]}>Kids</Text>
        <Text style={[styles.teen, styles.teenTypo]}>Teen</Text>
        <Pressable
          style={styles.adult}
          onPress={() => navigation.navigate("Older")}
        >
          <Text style={styles.teenTypo}>Adult</Text>
        </Pressable>
        <Pressable
          style={styles.adult}
          onPress={() => navigation.navigate("Older")}
        >
          <Text style={[styles.tips1, styles.kidsTypo]}>Tips</Text>
        </Pressable>
      </View>
      <View style={styles.search1}>
        <View style={styles.box} />
        <View style={styles.value}>
          <View style={[styles.view, styles.viewLayout]}>
            <Text style={styles.valueField}>{` `}</Text>
            <Image
              style={styles.blinkingCursorIcon}
              contentFit="cover"
              source={require("../assets/blinking-cursor1.png")}
            />
          </View>
          <View style={[styles.view1, styles.viewLayout]}>
            <Text style={styles.valueField}>{` `}</Text>
            <Image
              style={styles.blinkingCursorIcon}
              contentFit="cover"
              source={require("../assets/blinking-cursor1.png")}
            />
          </View>
          <View style={[styles.view2, styles.viewLayout]}>
            <Text style={styles.valueField}>{` `}</Text>
            <Image
              style={styles.blinkingCursorIcon}
              contentFit="cover"
              source={require("../assets/blinking-cursor1.png")}
            />
          </View>
          <View style={[styles.view3, styles.viewLayout]}>
            <Text style={styles.valueField}>{` `}</Text>
            <Image
              style={styles.blinkingCursorIcon}
              contentFit="cover"
              source={require("../assets/blinking-cursor1.png")}
            />
          </View>
          <View style={[styles.view4, styles.viewLayout]}>
            <Text style={styles.valueField}>{` `}</Text>
            <Image
              style={styles.blinkingCursorIcon}
              contentFit="cover"
              source={require("../assets/blinking-cursor1.png")}
            />
          </View>
          <View style={[styles.view5, styles.viewLayout]}>
            <Text style={styles.valueField}>{` `}</Text>
            <Image
              style={styles.blinkingCursorIcon}
              contentFit="cover"
              source={require("../assets/blinking-cursor1.png")}
            />
          </View>
          <View style={[styles.view6, styles.viewLayout]}>
            <Text style={styles.valueField}>{` `}</Text>
            <Image
              style={styles.blinkingCursorIcon}
              contentFit="cover"
              source={require("../assets/blinking-cursor1.png")}
            />
          </View>
          <View style={[styles.view7, styles.viewLayout]}>
            <Text style={styles.valueField}>{` `}</Text>
            <Image
              style={styles.blinkingCursorIcon}
              contentFit="cover"
              source={require("../assets/blinking-cursor1.png")}
            />
          </View>
          <View style={[styles.view8, styles.viewLayout]}>
            <Text style={styles.valueField}>{` `}</Text>
            <Image
              style={styles.blinkingCursorIcon}
              contentFit="cover"
              source={require("../assets/blinking-cursor1.png")}
            />
          </View>
          <View style={[styles.view9, styles.viewLayout]}>
            <Text style={styles.valueField}>{` `}</Text>
            <Image
              style={styles.blinkingCursorIcon}
              contentFit="cover"
              source={require("../assets/blinking-cursor1.png")}
            />
          </View>
          <View style={[styles.view10, styles.viewLayout]}>
            <Text style={styles.valueField}>{` `}</Text>
            <Image
              style={styles.blinkingCursorIcon}
              contentFit="cover"
              source={require("../assets/blinking-cursor1.png")}
            />
          </View>
          <View style={[styles.view11, styles.viewLayout]}>
            <Text style={styles.valueField}>{` `}</Text>
            <Image
              style={styles.blinkingCursorIcon}
              contentFit="cover"
              source={require("../assets/blinking-cursor1.png")}
            />
          </View>
          <View style={[styles.view12, styles.viewLayout]}>
            <Text style={styles.valueField}>{` `}</Text>
            <Image
              style={styles.blinkingCursorIcon}
              contentFit="cover"
              source={require("../assets/blinking-cursor1.png")}
            />
          </View>
          <View style={[styles.view13, styles.viewLayout]}>
            <Text style={styles.valueField}>{` `}</Text>
            <Image
              style={styles.blinkingCursorIcon}
              contentFit="cover"
              source={require("../assets/blinking-cursor1.png")}
            />
          </View>
          <View style={[styles.view14, styles.viewLayout]}>
            <Text style={styles.valueField}>{` `}</Text>
            <Image
              style={styles.blinkingCursorIcon}
              contentFit="cover"
              source={require("../assets/blinking-cursor1.png")}
            />
          </View>
          <View style={[styles.view15, styles.viewLayout]}>
            <Text style={styles.valueField}>{` `}</Text>
            <Image
              style={styles.blinkingCursorIcon}
              contentFit="cover"
              source={require("../assets/blinking-cursor1.png")}
            />
          </View>
          <View style={[styles.view16, styles.viewLayout]}>
            <Text style={styles.valueField}>{` `}</Text>
            <Image
              style={styles.blinkingCursorIcon}
              contentFit="cover"
              source={require("../assets/blinking-cursor1.png")}
            />
          </View>
          <View style={[styles.view17, styles.viewLayout]}>
            <Text style={styles.valueField}>{` `}</Text>
            <Image
              style={styles.blinkingCursorIcon}
              contentFit="cover"
              source={require("../assets/blinking-cursor1.png")}
            />
          </View>
          <View style={[styles.view18, styles.viewLayout]}>
            <Text style={styles.valueField}>{` `}</Text>
            <Image
              style={styles.blinkingCursorIcon}
              contentFit="cover"
              source={require("../assets/blinking-cursor1.png")}
            />
          </View>
          <View style={[styles.view19, styles.viewLayout]}>
            <Text style={styles.valueField}>{` `}</Text>
            <Image
              style={styles.blinkingCursorIcon}
              contentFit="cover"
              source={require("../assets/blinking-cursor1.png")}
            />
          </View>
          <View style={[styles.view20, styles.viewLayout]}>
            <Text style={styles.valueField}>{` `}</Text>
            <Image
              style={styles.blinkingCursorIcon}
              contentFit="cover"
              source={require("../assets/blinking-cursor1.png")}
            />
          </View>
          <View style={[styles.view21, styles.viewLayout]}>
            <Text style={styles.valueField}>{` `}</Text>
            <Image
              style={styles.blinkingCursorIcon}
              contentFit="cover"
              source={require("../assets/blinking-cursor1.png")}
            />
          </View>
          <View style={[styles.view22, styles.viewLayout]}>
            <Text style={styles.valueField}>{` `}</Text>
            <Image
              style={styles.blinkingCursorIcon}
              contentFit="cover"
              source={require("../assets/blinking-cursor1.png")}
            />
          </View>
          <View style={[styles.view23, styles.viewLayout]}>
            <Text style={styles.valueField}>{` `}</Text>
            <Image
              style={styles.blinkingCursorIcon}
              contentFit="cover"
              source={require("../assets/blinking-cursor1.png")}
            />
          </View>
          <View style={[styles.view24, styles.viewLayout]}>
            <Text style={styles.valueField}>{` `}</Text>
            <Image
              style={styles.blinkingCursorIcon}
              contentFit="cover"
              source={require("../assets/blinking-cursor1.png")}
            />
          </View>
          <View style={[styles.view25, styles.viewLayout]}>
            <Text style={styles.valueField}>{` `}</Text>
            <Image
              style={styles.blinkingCursorIcon}
              contentFit="cover"
              source={require("../assets/blinking-cursor1.png")}
            />
          </View>
        </View>
        <Text style={[styles.keyField, styles.search2FlexBox]}>Name</Text>
      </View>
      <View style={[styles.searchChild, styles.searchChildLayout]} />
      <View style={[styles.searchItem, styles.searchPosition]} />
      <View style={[styles.searchInner, styles.searchPosition]} />
      <View style={[styles.lineView, styles.searchPosition]} />
      <View style={[styles.searchChild1, styles.searchChildLayout]} />
      <View style={[styles.searchChild2, styles.searchChildLayout]} />
      <View style={[styles.searchChild3, styles.searchChildLayout]} />
      <Text style={[styles.search2, styles.search2FlexBox]}>Search</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  kidsTypo: {
    color: Color.colorLightslategray,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  teenTypo: {
    height: 16,
    width: 68,
    textAlign: "center",
    color: Color.colorLightslategray,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 15,
    fontSize: FontSize.boldP2_size,
  },
  viewLayout: {
    width: 13,
    top: 0,
    height: 15,
    backgroundColor: Color.conditionalPopOver,
    position: "absolute",
  },
  search2FlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  searchChildLayout: {
    height: 1,
    width: 145,
    borderTopWidth: 1,
    borderColor: Color.colorDimgray_300,
    borderStyle: "solid",
    position: "absolute",
  },
  searchPosition: {
    left: -2,
    height: 1,
    width: 145,
    borderTopWidth: 1,
    borderColor: Color.colorDimgray_300,
    borderStyle: "solid",
    position: "absolute",
  },
  preOp1: {
    width: 72,
    textAlign: "center",
    lineHeight: 15,
    fontSize: FontSize.boldP2_size,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  postOp: {
    width: 76,
    marginTop: 10,
    textAlign: "center",
    lineHeight: 15,
    fontSize: FontSize.boldP2_size,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  kids: {
    width: 67,
    height: 13,
    marginTop: 10,
    textAlign: "center",
    lineHeight: 15,
    fontSize: FontSize.boldP2_size,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  teen: {
    marginTop: 10,
  },
  adult: {
    marginTop: 10,
  },
  tips1: {
    width: 70,
    height: 24,
    textAlign: "center",
    lineHeight: 15,
    fontSize: FontSize.boldP2_size,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  preOpParent: {
    marginTop: -37,
    marginLeft: -48,
    top: "50%",
    left: "50%",
    width: 102,
    height: 150,
    paddingHorizontal: 11,
    paddingVertical: 0,
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
    borderColor: Color.colorGainsboro_300,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.conditionalPopOver,
    position: "absolute",
  },
  valueField: {
    top: -4,
    left: 6,
    fontFamily: FontFamily.montserratRegular,
    color: Color.labelColorLightPrimary,
    fontSize: FontSize.body_size,
    textAlign: "center",
    position: "absolute",
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
    top: "31.79%",
    left: 16,
    fontFamily: FontFamily.pTMonoRegular,
    color: Color.colorDarkslategray_100,
    opacity: 0.8,
    fontSize: FontSize.body_size,
    display: "none",
  },
  search1: {
    top: 42,
    width: 125,
    height: 28,
    left: 10,
    position: "absolute",
  },
  searchChild: {
    top: 107,
    left: -1,
    height: 1,
    width: 145,
    borderTopWidth: 1,
    borderColor: Color.colorDimgray_300,
  },
  searchItem: {
    top: 132,
  },
  searchInner: {
    top: 156,
  },
  lineView: {
    top: 180,
  },
  searchChild1: {
    top: 207,
    left: -1,
    height: 1,
    width: 145,
    borderTopWidth: 1,
    borderColor: Color.colorDimgray_300,
  },
  searchChild2: {
    top: 234,
    left: -4,
  },
  searchChild3: {
    top: 81,
    left: -1,
    height: 1,
    width: 145,
    borderTopWidth: 1,
    borderColor: Color.colorDimgray_300,
  },
  search2: {
    top: 51,
    left: 24,
    fontSize: FontSize.semiBoldP4_size,
    lineHeight: 11,
    color: Color.colorLightslategray,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  search: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorPalegoldenrod_200,
    width: 144,
    height: 250,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default Search;
