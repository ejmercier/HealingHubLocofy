import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DetailsContainer from "../components/DetailsContainer";
import FormContainer from "../components/FormContainer";
import TimeContainer from "../components/TimeContainer";
import { Color, Padding, FontSize, FontFamily, Border } from "../GlobalStyles";

const PersonalInfo1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.personalInfo}>
      <View style={styles.topNav}>
        <View style={styles.arrowLeftParent}>
          <Image
            style={styles.arrowLeftIcon}
            contentFit="cover"
            source={require("../assets/arrowleft.png")}
          />
          <Text style={styles.label}>Dr. Gregory Hahn</Text>
        </View>
      </View>
      <View style={styles.frameParent}>
        <View style={styles.component44Parent}>
          <Image
            style={styles.component44Layout}
            contentFit="cover"
            source={require("../assets/component-44.png")}
          />
          <Text style={[styles.date, styles.dateClr]}>Date</Text>
        </View>
        <View style={styles.vectorParent}>
          <Image
            style={styles.component44Layout}
            contentFit="cover"
            source={require("../assets/component-44.png")}
          />
          <Text style={[styles.date, styles.dateClr]}>
            Personal Information
          </Text>
        </View>
        <View style={styles.vectorParent}>
          <View style={[styles.component44, styles.component44Layout]}>
            <Text style={styles.text}>3</Text>
          </View>
          <Text style={[styles.date, styles.dateClr]}>Submit</Text>
        </View>
      </View>
      <Pressable
        style={[styles.button, styles.buttonPosition]}
        onPress={() => navigation.navigate("PersonalInfo")}
      >
        <Text style={styles.label1}>submit</Text>
      </Pressable>
      <View style={styles.itemCheckbox}>
        <View style={[styles.checkbox, styles.checkboxLayout]}>
          <View style={styles.checkboxChild} />
          <Image
            style={styles.checkboxItem}
            contentFit="cover"
            source={require("../assets/vector-1.png")}
          />
        </View>
        <Text style={[styles.label2, styles.dateClr]}>
          I consent to the collection of my data and have read the terms and
          conditions.
        </Text>
      </View>
      <DetailsContainer />
      <FormContainer />
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
            <Text style={styles.text1}>9:41</Text>
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
              style={styles.checkboxLayout}
              contentFit="cover"
              source={require("../assets/vuesaxlinearmessage1.png")}
            />
          </View>
          <View
            style={[styles.vuesaxlinearprofileWrapper, styles.wrapperFlexBox]}
          >
            <Image
              style={styles.checkboxLayout}
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
  dateClr: {
    color: Color.neutralColorCoolGrey600,
    textAlign: "left",
  },
  component44Layout: {
    height: 17,
    width: 17,
  },
  buttonPosition: {
    left: "50%",
    position: "absolute",
  },
  checkboxLayout: {
    height: 24,
    width: 24,
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
    alignItems: "center",
    flexDirection: "row",
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
  date: {
    fontSize: FontSize.label_size,
    fontFamily: FontFamily.semiBoldH6,
    marginLeft: 4,
    fontWeight: "600",
    color: Color.neutralColorCoolGrey600,
  },
  component44Parent: {
    alignItems: "center",
    flexDirection: "row",
  },
  vectorParent: {
    marginLeft: 12,
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    fontSize: FontSize.semiBoldP4_size,
    lineHeight: 8,
    fontWeight: "900",
    fontFamily: FontFamily.boldP2,
    color: Color.neutralColorCoolGrey50,
    width: 7,
    textAlign: "center",
  },
  component44: {
    borderRadius: 49,
    paddingHorizontal: 2,
    paddingVertical: 2,
    backgroundColor: Color.primaryNavy1,
    alignItems: "center",
    justifyContent: "center",
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
    marginLeft: -158,
    top: 692,
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
  checkboxChild: {
    top: 3,
    left: 3,
    borderRadius: Border.br_11xs,
    borderStyle: "solid",
    borderColor: Color.primaryNavy1,
    borderWidth: 1,
    width: 18,
    height: 18,
    backgroundColor: Color.primaryNavy1,
    position: "absolute",
  },
  checkboxItem: {
    top: 9,
    left: 8,
    width: 9,
    height: 7,
    position: "absolute",
  },
  checkbox: {
    overflow: "hidden",
  },
  label2: {
    fontSize: FontSize.body_size,
    fontFamily: FontFamily.regulerP2,
    marginLeft: 10,
    flex: 1,
  },
  itemCheckbox: {
    top: 630,
    left: 32,
    width: 343,
    flexDirection: "row",
    position: "absolute",
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
    top: 0,
    width: 24,
    height: 11,
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
  text1: {
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
  personalInfo: {
    width: "100%",
    height: 845,
    flex: 1,
    backgroundColor: Color.colorBeige_100,
  },
});

export default PersonalInfo1;
