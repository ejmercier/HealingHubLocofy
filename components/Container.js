import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Container = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.wrapperIconParent, styles.wrapperIconFlexBox]}>
      <View style={[styles.wrapperIcon, styles.wrapperIconFlexBox]}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/icon.png")}
        />
      </View>
      <View style={styles.frame}>
        <View style={styles.frame1}>
          <Text
            style={[styles.scheduleAConsultation, styles.drHahnSpecializesTypo]}
          >
            Schedule a consultation?
          </Text>
          <Text style={[styles.drHahnSpecializes, styles.hereParentSpaceBlock]}>
            Dr. Hahn specializes in orthopedic surgery
          </Text>
          <View style={[styles.hereParent, styles.hereParentSpaceBlock]}>
            <Pressable onPress={() => navigation.navigate("Hospital")}>
              <Text style={[styles.here1, styles.here1Typo]}>Here</Text>
            </Pressable>
            <Image
              style={styles.icArrowRightIcon}
              contentFit="cover"
              source={require("../assets/icarrowright.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperIconFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  drHahnSpecializesTypo: {
    color: Color.primaryNavy1,
    fontSize: FontSize.boldP2_size,
    textAlign: "left",
  },
  hereParentSpaceBlock: {
    marginTop: 4,
    alignSelf: "stretch",
  },
  here1Typo: {
    fontFamily: FontFamily.boldH5,
    fontWeight: "700",
  },
  icon: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    left: 1,
    top: -1,
    transform: [
      {
        scale: 1.282,
      },
    ],
    position: "absolute",
  },
  wrapperIcon: {
    width: 87,
    height: 92,
    display: "flex",
  },
  scheduleAConsultation: {
    textAlign: "left",
    fontFamily: FontFamily.boldH5,
    fontWeight: "700",
    alignSelf: "stretch",
  },
  drHahnSpecializes: {
    fontFamily: FontFamily.regulerP2,
    textAlign: "left",
    color: Color.primaryNavy1,
    fontSize: FontSize.boldP2_size,
  },
  here1: {
    fontSize: FontSize.body_size,
    color: Color.colorForestgreen,
    textAlign: "left",
  },
  icArrowRightIcon: {
    width: 18,
    height: 18,
    overflow: "hidden",
    marginLeft: 4,
  },
  hereParent: {
    alignItems: "center",
    marginTop: 4,
    flexDirection: "row",
  },
  frame1: {
    alignSelf: "stretch",
  },
  frame: {
    flex: 1,
    marginLeft: 12,
  },
  wrapperIconParent: {
    top: 217,
    left: 32,
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorLavender_100,
    width: 331,
    padding: Padding.p_base,
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
  },
});

export default Container;
