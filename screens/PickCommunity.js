import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TimeContainer4 from "../components/TimeContainer4";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const PickCommunity = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pickCommunity}>
      <Image
        style={styles.frameIcon}
        contentFit="cover"
        source={require("../assets/frame.png")}
      />
      <Text style={styles.pageTitle}>Join a community!</Text>
      <View style={[styles.bttomBar, styles.bttomBarPosition]}>
        <View style={[styles.frameParent, styles.frameParentFlexBox]}>
          <Image
            style={styles.frameIcon1}
            contentFit="cover"
            source={require("../assets/frame1.png")}
          />
          <Image
            style={[styles.frameIcon2, styles.frameIcon2SpaceBlock]}
            contentFit="cover"
            source={require("../assets/frame2.png")}
          />
          <View
            style={[
              styles.vuesaxlinearmessageWrapper,
              styles.frameIcon2SpaceBlock,
            ]}
          >
            <Image
              style={styles.vuesaxlinearmessageIcon}
              contentFit="cover"
              source={require("../assets/vuesaxlinearmessage.png")}
            />
          </View>
          <Pressable
            style={[
              styles.vuesaxlinearmessageWrapper,
              styles.frameIcon2SpaceBlock,
            ]}
            onPress={() => navigation.navigate("UserProfile")}
          >
            <Image
              style={styles.vuesaxlinearmessageIcon}
              contentFit="cover"
              source={require("../assets/vuesaxlinearprofile.png")}
            />
          </Pressable>
        </View>
      </View>
      <TimeContainer4 />
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
        <Pressable
          style={[styles.leftSide, styles.timeLayout]}
          onPress={() => navigation.navigate("Chosen")}
        >
          <View style={[styles.time, styles.timeLayout]}>
            <Text style={styles.text}>9:41</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bttomBarPosition: {
    width: 390,
    bottom: 0,
    position: "absolute",
  },
  frameParentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  frameIcon2SpaceBlock: {
    marginLeft: 50,
    overflow: "hidden",
  },
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
  frameIcon: {
    top: 92,
    left: 46,
    width: 36,
    height: 36,
    position: "absolute",
    overflow: "hidden",
  },
  pageTitle: {
    top: 131,
    fontSize: FontSize.size_4xl,
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    width: 284,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    left: 0,
    height: 36,
    position: "absolute",
  },
  frameIcon1: {
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  frameIcon2: {
    width: 38,
    height: 38,
  },
  vuesaxlinearmessageIcon: {
    height: 24,
    width: 24,
  },
  vuesaxlinearmessageWrapper: {
    padding: Padding.p_xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  frameParent: {
    backgroundColor: Color.colorPalegoldenrod_200,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_base,
    width: 390,
    bottom: 0,
    position: "absolute",
    left: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  bttomBar: {
    right: 0,
    height: 80,
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
    top: 0,
    width: 24,
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
    marginLeft: 108.2,
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
    position: "absolute",
  },
  time: {
    marginLeft: -27,
    borderRadius: Border.br_5xl,
    top: 0,
  },
  leftSide: {
    marginLeft: -170.5,
    top: 12,
  },
  statusBarIphone1313Pr: {
    left: -5,
    width: 395,
    height: 44,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  pickCommunity: {
    backgroundColor: Color.colorBeige_200,
    width: "100%",
    height: 844,
    overflow: "hidden",
    flex: 1,
  },
});

export default PickCommunity;
