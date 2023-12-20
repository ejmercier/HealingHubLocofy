import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import HamburgerMenu from "./HamburgerMenu";
import Search from "./Search";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const TimeContainer3 = () => {
  const [menuIconVisible, setMenuIconVisible] = useState(false);
  const [frameVisible, setFrameVisible] = useState(false);

  const openMenuIcon = useCallback(() => {
    setMenuIconVisible(true);
  }, []);

  const closeMenuIcon = useCallback(() => {
    setMenuIconVisible(false);
  }, []);

  const openFrame = useCallback(() => {
    setFrameVisible(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameVisible(false);
  }, []);

  return (
    <>
      <View style={[styles.topBar, styles.topPosition]}>
        <View style={[styles.topBarChild, styles.topPosition]} />
        <View style={[styles.statusBarIphone1313Pr, styles.textPosition]}>
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
              <Text style={[styles.text, styles.textPosition]}>9:41</Text>
            </View>
          </View>
        </View>
        <Pressable
          style={[styles.menu, styles.menuPosition]}
          onPress={openMenuIcon}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/menu.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.topBarItem, styles.timeLayout]}
          onPress={openFrame}
        />
        <Image
          style={styles.layer1Icon}
          contentFit="cover"
          source={require("../assets/layer-11.png")}
        />
        <Text style={styles.addTags}>Add Tags</Text>
        <Image
          style={[styles.layer11Icon, styles.menuPosition]}
          contentFit="cover"
          source={require("../assets/layer-1-1.png")}
        />
      </View>

      <Modal animationType="fade" transparent visible={menuIconVisible}>
        <View style={styles.menuIconOverlay}>
          <Pressable style={styles.menuIconBg} onPress={closeMenuIcon} />
          <HamburgerMenu onClose={closeMenuIcon} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={frameVisible}>
        <View style={styles.frameOverlay}>
          <Pressable style={styles.frameBg} onPress={closeFrame} />
          <Search onClose={closeFrame} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  topPosition: {
    height: 88,
    top: 0,
    position: "absolute",
  },
  textPosition: {
    left: 0,
    position: "absolute",
  },
  iconPosition: {
    height: 11,
    left: "50%",
    position: "absolute",
  },
  timeLayout: {
    height: 21,
    position: "absolute",
  },
  menuPosition: {
    top: 44,
    position: "absolute",
  },
  topBarChild: {
    left: 5,
    backgroundColor: Color.colorBeige_100,
    width: 390,
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
  },
  time: {
    marginLeft: -27,
    borderRadius: Border.br_5xl,
    width: 54,
    left: "50%",
    top: 0,
  },
  leftSide: {
    marginLeft: -170.5,
    top: 12,
    width: 54,
    left: "50%",
  },
  statusBarIphone1313Pr: {
    height: 44,
    overflow: "hidden",
    width: 395,
    top: 0,
  },
  menuIconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  menuIconBg: {
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
  menu: {
    left: 20,
    width: 34,
    height: 34,
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
  topBarItem: {
    top: 53,
    left: 287,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorPalegoldenrod_200,
    width: 96,
    justifyContent: "center",
    alignItems: "center",
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
    height: "18.41%",
    width: "14.68%",
    top: "67.05%",
    left: "77.47%",
    fontSize: FontSize.semiBoldP4_size,
    lineHeight: 11,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorLightslategray,
    textAlign: "left",
    position: "absolute",
  },
  layer11Icon: {
    left: 182,
    width: 31,
    height: 32,
    overflow: "hidden",
  },
  topBar: {
    left: -5,
    width: 395,
  },
});

export default TimeContainer3;
