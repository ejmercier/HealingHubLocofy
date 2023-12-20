import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import OKContainer from "../components/OKContainer";
import GraceBaileyCard from "../components/GraceBaileyCard";
import TimeContainer from "../components/TimeContainer";
import { FontFamily, FontSize, Padding, Color, Border } from "../GlobalStyles";

const Hospital = () => {
  return (
    <View style={styles.hospital}>
      <View style={styles.topNav}>
        <View style={[styles.arrowLeftParent, styles.groupParentFlexBox]}>
          <Image
            style={styles.arrowLeftIcon}
            contentFit="cover"
            source={require("../assets/arrowleft.png")}
          />
          <Text style={[styles.label, styles.labelTypo]}>Dr. Gregory Hahn</Text>
        </View>
      </View>
      <View style={styles.helloParent}>
        <Text style={[styles.hello, styles.textTypo1]}>👋 Hello!</Text>
        <Text style={[styles.ahmadKautsar, styles.helloFlexBox]}>
          Ahmad Kautsar
        </Text>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/locationmarker.png")}
        />
      </View>
      <OKContainer />
      <View style={[styles.chevronRightParent, styles.groupParentFlexBox]}>
        <Image
          style={[styles.chevronRightIcon, styles.chevronIconLayout]}
          contentFit="cover"
          source={require("../assets/chevronright.png")}
        />
        <Text style={styles.july}>July</Text>
        <Image
          style={[styles.chevronRightIcon1, styles.chevronIconLayout]}
          contentFit="cover"
          source={require("../assets/chevronright1.png")}
        />
      </View>
      <View style={styles.frameParent}>
        <View style={styles.groupParentFlexBox}>
          <View style={[styles.component43, styles.componentLayout]}>
            <Text style={[styles.text, styles.textTypo]}>1</Text>
          </View>
          <Text style={[styles.date, styles.textTypo1]}>Date</Text>
        </View>
        <View style={[styles.component43Group, styles.groupParentFlexBox]}>
          <View style={[styles.component431, styles.componentLayout]}>
            <Text style={[styles.text1, styles.textTypo]}>2</Text>
          </View>
          <Text style={[styles.date, styles.textTypo1]}>
            Personal Information
          </Text>
        </View>
        <View style={[styles.component43Group, styles.groupParentFlexBox]}>
          <View style={[styles.component431, styles.componentLayout]}>
            <Text style={[styles.text1, styles.textTypo]}>3</Text>
          </View>
          <Text style={[styles.date, styles.textTypo1]}>Submit</Text>
        </View>
      </View>
      <GraceBaileyCard />
      <TimeContainer />
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
            <Text style={styles.text3}>9:41</Text>
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
              style={styles.chevronIconLayout}
              contentFit="cover"
              source={require("../assets/vuesaxlinearmessage1.png")}
            />
          </View>
          <View
            style={[styles.vuesaxlinearprofileWrapper, styles.wrapperFlexBox]}
          >
            <Image
              style={styles.chevronIconLayout}
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
  groupParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  labelTypo: {
    fontFamily: FontFamily.boldH5,
    fontWeight: "700",
  },
  textTypo1: {
    fontFamily: FontFamily.semiBoldH6,
    fontWeight: "600",
  },
  helloFlexBox: {
    alignSelf: "stretch",
    textAlign: "left",
  },
  chevronIconLayout: {
    height: 24,
    width: 24,
  },
  componentLayout: {
    paddingVertical: 2,
    paddingHorizontal: 2,
    height: 17,
    borderRadius: 49,
    width: 17,
    alignItems: "center",
    justifyContent: "center",
  },
  textTypo: {
    width: 7,
    fontSize: FontSize.semiBoldP4_size,
    textAlign: "center",
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
    color: Color.neutralColorCoolGrey700,
    marginLeft: 12,
    textAlign: "left",
    flex: 1,
  },
  arrowLeftParent: {
    width: 324,
    flex: 1,
  },
  topNav: {
    top: 48,
    height: 56,
    paddingHorizontal: Padding.p_lg,
    paddingVertical: Padding.p_3xs,
    justifyContent: "center",
    width: 390,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorBeige_100,
  },
  hello: {
    fontSize: FontSize.body_size,
    color: Color.colorDarkslategray_200,
    alignSelf: "stretch",
    textAlign: "left",
  },
  ahmadKautsar: {
    fontSize: FontSize.boldH2_size,
    marginTop: 7,
    color: Color.primaryNavy1,
    fontFamily: FontFamily.boldH5,
    fontWeight: "700",
  },
  frameChild: {
    height: 15,
    width: 15,
    marginTop: 7,
  },
  helloParent: {
    top: 34,
    left: 660,
    position: "absolute",
  },
  chevronRightIcon: {
    borderRadius: Border.br_7xs_2,
    height: 24,
    overflow: "hidden",
  },
  july: {
    fontSize: FontSize.boldH1_size,
    lineHeight: 38,
    marginLeft: 23,
    textAlign: "center",
    color: Color.primaryNavy1,
    fontFamily: FontFamily.boldH5,
    fontWeight: "700",
  },
  chevronRightIcon1: {
    marginLeft: 23,
    borderRadius: Border.br_7xs_2,
    height: 24,
    overflow: "hidden",
  },
  chevronRightParent: {
    top: 151,
    left: 113,
    justifyContent: "center",
    position: "absolute",
  },
  text: {
    color: Color.neutralColorCoolGrey50,
    fontFamily: FontFamily.semiBoldH6,
    fontWeight: "600",
  },
  component43: {
    backgroundColor: Color.primaryNavy1,
  },
  date: {
    fontSize: FontSize.label_size,
    color: Color.neutralColorCoolGrey600,
    marginLeft: 4,
    textAlign: "left",
  },
  text1: {
    lineHeight: 8,
    fontWeight: "900",
    fontFamily: FontFamily.boldP2,
    color: Color.primaryNavy1,
  },
  component431: {
    borderStyle: "solid",
    borderColor: Color.primaryNavy1,
    borderWidth: 1,
  },
  component43Group: {
    marginLeft: 12,
  },
  frameParent: {
    top: 108,
    left: 18,
    flexDirection: "row",
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
    top: 0,
    width: 24,
    height: 11,
  },
  wifiIcon: {
    marginLeft: -11.35,
    top: 0,
    width: 15,
  },
  mobileSignalIcon: {
    marginLeft: -33.35,
    top: 0,
    width: 17,
    height: 11,
  },
  rightSide: {
    marginLeft: 108.2,
    top: 17,
    width: 67,
  },
  text3: {
    top: 1,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    lineHeight: 20,
    fontFamily: FontFamily.sFUIText,
    color: Color.labelColorLightPrimary,
    width: 54,
    textAlign: "center",
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
    position: "absolute",
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
  hospital: {
    width: "100%",
    height: 845,
    flex: 1,
    backgroundColor: Color.colorBeige_100,
  },
});

export default Hospital;
