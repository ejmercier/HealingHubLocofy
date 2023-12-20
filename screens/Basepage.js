import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Basepage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.basepage}>
      <Pressable
        style={styles.pageTitle}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={[styles.login, styles.loginTypo]}>Login</Text>
      </Pressable>
      <Pressable
        style={[styles.button, styles.buttonPosition]}
        onPress={() => navigation.navigate("CreateAccount")}
      >
        <View style={styles.buttonChild} />
        <Text style={[styles.pageTitle1, styles.pageTypo]}>Create account</Text>
      </Pressable>
      <Text style={[styles.pageTitle2, styles.buttonPosition]}>
        Welcome to HealingHub
      </Text>
      <Text style={[styles.pageTitle3, styles.loginTypo]}>
        Get access to the wisdom of patients who’ve taken the path before you
        and a wellness community like no other.
      </Text>
      <Image
        style={styles.svg6449Icon}
        contentFit="cover"
        source={require("../assets/svg6449.png")}
      />
      <Image
        style={styles.forwardIcon}
        contentFit="cover"
        source={require("../assets/forward.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loginTypo: {
    width: 354,
    textAlign: "center",
    fontFamily: FontFamily.abhayaLibreBold,
    fontWeight: "700",
  },
  buttonPosition: {
    left: 18,
    width: 354,
    position: "absolute",
  },
  pageTypo: {
    textAlign: "center",
    fontWeight: "700",
  },
  login: {
    fontSize: FontSize.boldH2_size,
    color: Color.colorOlivedrab,
  },
  pageTitle: {
    left: 19,
    top: 735,
    position: "absolute",
  },
  buttonChild: {
    height: "100%",
    width: "96.89%",
    top: "0%",
    right: "0.56%",
    bottom: "0%",
    left: "2.54%",
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorDarkkhaki,
    position: "absolute",
  },
  pageTitle1: {
    top: "33.33%",
    left: "0%",
    fontSize: FontSize.size_4xl,
    color: Color.conditionalPopOver,
    fontFamily: FontFamily.abhayaLibreBold,
    textAlign: "center",
    fontWeight: "700",
    position: "absolute",
    width: "100%",
  },
  button: {
    top: 646,
    height: 60,
  },
  pageTitle2: {
    top: 422,
    fontSize: 34,
    fontFamily: FontFamily.dMSansBold,
    color: Color.labelColorLightPrimary,
    textAlign: "center",
    fontWeight: "700",
    left: 18,
  },
  pageTitle3: {
    top: 529,
    left: 27,
    fontSize: FontSize.size_mid,
    lineHeight: 22,
    color: Color.gray2,
    position: "absolute",
  },
  svg6449Icon: {
    top: 243,
    left: 131,
    width: 128,
    height: 128,
    position: "absolute",
    overflow: "hidden",
  },
  forwardIcon: {
    top: 788,
    left: 204,
    width: 18,
    height: 18,
    position: "absolute",
  },
  basepage: {
    backgroundColor: Color.conditionalPopOver,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Basepage;
