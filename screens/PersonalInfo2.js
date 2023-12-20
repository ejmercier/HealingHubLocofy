import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import Basedonthegivencontext from "../components/Basedonthegivencontext";
import { useNavigation } from "@react-navigation/native";
import TimeContainer from "../components/TimeContainer";
import { FontFamily, FontSize, Padding, Color, Border } from "../GlobalStyles";

const PersonalInfo2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.personalInfo}>
      <View style={styles.topNav}>
        <View style={[styles.arrowLeftParent, styles.groupParentFlexBox]}>
          <Image
            style={styles.arrowLeftIcon}
            contentFit="cover"
            source={require("../assets/arrowleft.png")}
          />
          <Text style={styles.label}>Dr. Gregory Hahn</Text>
        </View>
      </View>
      <View style={styles.frameParent}>
        <View style={styles.groupParentFlexBox}>
          <Image
            style={styles.component44Icon}
            contentFit="cover"
            source={require("../assets/component-44.png")}
          />
          <Text style={styles.date}>Date</Text>
        </View>
        <View style={[styles.component44Group, styles.groupParentFlexBox]}>
          <View style={[styles.component44, styles.componentLayout]}>
            <Text style={[styles.text, styles.textTypo]}>2</Text>
          </View>
          <Text style={styles.date}>Personal Information</Text>
        </View>
        <View style={[styles.component44Group, styles.groupParentFlexBox]}>
          <View style={[styles.component43, styles.componentLayout]}>
            <Text style={[styles.text1, styles.textTypo]}>3</Text>
          </View>
          <Text style={styles.date}>Submit</Text>
        </View>
      </View>
      <Basedonthegivencontext />
      <Pressable
        style={[styles.button, styles.buttonPosition]}
        onPress={() => navigation.navigate("PersonalInfo1")}
      >
        <Text style={styles.label1}>Continue</Text>
      </Pressable>
      <TimeContainer />
      <View style={styles.statusBarIphone1313Pr}>
        <Image
          style={[styles.notchIcon, styles.buttonPosition]}
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
            <Text style={styles.text2}>9:41</Text>
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
  groupParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  componentLayout: {
    paddingVertical: 2,
    paddingHorizontal: 2,
    borderRadius: 49,
    height: 17,
    width: 17,
    alignItems: "center",
    justifyContent: "center",
  },
  textTypo: {
    width: 7,
    fontFamily: FontFamily.boldP2,
    fontWeight: "900",
    lineHeight: 8,
    fontSize: FontSize.semiBoldP4_size,
    textAlign: "center",
  },
  buttonPosition: {
    left: "50%",
    position: "absolute",
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
    fontFamily: FontFamily.boldH5,
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
    justifyContent: "center",
    width: 390,
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
  text: {
    color: Color.neutralColorCoolGrey50,
  },
  component44: {
    backgroundColor: Color.primaryNavy1,
  },
  component44Group: {
    marginLeft: 12,
  },
  text1: {
    color: Color.primaryNavy1,
  },
  component43: {
    borderStyle: "solid",
    borderColor: Color.primaryNavy1,
    borderWidth: 1,
  },
  frameParent: {
    top: 108,
    left: 18,
    flexDirection: "row",
    position: "absolute",
  },
  label1: {
    fontSize: FontSize.boldP2_size,
    textTransform: "uppercase",
    color: Color.conditionalPopOver,
    textAlign: "center",
    fontFamily: FontFamily.boldH5,
    fontWeight: "700",
  },
  button: {
    marginLeft: -157,
    top: 610,
    borderRadius: Border.br_5xs,
    shadowColor: "rgba(30, 38, 109, 0.37)",
    shadowOffset: {
      width: 1,
      height: 8,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    width: 317,
    paddingHorizontal: Padding.p_41xl,
    paddingVertical: Padding.p_smi,
    backgroundColor: Color.primaryNavy1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  notchIcon: {
    marginLeft: -81.5,
    top: -2,
    width: 164,
    height: 31,
    display: "none",
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
    height: 11,
  },
  rightSide: {
    marginLeft: 108.2,
    top: 17,
    width: 67,
  },
  text2: {
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

export default PersonalInfo2;
