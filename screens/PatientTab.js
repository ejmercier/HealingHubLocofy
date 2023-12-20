import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TimeContainer1 from "../components/TimeContainer1";
import FormContainer2 from "../components/FormContainer2";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const PatientTab = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.patientTab}>
      <Image
        style={[styles.menuIcon, styles.menuIconPosition]}
        contentFit="cover"
        source={require("../assets/menu.png")}
      />
      <View style={[styles.patientTabChild, styles.patientPosition]} />
      <Text style={[styles.pameladarren, styles.anonymoususerTypo]}>
        #PamelaDarren
      </Text>
      <Image
        style={[styles.user03cIcon, styles.user03cIconLayout]}
        contentFit="cover"
        source={require("../assets/user-03c6.png")}
      />
      <Text style={[styles.pageTitle, styles.pageTypo1]}>
        Load more comments
      </Text>
      <View style={[styles.patientTabItem, styles.patientPosition]} />
      <Text style={[styles.anonymoususer, styles.image2IconPosition]}>
        #AnonymousUser
      </Text>
      <Image
        style={[styles.user03cIcon1, styles.user03cIconLayout]}
        contentFit="cover"
        source={require("../assets/user-03c4.png")}
      />
      <Text style={[styles.pageTitle1, styles.pageTypo1]}>
        Load more comments
      </Text>
      <Image
        style={[styles.frameIcon, styles.frameIconLayout1]}
        contentFit="cover"
        source={require("../assets/frame7.png")}
      />
      <View style={styles.patientTabInner} />
      <View style={[styles.frameView, styles.patientChildLayout]} />
      <View style={[styles.patientTabChild1, styles.patientChildLayout]} />
      <Text
        style={styles.pageTitle2}
      >{`Hello everyone, I have 42° scoliosis and I'm 33.
I've been looking for some other alternatives to typical scoliosis surgery (spine fusion) specially because of the limitations in movements, and I found a "minimally invasive surgery" which avoids the fusion. Has anyone had any experience with this kind of surgery or some sort of information?`}</Text>
      <Image
        style={[styles.frameIcon1, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame3.png")}
      />
      <Image
        style={[styles.iconsinstagramLike, styles.iconsinstagramLayout]}
        contentFit="cover"
        source={require("../assets/iconsinstagramlike.png")}
      />
      <Image
        style={[styles.frameIcon2, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame3.png")}
      />
      <Image
        style={[styles.iconsinstagramLike1, styles.iconsinstagramLayout]}
        contentFit="cover"
        source={require("../assets/iconsinstagramlike.png")}
      />
      <Text style={[styles.pageTitle3, styles.pageTypo]}>
        For those that had long fusions and are older (25+), how long did it
        take you to get back to work? I work a desk job. Doctor didn't give me a
        time frAme and said everyone is different but generally 4-8 weeks.
      </Text>
      <View style={[styles.rectangleView, styles.patientPosition]} />
      <Text style={[styles.anonymoususer1, styles.anonymoususerTypo]}>
        #AnonymousUser
      </Text>
      <Image
        style={[styles.user03cIcon2, styles.user03cIconLayout]}
        contentFit="cover"
        source={require("../assets/user-03c4.png")}
      />
      <Image
        style={[styles.frameIcon3, styles.frameIcon3Position]}
        contentFit="cover"
        source={require("../assets/frame7.png")}
      />
      <Image
        style={[styles.frameIcon4, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame3.png")}
      />
      <Image
        style={[styles.iconsinstagramLike2, styles.iconsinstagramLayout]}
        contentFit="cover"
        source={require("../assets/iconsinstagramlike.png")}
      />
      <Image
        style={[styles.image2Icon, styles.image2IconPosition]}
        contentFit="cover"
        source={require("../assets/image-2.png")}
      />
      <Text
        style={[styles.pameladarrenIveHeard, styles.terryevansForMeLayout]}
      >{`#PamelaDarren I’ve heard of one in Reno that does minimally invasive                                  but I don’t know what the success rates are. `}</Text>
      <Text style={styles.terryevansIKnew}>
        #TerryEvans I knew one girl who got it from my school. I can send her
        your way!!
      </Text>
      <Text style={[styles.terryevansForMe, styles.terryevansForMeLayout]}>
        #TerryEvans For me I was working remotely again after 3 weeks. My job is
        flexible but I definitely would have felt good enough to go in after 4
        weeks.
      </Text>
      <View style={[styles.patientTabChild2, styles.patientChildLayout]} />
      <Text style={[styles.pageTitle4, styles.frameIcon3Position]}>
        For those that had long fusions and are older (25+), how long did
        recovery take? I just found out about my scoliosis and mty degrees are
        30 and 10.
      </Text>
      <Pressable
        style={styles.gregoryhahn}
        onPress={() => navigation.navigate("Hospital1")}
      >
        <Text style={styles.gregoryhahn1}>@GregoryHahn</Text>
      </Pressable>
      <TimeContainer1 />
      <Text style={[styles.popular, styles.newPosition]}>Popular</Text>
      <Text style={[styles.new, styles.newPosition]}>New</Text>
      <View style={[styles.statusBarIphone1313Pr, styles.menuIconPosition]}>
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
      <FormContainer2 />
    </View>
  );
};

const styles = StyleSheet.create({
  menuIconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  patientPosition: {
    width: 350,
    backgroundColor: Color.colorPalegoldenrod_100,
    left: 20,
    position: "absolute",
  },
  anonymoususerTypo: {
    height: 16,
    width: 129,
    textAlign: "left",
    color: Color.colorDarkolivegreen,
    lineHeight: 11,
    fontSize: FontSize.semiBoldP4_size,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  user03cIconLayout: {
    height: 26,
    width: 26,
    borderRadius: Border.br_81xl,
    overflow: "hidden",
    position: "absolute",
  },
  pageTypo1: {
    width: 105,
    textAlign: "center",
    color: Color.gray2,
    fontFamily: FontFamily.abhayaLibreBold,
    lineHeight: 22,
    fontSize: FontSize.size_2xs,
    fontWeight: "700",
    position: "absolute",
  },
  image2IconPosition: {
    left: 60,
    position: "absolute",
  },
  frameIconLayout1: {
    height: 19,
    width: 19,
    overflow: "hidden",
  },
  patientChildLayout: {
    width: 317,
    backgroundColor: Color.colorBeige_300,
    overflow: "hidden",
    position: "absolute",
  },
  frameIconLayout: {
    width: 18,
    top: "50%",
    height: 16,
    overflow: "hidden",
    position: "absolute",
  },
  iconsinstagramLayout: {
    height: 13,
    width: 12,
    top: "50%",
    position: "absolute",
  },
  pageTypo: {
    width: 301,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.robotoSlabRegular,
    lineHeight: 18,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
  },
  frameIcon3Position: {
    left: 43,
    position: "absolute",
  },
  terryevansForMeLayout: {
    height: 42,
    width: 309,
    lineHeight: 14,
    top: "50%",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.robotoSlabRegular,
    textAlign: "left",
    fontSize: FontSize.semiBoldP4_size,
    position: "absolute",
  },
  newPosition: {
    color: Color.colorLightslategray,
    top: 99,
    textAlign: "left",
    lineHeight: 11,
    fontSize: FontSize.semiBoldP4_size,
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
  menuIcon: {
    top: 44,
    left: 15,
    width: 34,
    height: 34,
  },
  patientTabChild: {
    top: 140,
    height: 312,
  },
  pameladarren: {
    top: 154,
    left: 59,
    position: "absolute",
  },
  user03cIcon: {
    top: 148,
    left: 30,
  },
  pageTitle: {
    top: 422,
    left: 142,
  },
  patientTabItem: {
    top: 477,
    height: 263,
  },
  anonymoususer: {
    top: 492,
    height: 16,
    width: 129,
    textAlign: "left",
    color: Color.colorDarkolivegreen,
    lineHeight: 11,
    fontSize: FontSize.semiBoldP4_size,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  user03cIcon1: {
    top: 486,
    left: 30,
  },
  pageTitle1: {
    top: 711,
    left: 148,
  },
  frameIcon: {
    top: 489,
    left: 33,
    position: "absolute",
  },
  patientTabInner: {
    top: 88,
    width: 390,
    height: 27,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorBeige_200,
  },
  frameView: {
    top: 183,
    height: 140,
    left: 30,
  },
  patientTabChild1: {
    top: 525,
    left: 32,
    height: 105,
  },
  pageTitle2: {
    top: 192,
    width: 303,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.robotoSlabRegular,
    lineHeight: 18,
    left: 38,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    position: "absolute",
  },
  frameIcon1: {
    marginTop: -395,
    left: 349,
  },
  iconsinstagramLike: {
    marginTop: -379,
    left: 350,
  },
  frameIcon2: {
    marginTop: -88,
    left: 350,
  },
  iconsinstagramLike1: {
    marginTop: -72,
    left: 351,
  },
  pageTitle3: {
    top: 534,
    left: 38,
    width: 301,
    position: "absolute",
  },
  rectangleView: {
    top: 773,
    height: 320,
  },
  anonymoususer1: {
    top: 789,
    left: 72,
    position: "absolute",
  },
  user03cIcon2: {
    top: 782,
    left: 40,
  },
  frameIcon3: {
    top: 786,
    height: 19,
    width: 19,
    overflow: "hidden",
  },
  frameIcon4: {
    marginTop: 273,
    left: 335,
  },
  iconsinstagramLike2: {
    marginTop: 289,
    left: 336,
  },
  image2Icon: {
    top: 818,
    width: 273,
    height: 173,
  },
  pameladarrenIveHeard: {
    marginTop: -346,
    left: 39,
  },
  terryevansIKnew: {
    marginTop: -299,
    left: 35,
    width: 309,
    lineHeight: 14,
    top: "50%",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.robotoSlabRegular,
    textAlign: "left",
    fontSize: FontSize.semiBoldP4_size,
    position: "absolute",
  },
  terryevansForMe: {
    marginTop: -50,
    left: 40,
  },
  patientTabChild2: {
    top: 997,
    left: 36,
    height: 69,
  },
  pageTitle4: {
    top: 1005,
    width: 301,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.robotoSlabRegular,
    lineHeight: 18,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
  },
  gregoryhahn1: {
    fontFamily: FontFamily.robotoSlabBold,
    color: "#213416",
    width: 104,
    height: 24,
    lineHeight: 14,
    fontWeight: "700",
    textAlign: "left",
    fontSize: FontSize.semiBoldP4_size,
  },
  gregoryhahn: {
    left: 84,
    top: 356,
    position: "absolute",
  },
  popular: {
    left: 334,
    top: 99,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  new: {
    left: 304,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    top: 99,
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
    color: Color.labelColorLightPrimary,
    left: 0,
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
  },
  patientTab: {
    flex: 1,
    width: "100%",
    height: 1378,
    backgroundColor: Color.colorBeige_200,
  },
});

export default PatientTab;
