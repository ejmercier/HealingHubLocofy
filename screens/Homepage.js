import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import TimeContainer3 from "../components/TimeContainer3";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Homepage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homepage}>
      <View style={[styles.homepageChild, styles.homepageLayout]} />
      <Image
        style={styles.menuIcon}
        contentFit="cover"
        source={require("../assets/menu.png")}
      />
      <View style={[styles.homepageItem, styles.homepageLayout]} />
      <Text style={[styles.oliviaPinson, styles.teganbausTypo]}>
        #Olivia Pinson
      </Text>
      <Text style={[styles.pageTitle, styles.pageTypo1]}>
        Load more comments
      </Text>
      <Text style={styles.gettingReadyTo}>
        Getting ready to go in for my fusion from T4-L4 at John Hopkins
        Children's Hospital.. see you in 8 hours!
      </Text>
      <Image
        style={styles.img51381Icon}
        contentFit="cover"
        source={require("../assets/img-5138-1.png")}
      />
      <View style={[styles.homepageInner, styles.homepageLayout]} />
      <Text style={[styles.teganbaus, styles.teganbausTypo]}>#TeganBaus</Text>
      <Text style={styles.pageTitle1}>Load more comments</Text>
      <Image
        style={[styles.frameIcon, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame3.png")}
      />
      <Image
        style={[styles.iconsinstagramLike, styles.iconsinstagramLayout]}
        contentFit="cover"
        source={require("../assets/iconsinstagramlike.png")}
      />
      <View style={[styles.frameView, styles.frameViewBg]} />
      <Text
        style={[styles.wouldAnyoneRecommend, styles.wouldAnyoneRecommendLayout]}
      >
        Would anyone recommend me some good pillows and items I should get for
        home? Is a shower chair necessary?
      </Text>
      <Text
        style={[
          styles.oliviapinsonPersonallyI,
          styles.wouldAnyoneRecommendLayout,
        ]}
      >
        #OliviaPinson Personally I found the shower chair helpful for the first
        2 weeks, especially for showering alone. I was nauseous sitting up and
        became very lightheaded...
      </Text>
      <Image
        style={[styles.frameIcon1, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame3.png")}
      />
      <Image
        style={[styles.iconsinstagramLike1, styles.iconsinstagramLayout]}
        contentFit="cover"
        source={require("../assets/iconsinstagramlike.png")}
      />
      <Image
        style={[styles.user03cIcon, styles.user03cIconLayout]}
        contentFit="cover"
        source={require("../assets/user-03c.png")}
      />
      <Image
        style={[styles.user03cIcon1, styles.user03cIconLayout]}
        contentFit="cover"
        source={require("../assets/user-03c1.png")}
      />
      <Image
        style={[styles.user03cIcon2, styles.user03cIconLayout]}
        contentFit="cover"
        source={require("../assets/user-03c2.png")}
      />
      <Image
        style={[styles.frameIcon2, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame3.png")}
      />
      <Image
        style={[styles.iconsinstagramLike2, styles.iconsinstagramLayout]}
        contentFit="cover"
        source={require("../assets/iconsinstagramlike.png")}
      />
      <Text style={[styles.pageTitle2, styles.pageTypo1]}>
        Load more comments
      </Text>
      <View style={styles.wrapperRectangle5}>
        <Image
          style={styles.wrapperRectangle5Child}
          contentFit="cover"
          source={require("../assets/rectangle-5.png")}
        />
      </View>
      <View style={[styles.homepageChild1, styles.frameViewBg]} />
      <Text style={[styles.pageTitle3, styles.pageTypo]}>
        What would you guys recommend for scar healing? What kind of scar tape?
        And when did you start going into the sun with it?
      </Text>
      <Text style={[styles.pageTitle3, styles.pageTypo]}>
        What would you guys recommend for scar healing? What kind of scar tape?
        And when did you start going into the sun with it?
      </Text>
      <Text style={[styles.pageTitle5, styles.pageTypo]}>
        #AnonymousUser Silicon scar tape, vitamin E oil...
      </Text>
      <Text style={[styles.pameladarren, styles.teganbausTypo]}>
        #PamelaDarren
      </Text>
      <TimeContainer3 />
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
      <View style={styles.bttomBar}>
        <View style={styles.frameParent}>
          <View style={[styles.frameWrapper, styles.wrapperFlexBox]}>
            <Image
              style={styles.frameIcon3}
              contentFit="cover"
              source={require("../assets/frame4.png")}
            />
          </View>
          <Image
            style={[styles.frameIcon4, styles.frameIcon4SpaceBlock]}
            contentFit="cover"
            source={require("../assets/frame5.png")}
          />
          <View
            style={[
              styles.vuesaxlinearmessageWrapper,
              styles.frameIcon4SpaceBlock,
            ]}
          >
            <Image
              style={styles.vuesaxlinearmessageIcon}
              contentFit="cover"
              source={require("../assets/vuesaxlinearmessage1.png")}
            />
          </View>
          <Pressable
            style={[
              styles.vuesaxlinearmessageWrapper,
              styles.frameIcon4SpaceBlock,
            ]}
            onPress={() => navigation.navigate("UserProfile")}
          >
            <Image
              style={styles.vuesaxlinearmessageIcon}
              contentFit="cover"
              source={require("../assets/vuesaxlinearprofile1.png")}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homepageLayout: {
    width: 350,
    backgroundColor: Color.colorPalegoldenrod_100,
    position: "absolute",
  },
  teganbausTypo: {
    height: 16,
    width: 129,
    textAlign: "left",
    color: Color.colorDarkolivegreen,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: 66,
    position: "absolute",
  },
  pageTypo1: {
    width: 105,
    textAlign: "center",
    color: Color.gray2,
    fontFamily: FontFamily.abhayaLibreBold,
    fontWeight: "700",
    lineHeight: 22,
    fontSize: FontSize.size_2xs,
    position: "absolute",
  },
  frameIconLayout: {
    width: 18,
    height: 16,
    overflow: "hidden",
    position: "absolute",
  },
  iconsinstagramLayout: {
    height: 13,
    width: 12,
    position: "absolute",
  },
  frameViewBg: {
    backgroundColor: Color.colorBeige_300,
    overflow: "hidden",
    position: "absolute",
  },
  wouldAnyoneRecommendLayout: {
    height: 52,
    width: 309,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.robotoSlabRegular,
    textAlign: "left",
    position: "absolute",
  },
  user03cIconLayout: {
    height: 26,
    width: 26,
    borderRadius: Border.br_81xl,
    overflow: "hidden",
    position: "absolute",
  },
  pageTypo: {
    width: 308,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.robotoSlabRegular,
    lineHeight: 18,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
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
  wrapperFlexBox: {
    padding: Padding.p_xs,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  frameIcon4SpaceBlock: {
    marginLeft: 12,
    overflow: "hidden",
  },
  homepageChild: {
    top: 696,
    height: 348,
    left: 20,
    backgroundColor: Color.colorPalegoldenrod_100,
  },
  menuIcon: {
    top: 44,
    left: 15,
    width: 34,
    height: 34,
    overflow: "hidden",
    position: "absolute",
  },
  homepageItem: {
    top: 121,
    height: 324,
    left: 20,
    backgroundColor: Color.colorPalegoldenrod_100,
  },
  oliviaPinson: {
    top: 135,
    lineHeight: 13,
    fontSize: FontSize.label_size,
    width: 129,
    textAlign: "left",
    color: Color.colorDarkolivegreen,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: 66,
  },
  pageTitle: {
    top: 422,
    left: 143,
    width: 105,
  },
  gettingReadyTo: {
    top: 386,
    left: 36,
    width: 297,
    height: 36,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.robotoSlabRegular,
    lineHeight: 18,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    position: "absolute",
  },
  img51381Icon: {
    top: 160,
    height: 218,
    width: 315,
    left: 35,
    position: "absolute",
  },
  homepageInner: {
    top: 478,
    left: 19,
    height: 185,
  },
  teganbaus: {
    top: 497,
    lineHeight: 13,
    fontSize: FontSize.label_size,
    width: 129,
    textAlign: "left",
    color: Color.colorDarkolivegreen,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: 66,
  },
  pageTitle1: {
    top: 641,
    width: 101,
    textAlign: "center",
    color: Color.gray2,
    fontFamily: FontFamily.abhayaLibreBold,
    fontWeight: "700",
    lineHeight: 22,
    fontSize: FontSize.size_2xs,
    left: 143,
    position: "absolute",
  },
  frameIcon: {
    top: 554,
    left: 351,
  },
  iconsinstagramLike: {
    top: 570,
    left: 352,
  },
  frameView: {
    marginTop: -490.5,
    height: 59,
    left: 34,
    top: "50%",
    width: 315,
  },
  wouldAnyoneRecommend: {
    top: 530,
    left: 43,
    lineHeight: 18,
    height: 52,
    width: 309,
    fontSize: FontSize.size_2xs,
  },
  oliviapinsonPersonallyI: {
    top: 589,
    fontSize: FontSize.size_4xs,
    lineHeight: 14,
    left: 34,
  },
  frameIcon1: {
    top: 349,
    left: 352,
  },
  iconsinstagramLike1: {
    top: 365,
    left: 353,
  },
  user03cIcon: {
    marginTop: -523.5,
    left: 29,
    top: "50%",
  },
  user03cIcon1: {
    top: 127,
    left: 32,
  },
  user03cIcon2: {
    top: 704,
    left: 35,
  },
  frameIcon2: {
    marginTop: -125.5,
    left: 306,
    top: "50%",
  },
  iconsinstagramLike2: {
    marginTop: -109.5,
    left: 307,
    top: "50%",
  },
  pageTitle2: {
    top: 1019,
    left: 146,
  },
  wrapperRectangle5Child: {
    height: "100%",
    objectFit: "contain",
    top: 4,
    transform: [
      {
        scale: 1.046,
      },
    ],
    left: 0,
    position: "absolute",
    width: "100%",
  },
  wrapperRectangle5: {
    top: 742,
    left: 100,
    borderRadius: Border.br_3xs,
    width: 198,
    height: 175,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  homepageChild1: {
    top: 921,
    width: 317,
    height: 69,
    left: 48,
  },
  pageTitle3: {
    top: 928,
    left: 53,
  },
  pageTitle5: {
    top: 992,
    left: 48,
  },
  pameladarren: {
    top: 713,
    fontSize: FontSize.semiBoldP4_size,
    lineHeight: 11,
    width: 129,
    textAlign: "left",
    color: Color.colorDarkolivegreen,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: 66,
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
    fontWeight: "600",
    fontFamily: FontFamily.sFUIText,
    height: 20,
    width: 54,
    left: 0,
    color: Color.labelColorLightPrimary,
    textAlign: "center",
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
  frameIcon3: {
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  frameWrapper: {
    overflow: "hidden",
  },
  frameIcon4: {
    width: 38,
    height: 38,
  },
  vuesaxlinearmessageIcon: {
    height: 24,
    width: 24,
  },
  vuesaxlinearmessageWrapper: {
    padding: Padding.p_xs,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  frameParent: {
    backgroundColor: Color.colorPalegoldenrod_200,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_base,
    flexDirection: "row",
    width: 390,
    bottom: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    position: "absolute",
  },
  bttomBar: {
    right: 0,
    height: 80,
    width: 390,
    bottom: 0,
    position: "absolute",
  },
  homepage: {
    backgroundColor: Color.colorBeige_200,
    height: 2027,
    width: "100%",
    flex: 1,
  },
});

export default Homepage;
