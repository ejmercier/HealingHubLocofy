import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import Search from "./Search";
import Chosen from "./Chosen";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const TimeContainer2 = () => {
  const [frameVisible, setFrameVisible] = useState(false);
  const [layer11IconVisible, setLayer11IconVisible] = useState(false);

  const openFrame = useCallback(() => {
    setFrameVisible(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameVisible(false);
  }, []);

  const openLayer11Icon = useCallback(() => {
    setLayer11IconVisible(true);
  }, []);

  const closeLayer11Icon = useCallback(() => {
    setLayer11IconVisible(false);
  }, []);

  return (
    <>
      <View style={styles.topBar}>
        <View style={[styles.topBarChild, styles.topPosition]} />
        <View style={[styles.topBarItem, styles.topPosition]} />
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
        <Pressable
          style={[styles.topBarInner, styles.topBarInnerLayout]}
          onPress={openFrame}
        />
        <Image
          style={styles.layer1Icon}
          contentFit="cover"
          source={require("../assets/layer-12.png")}
        />
        <Text style={[styles.addTags, styles.adultTypo]}>Add Tags</Text>
        <View style={[styles.adultWrapper, styles.topBarInnerLayout]}>
          <Text style={styles.adultTypo}>Adult</Text>
        </View>
        <Pressable style={styles.layer11} onPress={openLayer11Icon}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/layer-1-1.png")}
          />
        </Pressable>
      </View>

      <Modal animationType="fade" transparent visible={frameVisible}>
        <View style={styles.frameOverlay}>
          <Pressable style={styles.frameBg} onPress={closeFrame} />
          <Search onClose={closeFrame} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={layer11IconVisible}>
        <View style={styles.layer11IconOverlay}>
          <Pressable style={styles.layer11IconBg} onPress={closeLayer11Icon} />
          <Chosen onClose={closeLayer11Icon} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  topPosition: {
    width: 390,
    left: 5,
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
  topBarInnerLayout: {
    alignItems: "center",
    justifyContent: "center",
    width: 96,
    backgroundColor: Color.colorPalegoldenrod_200,
    borderRadius: Border.br_81xl,
    top: 53,
    height: 21,
    position: "absolute",
  },
  adultTypo: {
    textAlign: "left",
    color: Color.colorLightslategray,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 11,
    fontSize: FontSize.semiBoldP4_size,
  },
  topBarChild: {
    backgroundColor: Color.colorBeige_100,
    height: 88,
    top: 0,
  },
  topBarItem: {
    top: 88,
    backgroundColor: Color.colorBeige_200,
    height: 27,
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
    color: Color.labelColorLightPrimary,
    textAlign: "center",
    height: 20,
    width: 54,
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
    height: 44,
    overflow: "hidden",
    left: 0,
    width: 395,
    top: 0,
    position: "absolute",
  },
  frameOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  topBarInner: {
    left: 287,
  },
  layer1Icon: {
    top: 57,
    left: 357,
    width: 16,
    height: 15,
    overflow: "hidden",
    position: "absolute",
  },
  addTags: {
    height: "13.74%",
    width: "12.15%",
    top: "50.43%",
    left: "77.47%",
    position: "absolute",
  },
  adultWrapper: {
    left: 184,
    flexDirection: "row",
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_base,
  },
  layer11IconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  layer11IconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  layer11: {
    left: 36,
    top: 45,
    width: 31,
    height: 32,
    position: "absolute",
  },
  topBar: {
    left: -5,
    height: 115,
    width: 395,
    top: 0,
    position: "absolute",
  },
});

export default TimeContainer2;
