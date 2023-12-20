import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import TimeContainer from "../components/TimeContainer";
import { Padding, FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const PersonalInfo = () => {
  return (
    <View style={styles.personalInfo}>
      <View style={[styles.topNav, styles.topNavFlexBox]}>
        <View style={[styles.arrowLeftParent, styles.parentFlexBox]}>
          <Image
            style={styles.arrowLeftIcon}
            contentFit="cover"
            source={require("../assets/arrowleft.png")}
          />
          <Text style={styles.label}>Dr. Gregory Hahn</Text>
        </View>
      </View>
      <View style={styles.frameParent}>
        <View style={styles.parentFlexBox}>
          <Image
            style={styles.component44Icon}
            contentFit="cover"
            source={require("../assets/component-44.png")}
          />
          <Text style={styles.date}>Date</Text>
        </View>
        <View style={[styles.vectorParent, styles.parentFlexBox]}>
          <Image
            style={styles.component44Icon}
            contentFit="cover"
            source={require("../assets/component-44.png")}
          />
          <Text style={styles.date}>Personal Information</Text>
        </View>
        <View style={[styles.vectorParent, styles.parentFlexBox]}>
          <Image
            style={styles.component44Icon}
            contentFit="cover"
            source={require("../assets/component-44.png")}
          />
          <Text style={styles.date}>Submit</Text>
        </View>
      </View>
      <Image
        style={[styles.svg6449Icon, styles.svg6449IconPosition]}
        contentFit="cover"
        source={require("../assets/svg64492.png")}
      />
      <Text style={styles.pageTitle}>You’re good to go.</Text>
      <TimeContainer />
      <View style={[styles.statusBarIphone1313Pr, styles.svg6449IconPosition]}>
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
            <Text style={styles.text}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={[styles.bttomBar, styles.bttomBarLayout]}>
        <View style={[styles.frameGroup, styles.bttomBarLayout]}>
          <View style={styles.frameWrapper}>
            <Image
              style={styles.frameIcon}
              contentFit="cover"
              source={require("../assets/frame10.png")}
            />
          </View>
          <View style={[styles.frameContainer, styles.wrapperFlexBox]}>
            <Image
              style={styles.frameIcon1}
              contentFit="cover"
              source={require("../assets/frame11.png")}
            />
          </View>
          <View
            style={[styles.vuesaxlinearmessageWrapper, styles.wrapperFlexBox]}
          >
            <Image
              style={styles.vuesaxlinearmessageIcon}
              contentFit="cover"
              source={require("../assets/vuesaxlinearmessage1.png")}
            />
          </View>
          <View
            style={[styles.vuesaxlinearprofileWrapper, styles.wrapperFlexBox]}
          >
            <Image
              style={styles.vuesaxlinearmessageIcon}
              contentFit="cover"
              source={require("../assets/vuesaxlinearprofile.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topNavFlexBox: {
    justifyContent: "center",
    left: 0,
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  svg6449IconPosition: {
    position: "absolute",
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
  bttomBarLayout: {
    height: 80,
    bottom: 0,
    width: 390,
    position: "absolute",
  },
  wrapperFlexBox: {
    marginLeft: 15,
    padding: Padding.p_xs,
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  arrowLeftIcon: {
    width: 20,
    overflow: "hidden",
    height: 20,
  },
  label: {
    fontSize: FontSize.boldH3_size,
    lineHeight: 28,
    fontFamily: FontFamily.boldH5,
    color: Color.neutralColorCoolGrey700,
    marginLeft: 12,
    textAlign: "left",
    fontWeight: "700",
    flex: 1,
  },
  arrowLeftParent: {
    width: 324,
    flex: 1,
  },
  topNav: {
    top: 44,
    height: 56,
    paddingHorizontal: Padding.p_lg,
    paddingVertical: Padding.p_3xs,
    width: 390,
    justifyContent: "center",
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorBeige_100,
  },
  component44Icon: {
    height: 17,
    width: 17,
  },
  date: {
    fontSize: FontSize.label_size,
    fontFamily: FontFamily.semiBoldH6,
    color: Color.neutralColorCoolGrey600,
    marginLeft: 4,
    fontWeight: "600",
    textAlign: "left",
  },
  vectorParent: {
    marginLeft: 12,
  },
  frameParent: {
    top: 108,
    left: 18,
    flexDirection: "row",
    position: "absolute",
  },
  svg6449Icon: {
    top: 320,
    left: 131,
    width: 128,
    height: 128,
    overflow: "hidden",
  },
  pageTitle: {
    top: 512,
    left: 19,
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.dMSansBold,
    width: 354,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontWeight: "700",
    position: "absolute",
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
    top: 0,
    width: 17,
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
    fontFamily: FontFamily.sFUIText,
    width: 54,
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontWeight: "600",
    height: 20,
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
    overflow: "hidden",
  },
  frameIcon: {
    width: 26,
    height: 26,
    overflow: "hidden",
  },
  frameWrapper: {
    width: 76,
    padding: Padding.p_xs,
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  frameIcon1: {
    width: 46,
    height: 45,
    overflow: "hidden",
  },
  frameContainer: {
    width: 74,
  },
  vuesaxlinearmessageIcon: {
    height: 24,
    width: 24,
  },
  vuesaxlinearmessageWrapper: {
    width: 71,
  },
  vuesaxlinearprofileWrapper: {
    width: 88,
  },
  frameGroup: {
    backgroundColor: Color.colorPalegoldenrod_200,
    paddingLeft: Padding.p_mini,
    paddingTop: Padding.p_base,
    paddingRight: Padding.p_5xl,
    paddingBottom: Padding.p_base,
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    left: 0,
    height: 80,
    bottom: 0,
  },
  bttomBar: {
    right: 0,
  },
  personalInfo: {
    width: "100%",
    height: 845,
    flex: 1,
    backgroundColor: Color.colorBeige_100,
  },
});

export default PersonalInfo;
