import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import Search from "./Search";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const TimeContainer1 = () => {
  const [addTagsTextVisible, setAddTagsTextVisible] = useState(false);

  const openAddTagsText = useCallback(() => {
    setAddTagsTextVisible(true);
  }, []);

  const closeAddTagsText = useCallback(() => {
    setAddTagsTextVisible(false);
  }, []);

  return (
    <>
      <View style={[styles.topBar, styles.topPosition]}>
        <View style={[styles.topBarChild, styles.topPosition]} />
        <View style={[styles.statusBarIphone1313Pr, styles.iconPosition1]}>
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
        <View style={[styles.preOpWrapper, styles.wrapperFlexBox]}>
          <Text style={styles.preOpTypo}>Pre-op</Text>
        </View>
        <View style={styles.topBarItem} />
        <Image
          style={[styles.layer1Icon, styles.iconPosition1]}
          contentFit="cover"
          source={require("../assets/layer-12.png")}
        />
        <Pressable style={styles.addTags} onPress={openAddTagsText}>
          <Text style={[styles.addTags1, styles.preOpTypo]}>Add Tags</Text>
        </Pressable>
        <View style={[styles.adultWrapper, styles.wrapperFlexBox]}>
          <Text style={styles.preOpTypo}>Adult</Text>
        </View>
        <Image
          style={[styles.layer11Icon, styles.iconPosition1]}
          contentFit="cover"
          source={require("../assets/layer-1-1.png")}
        />
      </View>

      <Modal animationType="fade" transparent visible={addTagsTextVisible}>
        <View style={styles.addTagsTextOverlay}>
          <Pressable style={styles.addTagsTextBg} onPress={closeAddTagsText} />
          <Search onClose={closeAddTagsText} />
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
  iconPosition1: {
    overflow: "hidden",
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
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_13xl,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 96,
    backgroundColor: Color.colorPalegoldenrod_200,
    borderRadius: Border.br_81xl,
    top: 53,
    height: 21,
    position: "absolute",
  },
  preOpTypo: {
    textAlign: "left",
    color: Color.colorLightslategray,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 11,
    fontSize: FontSize.semiBoldP4_size,
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
    left: 0,
    overflow: "hidden",
    width: 395,
    top: 0,
  },
  preOpWrapper: {
    left: 184,
  },
  topBarItem: {
    left: 287,
    justifyContent: "center",
    alignItems: "center",
    width: 96,
    backgroundColor: Color.colorPalegoldenrod_200,
    borderRadius: Border.br_81xl,
    top: 53,
    height: 21,
    position: "absolute",
  },
  layer1Icon: {
    top: 57,
    left: 357,
    width: 16,
    height: 15,
  },
  addTagsTextOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  addTagsTextBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  addTags1: {
    height: "12.5%",
    width: "14.68%",
  },
  addTags: {
    left: "77.47%",
    top: "67.05%",
    position: "absolute",
  },
  adultWrapper: {
    left: 81,
  },
  layer11Icon: {
    top: 45,
    left: 35,
    width: 31,
    height: 32,
  },
  topBar: {
    left: -5,
    width: 395,
    height: 88,
  },
});

export default TimeContainer1;
