import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const WaitScreen = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.waitScreen}
      onPress={() => navigation.navigate("PickCommunity")}
    >
      <View style={styles.statusBarIphone1313Pr}>
        <Image
          style={styles.notchIcon}
          contentFit="cover"
          source={require("../assets/notch.png")}
        />
        <View style={[styles.rightSide, styles.iconPosition]}>
          <Image
            style={[styles.batteryIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/battery.png")}
          />
          <Image
            style={[styles.wifiIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={[styles.mobileSignalIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/mobile-signal.png")}
          />
        </View>
        <View style={[styles.leftSide, styles.timeLayout]}>
          <View style={[styles.time, styles.timeLayout]}>
            <Text style={[styles.text, styles.textFlexBox]}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={[styles.wrapperEllipse3, styles.wrapperFlexBox]}>
        <Image
          style={styles.wrapperChildPosition}
          contentFit="cover"
          source={require("../assets/ellipse-3.png")}
        />
      </View>
      <View style={[styles.wrapperEllipse4, styles.wrapperFlexBox]}>
        <Image
          style={styles.wrapperChildPosition}
          contentFit="cover"
          source={require("../assets/ellipse-4.png")}
        />
      </View>
      <Text style={[styles.pageTitle, styles.textFlexBox]}>
        Yay! Getting you setup
      </Text>
      <Image
        style={[styles.frameIcon, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/frame13.png")}
      />
      <Image
        style={[styles.svg6449Icon, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/svg64491.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    height: 11,
    left: "50%",
    position: "absolute",
  },
  timeLayout: {
    height: 21,
    width: 54,
    left: "50%",
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    position: "absolute",
  },
  wrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    height: 175,
    width: 194,
    position: "absolute",
  },
  iconPosition1: {
    position: "absolute",
    overflow: "hidden",
  },
  notchIcon: {
    marginLeft: -81.5,
    top: -2,
    width: 164,
    height: 31,
    display: "none",
    left: "50%",
    position: "absolute",
  },
  batteryIcon: {
    marginLeft: 8.95,
    width: 24,
    top: 0,
  },
  wifiIcon: {
    marginLeft: -11.35,
    width: 15,
    top: 0,
  },
  mobileSignalIcon: {
    marginLeft: -33.35,
    width: 17,
    top: 0,
  },
  rightSide: {
    marginLeft: 104.2,
    top: 17,
    width: 67,
  },
  text: {
    top: 1,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.sFUIText,
    height: 20,
    width: 54,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    left: 0,
  },
  time: {
    marginLeft: -27,
    borderRadius: Border.br_5xl,
    top: 0,
  },
  leftSide: {
    marginLeft: -166.5,
    top: 12,
  },
  statusBarIphone1313Pr: {
    width: 383,
    height: 44,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  wrapperChildPosition: {
    transform: [
      {
        scale: 1.046,
      },
    ],
    top: 4,
    objectFit: "contain",
    height: "100%",
    left: 0,
    position: "absolute",
    width: "100%",
  },
  wrapperEllipse3: {
    top: 343,
    left: 87,
  },
  wrapperEllipse4: {
    top: 369,
    left: 108,
  },
  pageTitle: {
    top: 571,
    left: 41,
    fontSize: FontSize.size_4xl,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    width: 284,
    height: 36,
  },
  frameIcon: {
    top: 568,
    left: 313,
    width: 39,
    height: 39,
  },
  svg6449Icon: {
    top: 406,
    left: 153,
    width: 112,
    height: 112,
  },
  waitScreen: {
    backgroundColor: Color.conditionalPopOver,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default WaitScreen;
