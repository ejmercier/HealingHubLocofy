import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const GraceBaileyCard = () => {
  return (
    <View style={styles.graceBaileyParent}>
      <Text style={styles.graceBailey}>Grace Bailey</Text>
      <View style={[styles.groupParent, styles.parentFlexBox]}>
        <View style={styles.groupChildLayout}>
          <View style={[styles.groupChild, styles.groupChildLayout]} />
          <Image
            style={styles.dateIcon}
            contentFit="cover"
            source={require("../assets/date.png")}
          />
        </View>
        <View style={styles.frame}>
          <View style={styles.frame1}>
            <Text style={[styles.selectADate, styles.selectADateTypo]}>
              Select a date first to see visiting time options
            </Text>
            <Text
              style={[
                styles.kamiAkanMembantu,
                styles.kamiAkanMembantuSpaceBlock,
              ]}
            >
              Kami akan membantu menemukan paket yang sesuai kebutuhan Kamu
            </Text>
            <View
              style={[
                styles.pelajariLebihLanjutParent,
                styles.kamiAkanMembantuSpaceBlock,
              ]}
            >
              <Text style={styles.pelajariLebihLanjut}>
                Pelajari Lebih lanjut
              </Text>
              <Image
                style={styles.icArrowRightIcon}
                contentFit="cover"
                source={require("../assets/icarrowright1.png")}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  groupChildLayout: {
    height: 56,
    width: 57,
  },
  selectADateTypo: {
    color: Color.primaryNavy1,
    fontSize: FontSize.boldP2_size,
    textAlign: "left",
  },
  kamiAkanMembantuSpaceBlock: {
    marginTop: 4,
    display: "none",
    alignSelf: "stretch",
  },
  graceBailey: {
    fontSize: FontSize.boldH2_size,
    color: Color.neutralColorCoolGrey600,
    textAlign: "left",
    fontFamily: FontFamily.boldH5,
    fontWeight: "700",
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_xl,
    backgroundColor: Color.primaryNavy5,
    position: "absolute",
  },
  dateIcon: {
    top: 16,
    left: 16,
    width: 25,
    height: 25,
    overflow: "hidden",
    position: "absolute",
  },
  selectADate: {
    alignSelf: "stretch",
    fontFamily: FontFamily.boldH5,
    fontWeight: "700",
    color: Color.primaryNavy1,
  },
  kamiAkanMembantu: {
    fontFamily: FontFamily.regulerP2,
    color: Color.primaryNavy1,
    fontSize: FontSize.boldP2_size,
    textAlign: "left",
  },
  pelajariLebihLanjut: {
    color: Color.colorForestgreen,
    fontSize: FontSize.boldP2_size,
    textAlign: "left",
    fontFamily: FontFamily.boldH5,
    fontWeight: "700",
  },
  icArrowRightIcon: {
    width: 15,
    height: 15,
    marginLeft: 4,
    overflow: "hidden",
  },
  pelajariLebihLanjutParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  frame1: {
    alignSelf: "stretch",
  },
  frame: {
    flex: 1,
    marginLeft: 12,
  },
  groupParent: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.neutralColorCoolGrey50,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: 343,
    justifyContent: "center",
    padding: Padding.p_base,
    marginTop: 12,
  },
  graceBaileyParent: {
    top: 585,
    left: 24,
    width: 341,
    position: "absolute",
  },
});

export default GraceBaileyCard;
