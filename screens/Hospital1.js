import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import Container from "../components/Container";
import CardRating from "../components/CardRating";
import ContainerWrapper from "../components/ContainerWrapper";
import BlogCard from "../components/BlogCard";
import TimeContainer from "../components/TimeContainer";
import FormContainer1 from "../components/FormContainer1";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const Hospital1 = () => {
  return (
    <View style={styles.hospital}>
      <View style={[styles.topNav, styles.topNavPosition]}>
        <View style={[styles.arrowLeftParent, styles.parentFlexBox]}>
          <Image
            style={styles.arrowLeftIcon}
            contentFit="cover"
            source={require("../assets/arrowleft.png")}
          />
          <Text style={[styles.label, styles.labelTypo]}>John Hopkins</Text>
        </View>
      </View>
      <View style={styles.hospitalInner}>
        <View style={styles.groupChildLayout}>
          <Image
            style={[styles.groupChild, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-91.png")}
          />
        </View>
      </View>
      <View style={styles.helloParent}>
        <Text style={[styles.hello, styles.helloTypo]}>👋 Hello!</Text>
        <Text style={[styles.drGregoryHahn, styles.labelTypo]}>
          {" "}
          Dr. Gregory Hahn
        </Text>
        <View style={[styles.locationMarkerParent, styles.parentFlexBox]}>
          <Image
            style={styles.locationMarkerIcon}
            contentFit="cover"
            source={require("../assets/locationmarker.png")}
          />
          <Text
            style={[styles.tampaFl, styles.helloTypo]}
          >{`Tampa, FL            `}</Text>
        </View>
      </View>
      <Container />
      <View style={styles.frameParent}>
        <View style={styles.cardProdukParent}>
          <CardRating
            dimension={require("../assets/image-871.png")}
            componentInfo="Reviews"
            rating="4.8 Stars"
            productDimensions={require("../assets/calendar.png")}
            buttonText="Learn more"
            propBackgroundColor="#dbebd5"
            propColor="#4a9c2e"
          />
          <CardRating
            dimension={require("../assets/image-872.png")}
            componentInfo="Board Certification"
            rating="American Board of Orthopedic Surgery, 2001"
            productDimensions={require("../assets/calendar1.png")}
            buttonText="Learn more"
            propMarginLeft={12}
            propBackgroundColor="#dbebd5"
            propColor="#4a9c2e"
          />
        </View>
        <ContainerWrapper />
        <BlogCard />
      </View>
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
            <Text style={styles.text}>9:41</Text>
          </View>
        </View>
      </View>
      <FormContainer1 />
    </View>
  );
};

const styles = StyleSheet.create({
  topNavPosition: {
    left: 0,
    position: "absolute",
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  labelTypo: {
    textAlign: "left",
    fontFamily: FontFamily.boldH5,
    fontWeight: "700",
  },
  groupChildLayout: {
    height: 59,
    width: 64,
  },
  helloTypo: {
    fontFamily: FontFamily.semiBoldH6,
    fontWeight: "600",
    textAlign: "left",
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
    flex: 1,
  },
  arrowLeftParent: {
    width: 324,
    flex: 1,
  },
  topNav: {
    top: 48,
    width: 390,
    height: 56,
    justifyContent: "center",
    paddingHorizontal: Padding.p_lg,
    paddingVertical: Padding.p_3xs,
    backgroundColor: Color.colorBeige_100,
  },
  groupChild: {
    borderRadius: 18,
    top: 0,
    left: 0,
    position: "absolute",
  },
  hospitalInner: {
    top: 118,
    left: 262,
    width: 112,
    justifyContent: "space-between",
    flexDirection: "row",
    position: "absolute",
  },
  hello: {
    alignSelf: "stretch",
    fontSize: FontSize.body_size,
    color: Color.colorDarkslategray_200,
  },
  drGregoryHahn: {
    fontSize: FontSize.boldH2_size,
    color: Color.primaryNavy1,
    marginTop: 7,
    width: 213,
  },
  locationMarkerIcon: {
    height: 15,
    width: 15,
    overflow: "hidden",
  },
  tampaFl: {
    fontSize: FontSize.label_size,
    color: Color.neutralColorCoolGrey600,
    marginLeft: 4,
  },
  locationMarkerParent: {
    marginTop: 7,
  },
  helloParent: {
    top: 117,
    left: 30,
    width: 213,
    position: "absolute",
  },
  cardProdukParent: {
    flexDirection: "row",
  },
  frameParent: {
    top: 406,
    left: 23,
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
    fontFamily: FontFamily.sFUIText,
    color: Color.labelColorLightPrimary,
    textAlign: "center",
    width: 54,
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
  hospital: {
    width: "100%",
    height: 1378,
    flex: 1,
    backgroundColor: Color.colorBeige_100,
  },
});

export default Hospital1;
