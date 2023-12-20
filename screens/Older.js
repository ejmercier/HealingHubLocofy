import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import TimeContainer2 from "../components/TimeContainer2";
import Chosen from "../components/Chosen";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";

const Older = () => {
  const [leftSideContainerVisible, setLeftSideContainerVisible] =
    useState(false);
  const navigation = useNavigation();

  const openLeftSideContainer = useCallback(() => {
    setLeftSideContainerVisible(true);
  }, []);

  const closeLeftSideContainer = useCallback(() => {
    setLeftSideContainerVisible(false);
  }, []);

  return (
    <>
      <View style={styles.older}>
        <Image
          style={styles.menuIcon}
          contentFit="cover"
          source={require("../assets/menu.png")}
        />
        <View style={[styles.iconsBottom, styles.iconsLayout]}>
          <Image
            style={styles.frameIconLayout1}
            contentFit="cover"
            source={require("../assets/frame6.png")}
          />
          <Image
            style={[styles.iconsinstagramLike, styles.iconsinstagramLayout]}
            contentFit="cover"
            source={require("../assets/iconsinstagramlike.png")}
          />
        </View>
        <View style={[styles.olderChild, styles.olderChildPosition]} />
        <View style={[styles.olderItem, styles.olderLayout]} />
        <View style={[styles.iconsBottom1, styles.iconsLayout]}>
          <Image
            style={styles.iconsinstagramLayout}
            contentFit="cover"
            source={require("../assets/iconsinstagramlike.png")}
          />
          <Image
            style={[styles.frameIcon1, styles.frameIconLayout1]}
            contentFit="cover"
            source={require("../assets/frame6.png")}
          />
        </View>
        <Text style={[styles.anonymoususer, styles.pameladarrenTypo]}>
          #AnonymousUser
        </Text>
        <Image
          style={[styles.user03cIcon, styles.user03cIconLayout]}
          contentFit="cover"
          source={require("../assets/user-03c4.png")}
        />
        <Text style={[styles.pageTitle, styles.pageTypo2]}>
          For those that had long fusions and are older (25+), how long did it
          take you to get back to work? I work a desk job. Doctor didn't give me
          a time frame and said everyone is different but generally 4-8 weeks.
        </Text>
        <Text style={[styles.pageTitle1, styles.pageTypo1]}>
          Load more comments
        </Text>
        <View style={[styles.frame, styles.framePosition]} />
        <Image
          style={styles.icons}
          contentFit="cover"
          source={require("../assets/-icons.png")}
        />
        <View style={[styles.olderInner, styles.olderChildPosition]} />
        <Text style={[styles.samanthahayworth, styles.pameladarrenTypo]}>
          #SamanthaHayworth
        </Text>
        <Text style={[styles.pageTitle2, styles.pageTypo1]}>
          Load more comments
        </Text>
        <View style={[styles.frameView, styles.frameViewPosition]} />
        <Image
          style={styles.image1Icon}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
        <Text
          style={[styles.pageTitle3, styles.pageTypo2]}
        >{`Hello everyone, I have 42° scoliosis and I'm 33.
I've been looking for some other alternatives to typical scoliosis surgery (spine fusion) specially because of the limitations in movements, and I found a "minimally invasive surgery" which avoids the fusion. Has anyone had any experience with this kind of surgery or some sort of information?`}</Text>
        <View style={[styles.rectangleView, styles.olderChildPosition]} />
        <Image
          style={[styles.user03cIcon1, styles.user03cIconLayout]}
          contentFit="cover"
          source={require("../assets/user-03c5.png")}
        />
        <View style={[styles.olderChild1, styles.olderChildPosition]} />
        <Text style={[styles.pameladarren, styles.pameladarrenTypo]}>
          #PamelaDarren
        </Text>
        <Text style={styles.pageTitle4}>Load more comments</Text>
        <Image
          style={[styles.frameIcon2, styles.frameIconLayout]}
          contentFit="cover"
          source={require("../assets/frame3.png")}
        />
        <Image
          style={[styles.iconsinstagramLike2, styles.iconsinstagramPosition]}
          contentFit="cover"
          source={require("../assets/iconsinstagramlike.png")}
        />
        <View style={styles.olderChild2} />
        <Text
          style={[styles.toAllThe, styles.pageTypo2]}
        >{`To all the Mom’s who have been fused- how was pregnancy with your fusion?
I had surgery last year T3-L2 and I just found out on Halloween that we’re expecting Both excited and nervous!
UPDATE: Thank you everyone! You all are so amazing`}</Text>
        <Text
          style={[styles.samanthahayworthOnlyIssue, styles.terryevansIKnewTypo]}
        >
          #SamanthaHayworth Only issue I had was towards the end with my PSP.
          But I had a great delivery. My hardware had no issues at all. Although
          I personally didn’t want an epidural and risk infection to my
          hardware...
        </Text>
        <Text style={[styles.terryevansForMe, styles.terryevansForMeLayout]}>
          #TerryEvans For me I was working remotely again after 3 weeks. My job
          is flexible but I definitely would have felt good enough to go in
          after 4 weeks.
        </Text>
        <Text style={[styles.pameladarrenIveHeard, styles.ivePosition]}>
          #PamelaDarren I’ve heard of one in Reno that does minimally invasive
          but I don’t know what the success rates are.
        </Text>
        <Text style={[styles.terryevansIKnew, styles.terryevansIKnewTypo]}>
          #TerryEvans I knew one girl who got it from my school. I can send her
          your way!!
        </Text>
        <Text style={[styles.anonymoususerIveHad, styles.ivePosition]}>
          #AnonymousUser I’ve had three since having m fusion at 15. Two
          c-section and one natural birth. You got this mama!
        </Text>
        <Image
          style={[styles.user03cIcon2, styles.frameViewPosition]}
          contentFit="cover"
          source={require("../assets/user-03c6.png")}
        />
        <Image
          style={[styles.frameIcon3, styles.frameIconLayout]}
          contentFit="cover"
          source={require("../assets/frame3.png")}
        />
        <Image
          style={[styles.iconsinstagramLike3, styles.iconsinstagramPosition]}
          contentFit="cover"
          source={require("../assets/iconsinstagramlike.png")}
        />
        <Image
          style={[styles.frameIcon4, styles.frameIconLayout]}
          contentFit="cover"
          source={require("../assets/frame3.png")}
        />
        <Image
          style={[styles.iconsinstagramLike4, styles.iconsinstagramLayout]}
          contentFit="cover"
          source={require("../assets/iconsinstagramlike.png")}
        />
        <Image
          style={[styles.frameIcon5, styles.frameIconLayout]}
          contentFit="cover"
          source={require("../assets/frame3.png")}
        />
        <Image
          style={[styles.iconsinstagramLike5, styles.iconsinstagramLayout]}
          contentFit="cover"
          source={require("../assets/iconsinstagramlike.png")}
        />
        <Text style={[styles.pageTitle5, styles.pageTypo1]}>
          Load more comments
        </Text>
        <View style={[styles.wrapperRectangle5, styles.frameParentFlexBox]}>
          <Image
            style={styles.wrapperRectangle5Child}
            contentFit="cover"
            source={require("../assets/rectangle-5.png")}
          />
        </View>
        <View style={[styles.olderChild3, styles.olderLayout]} />
        <Text style={[styles.pageTitle6, styles.pageTypo]}>
          What would you guys recommend for scar healing? What kind of scar
          tape? And when did you start going into the sun with it?
        </Text>
        <Text style={[styles.pageTitle6, styles.pageTypo]}>
          What would you guys recommend for scar healing? What kind of scar
          tape? And when did you start going into the sun with it?
        </Text>
        <Text style={[styles.pageTitle8, styles.pageTypo]}>
          #AnonymousUser Silicon scar tape, vitamin E oil...
        </Text>
        <TimeContainer2 />
        <Text style={[styles.popular, styles.newPosition]}>Popular</Text>
        <Text style={[styles.new, styles.newPosition]}>New</Text>
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
            onPress={openLeftSideContainer}
          >
            <View style={[styles.time, styles.timeLayout]}>
              <Text style={styles.text}>9:41</Text>
            </View>
          </Pressable>
        </View>
        <View style={[styles.bttomBar, styles.bttomBarPosition]}>
          <View style={[styles.frameParent, styles.bttomBarPosition]}>
            <View style={[styles.frameWrapper, styles.wrapperFlexBox]}>
              <Image
                style={styles.frameIcon6}
                contentFit="cover"
                source={require("../assets/frame4.png")}
              />
            </View>
            <Image
              style={[styles.frameIcon7, styles.frameIcon7SpaceBlock]}
              contentFit="cover"
              source={require("../assets/frame5.png")}
            />
            <View
              style={[
                styles.vuesaxlinearmessageWrapper,
                styles.frameIcon7SpaceBlock,
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
                styles.frameIcon7SpaceBlock,
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

      <Modal
        animationType="fade"
        transparent
        visible={leftSideContainerVisible}
      >
        <View style={styles.leftSideContainerOverlay}>
          <Pressable
            style={styles.leftSideContainerBg}
            onPress={closeLeftSideContainer}
          />
          <Chosen onClose={closeLeftSideContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  iconsLayout: {
    height: 17,
    width: 37,
    flexDirection: "row",
    top: "50%",
    position: "absolute",
  },
  iconsinstagramLayout: {
    height: 13,
    width: 12,
  },
  olderChildPosition: {
    width: 350,
    backgroundColor: Color.colorPalegoldenrod_100,
    left: 20,
    position: "absolute",
  },
  olderLayout: {
    width: 317,
    backgroundColor: Color.colorBeige_300,
  },
  frameIconLayout1: {
    height: 15,
    width: 16,
    overflow: "hidden",
  },
  pameladarrenTypo: {
    height: 16,
    width: 129,
    textAlign: "left",
    color: Color.colorDarkolivegreen,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  user03cIconLayout: {
    height: 26,
    borderRadius: Border.br_81xl,
    width: 26,
  },
  pageTypo2: {
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.robotoSlabRegular,
    lineHeight: 18,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
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
  framePosition: {
    left: 29,
    overflow: "hidden",
    position: "absolute",
  },
  frameViewPosition: {
    left: 36,
    overflow: "hidden",
    position: "absolute",
  },
  frameIconLayout: {
    width: 18,
    height: 16,
    top: "50%",
    overflow: "hidden",
    position: "absolute",
  },
  iconsinstagramPosition: {
    left: 355,
    height: 13,
    width: 12,
    top: "50%",
    position: "absolute",
  },
  terryevansIKnewTypo: {
    width: 309,
    lineHeight: 14,
    fontSize: FontSize.size_4xs,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.robotoSlabRegular,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  terryevansForMeLayout: {
    height: 42,
    width: 309,
  },
  ivePosition: {
    left: 39,
    lineHeight: 14,
    fontSize: FontSize.size_4xs,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.robotoSlabRegular,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  frameParentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
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
  bttomBarPosition: {
    width: 390,
    bottom: 0,
    position: "absolute",
  },
  wrapperFlexBox: {
    padding: Padding.p_xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  frameIcon7SpaceBlock: {
    marginLeft: 30,
    overflow: "hidden",
  },
  menuIcon: {
    top: 44,
    left: 15,
    width: 34,
    height: 34,
    overflow: "hidden",
    position: "absolute",
  },
  iconsinstagramLike: {
    marginLeft: 3,
  },
  iconsBottom: {
    marginTop: 306,
    left: 329,
    flexDirection: "row",
  },
  olderChild: {
    top: 1203,
    height: 218,
  },
  olderItem: {
    top: 1250,
    height: 92,
    left: 35,
    overflow: "hidden",
    position: "absolute",
  },
  frameIcon1: {
    marginLeft: 3,
  },
  iconsBottom1: {
    marginTop: -6,
    left: 24,
    flexDirection: "row",
  },
  anonymoususer: {
    top: 1222,
    left: 61,
    lineHeight: 11,
    fontSize: FontSize.semiBoldP4_size,
    width: 129,
    textAlign: "left",
    color: Color.colorDarkolivegreen,
  },
  user03cIcon: {
    top: 1214,
    left: 29,
    overflow: "hidden",
    position: "absolute",
  },
  pageTitle: {
    top: 1256,
    left: 41,
    width: 297,
    height: 80,
  },
  pageTitle1: {
    top: 1400,
    left: 144,
    width: 105,
  },
  frame: {
    top: 1217,
    width: 19,
    height: 19,
  },
  icons: {
    height: "0.76%",
    width: "3.67%",
    top: "61.44%",
    right: "87.36%",
    bottom: "37.8%",
    left: "8.97%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  olderInner: {
    top: 852,
    height: 312,
  },
  samanthahayworth: {
    top: 869,
    left: 66,
    lineHeight: 11,
    fontSize: FontSize.semiBoldP4_size,
    width: 129,
    textAlign: "left",
    color: Color.colorDarkolivegreen,
  },
  pageTitle2: {
    top: 1142,
    left: 137,
  },
  frameView: {
    top: 894,
    height: 152,
    width: 317,
    backgroundColor: Color.colorBeige_300,
  },
  image1Icon: {
    top: 861,
    left: 32,
    borderRadius: 16,
    height: 27,
    width: 26,
    position: "absolute",
  },
  pageTitle3: {
    top: 904,
    left: 44,
    width: 304,
  },
  rectangleView: {
    top: 458,
    height: 348,
  },
  user03cIcon1: {
    top: 466,
    left: 30,
    overflow: "hidden",
    position: "absolute",
  },
  olderChild1: {
    marginTop: -862,
    height: 290,
    top: "50%",
  },
  pameladarren: {
    marginTop: -842,
    left: 68,
    fontSize: FontSize.label_size,
    lineHeight: 13,
    top: "50%",
  },
  pageTitle4: {
    marginTop: -594,
    width: 101,
    textAlign: "center",
    color: Color.gray2,
    fontFamily: FontFamily.abhayaLibreBold,
    lineHeight: 22,
    fontWeight: "700",
    left: 144,
    fontSize: FontSize.size_2xs,
    top: "50%",
    position: "absolute",
  },
  frameIcon2: {
    marginTop: -732,
    left: 354,
  },
  iconsinstagramLike2: {
    marginTop: -716,
  },
  olderChild2: {
    marginTop: -811,
    left: 37,
    width: 315,
    height: 108,
    backgroundColor: Color.colorBeige_300,
    top: "50%",
    overflow: "hidden",
    position: "absolute",
  },
  toAllThe: {
    marginTop: -804,
    left: 45,
    width: 302,
    height: 101,
    top: "50%",
  },
  samanthahayworthOnlyIssue: {
    marginTop: -662,
    left: 38,
    height: 52,
  },
  terryevansForMe: {
    marginTop: 357,
    left: 42,
    lineHeight: 14,
    fontSize: FontSize.size_4xs,
    height: 42,
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.robotoSlabRegular,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  pameladarrenIveHeard: {
    marginTop: 63,
    height: 42,
    width: 309,
  },
  terryevansIKnew: {
    marginTop: 101,
    left: 35,
  },
  anonymoususerIveHad: {
    marginTop: -696,
    width: 303,
    height: 30,
  },
  user03cIcon2: {
    top: 145,
    height: 26,
    borderRadius: Border.br_81xl,
    width: 26,
  },
  frameIcon3: {
    marginTop: 321,
    left: 354,
  },
  iconsinstagramLike3: {
    marginTop: 337,
  },
  frameIcon4: {
    marginTop: 25,
    left: 353,
  },
  iconsinstagramLike4: {
    marginTop: 41,
    left: 354,
    top: "50%",
    position: "absolute",
  },
  frameIcon5: {
    marginTop: -342,
    left: 301,
  },
  iconsinstagramLike5: {
    marginTop: -326,
    left: 302,
    top: "50%",
    position: "absolute",
  },
  pageTitle5: {
    top: 781,
    left: 141,
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
    top: 504,
    left: 95,
    borderRadius: Border.br_3xs,
    width: 198,
    height: 175,
    display: "flex",
    position: "absolute",
  },
  olderChild3: {
    top: 683,
    height: 69,
    left: 43,
    overflow: "hidden",
    position: "absolute",
  },
  pageTitle6: {
    top: 690,
    left: 48,
  },
  pageTitle8: {
    top: 754,
    left: 43,
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
  leftSideContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  leftSideContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
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
    textAlign: "center",
    color: Color.labelColorLightPrimary,
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
  frameIcon6: {
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  frameWrapper: {
    overflow: "hidden",
  },
  frameIcon7: {
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
  older: {
    backgroundColor: Color.colorBeige_200,
    height: 1984,
    width: "100%",
    flex: 1,
  },
});

export default Older;
