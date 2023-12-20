import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Button1 from "../components/Button1";
import Property1DefaultState from "../components/Property1DefaultState";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const CreateAccount = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.createAccount}>
      <Text style={[styles.pageTitle, styles.pageTypo]}>Create an account</Text>
      <Text style={[styles.pageTitle1, styles.pageTypo]}>Optional:</Text>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("Basepage")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
      <Button1
        pageTitle="Create account"
        buttonPosition="absolute"
        buttonTop={643}
        buttonLeft={18}
        buttonWidth={354}
        buttonHeight={60}
        buttonRight="unset"
        buttonBottom="unset"
        rectangleViewWidth="96.89%"
        rectangleViewRight="0.56%"
        rectangleViewLeft="2.54%"
        rectangleViewBackgroundColor="#9aa769"
        pageTitleTop="33.33%"
        pageTitleFontSize={23}
        pageTitleColor="#fff"
        onButtonPress={() => navigation.navigate("WaitScreen")}
      />
      <Pressable
        style={styles.pageTitle2}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={[styles.alreadyHaveAnAccount, styles.pageTitle3Typo]}>
          Already have an account?
        </Text>
      </Pressable>
      <Text style={[styles.pageTitle3, styles.pageTitle3Typo]}>
        Stay anonymous to view, authenticate to post.
      </Text>
      <View style={[styles.wrapperEllipse3, styles.wrapperFlexBox]}>
        <Image
          style={styles.wrapperChildPosition}
          contentFit="cover"
          source={require("../assets/ellipse-3.png")}
        />
      </View>
      <View style={[styles.wrapperEllipse2, styles.wrapperFlexBox]}>
        <Image
          style={styles.wrapperChildPosition}
          contentFit="cover"
          source={require("../assets/ellipse-2.png")}
        />
      </View>
      <View style={[styles.male, styles.maleLayout]}>
        <Button1
          pageTitle="Male"
          buttonPosition="absolute"
          buttonTop="0%"
          buttonLeft="0%"
          buttonWidth="100%"
          buttonHeight="100%"
          buttonRight="0%"
          buttonBottom="0%"
          rectangleViewWidth="96.9%"
          rectangleViewRight="0.58%"
          rectangleViewLeft="2.52%"
          rectangleViewBackgroundColor="#dadada"
          pageTitleTop="33.25%"
          pageTitleFontSize={17}
          pageTitleColor="#000"
        />
      </View>
      <View style={[styles.female, styles.maleLayout]}>
        <View style={[styles.female1, styles.iconLayout]}>
          <Button1
            pageTitle="Female"
            buttonPosition="absolute"
            buttonTop="0%"
            buttonLeft="0%"
            buttonWidth="100%"
            buttonHeight="100%"
            buttonRight="0%"
            buttonBottom="0%"
            rectangleViewWidth="96.9%"
            rectangleViewRight="0.58%"
            rectangleViewLeft="2.52%"
            rectangleViewBackgroundColor="#dadada"
            pageTitleTop="33.25%"
            pageTitleFontSize={17}
            pageTitleColor="#000"
          />
        </View>
      </View>
      <Property1DefaultState
        blinkingCursor={require("../assets/blinking-cursor1.png")}
        blinkingCursor1={require("../assets/blinking-cursor1.png")}
        blinkingCursor2={require("../assets/blinking-cursor1.png")}
        blinkingCursor3={require("../assets/blinking-cursor1.png")}
        blinkingCursor4={require("../assets/blinking-cursor1.png")}
        blinkingCursor5={require("../assets/blinking-cursor1.png")}
        blinkingCursor6={require("../assets/blinking-cursor1.png")}
        blinkingCursor7={require("../assets/blinking-cursor1.png")}
        blinkingCursor8={require("../assets/blinking-cursor1.png")}
        blinkingCursor9={require("../assets/blinking-cursor1.png")}
        blinkingCursor10={require("../assets/blinking-cursor1.png")}
        blinkingCursor11={require("../assets/blinking-cursor1.png")}
        blinkingCursor12={require("../assets/blinking-cursor1.png")}
        blinkingCursor13={require("../assets/blinking-cursor1.png")}
        blinkingCursor14={require("../assets/blinking-cursor1.png")}
        blinkingCursor15={require("../assets/blinking-cursor1.png")}
        blinkingCursor16={require("../assets/blinking-cursor1.png")}
        blinkingCursor17={require("../assets/blinking-cursor1.png")}
        blinkingCursor18={require("../assets/blinking-cursor1.png")}
        blinkingCursor19={require("../assets/blinking-cursor1.png")}
        blinkingCursor20={require("../assets/blinking-cursor1.png")}
        blinkingCursor21={require("../assets/blinking-cursor1.png")}
        blinkingCursor22={require("../assets/blinking-cursor1.png")}
        blinkingCursor23={require("../assets/blinking-cursor1.png")}
        blinkingCursor24={require("../assets/blinking-cursor1.png")}
        blinkingCursor25={require("../assets/blinking-cursor1.png")}
        keyField="Name"
        property1DefaultStatePosition="absolute"
        property1DefaultStateWidth={311}
        property1DefaultStateTop={268}
        property1DefaultStateLeft={43}
        property1DefaultStateMarginTop="unset"
        keyFieldFontFamily="PTMono-Regular"
        keyFieldColor="#323941"
      />
      <Property1DefaultState
        blinkingCursor={require("../assets/blinking-cursor1.png")}
        blinkingCursor1={require("../assets/blinking-cursor1.png")}
        blinkingCursor2={require("../assets/blinking-cursor1.png")}
        blinkingCursor3={require("../assets/blinking-cursor1.png")}
        blinkingCursor4={require("../assets/blinking-cursor1.png")}
        blinkingCursor5={require("../assets/blinking-cursor1.png")}
        blinkingCursor6={require("../assets/blinking-cursor1.png")}
        blinkingCursor7={require("../assets/blinking-cursor1.png")}
        blinkingCursor8={require("../assets/blinking-cursor1.png")}
        blinkingCursor9={require("../assets/blinking-cursor1.png")}
        blinkingCursor10={require("../assets/blinking-cursor1.png")}
        blinkingCursor11={require("../assets/blinking-cursor1.png")}
        blinkingCursor12={require("../assets/blinking-cursor1.png")}
        blinkingCursor13={require("../assets/blinking-cursor1.png")}
        blinkingCursor14={require("../assets/blinking-cursor1.png")}
        blinkingCursor15={require("../assets/blinking-cursor1.png")}
        blinkingCursor16={require("../assets/blinking-cursor1.png")}
        blinkingCursor17={require("../assets/blinking-cursor1.png")}
        blinkingCursor18={require("../assets/blinking-cursor1.png")}
        blinkingCursor19={require("../assets/blinking-cursor1.png")}
        blinkingCursor20={require("../assets/blinking-cursor1.png")}
        blinkingCursor21={require("../assets/blinking-cursor1.png")}
        blinkingCursor22={require("../assets/blinking-cursor1.png")}
        blinkingCursor23={require("../assets/blinking-cursor1.png")}
        blinkingCursor24={require("../assets/blinking-cursor1.png")}
        blinkingCursor25={require("../assets/blinking-cursor1.png")}
        keyField="Email"
        property1DefaultStatePosition="absolute"
        property1DefaultStateWidth={311}
        property1DefaultStateTop={334}
        property1DefaultStateLeft={43}
        property1DefaultStateMarginTop="unset"
        keyFieldFontFamily="PTMono-Regular"
        keyFieldColor="#323941"
      />
      <Property1DefaultState
        blinkingCursor={require("../assets/blinking-cursor1.png")}
        blinkingCursor1={require("../assets/blinking-cursor1.png")}
        blinkingCursor2={require("../assets/blinking-cursor1.png")}
        blinkingCursor3={require("../assets/blinking-cursor1.png")}
        blinkingCursor4={require("../assets/blinking-cursor1.png")}
        blinkingCursor5={require("../assets/blinking-cursor1.png")}
        blinkingCursor6={require("../assets/blinking-cursor1.png")}
        blinkingCursor7={require("../assets/blinking-cursor1.png")}
        blinkingCursor8={require("../assets/blinking-cursor1.png")}
        blinkingCursor9={require("../assets/blinking-cursor1.png")}
        blinkingCursor10={require("../assets/blinking-cursor1.png")}
        blinkingCursor11={require("../assets/blinking-cursor1.png")}
        blinkingCursor12={require("../assets/blinking-cursor1.png")}
        blinkingCursor13={require("../assets/blinking-cursor1.png")}
        blinkingCursor14={require("../assets/blinking-cursor1.png")}
        blinkingCursor15={require("../assets/blinking-cursor1.png")}
        blinkingCursor16={require("../assets/blinking-cursor1.png")}
        blinkingCursor17={require("../assets/blinking-cursor1.png")}
        blinkingCursor18={require("../assets/blinking-cursor1.png")}
        blinkingCursor19={require("../assets/blinking-cursor1.png")}
        blinkingCursor20={require("../assets/blinking-cursor1.png")}
        blinkingCursor21={require("../assets/blinking-cursor1.png")}
        blinkingCursor22={require("../assets/blinking-cursor1.png")}
        blinkingCursor23={require("../assets/blinking-cursor1.png")}
        blinkingCursor24={require("../assets/blinking-cursor1.png")}
        blinkingCursor25={require("../assets/blinking-cursor1.png")}
        keyField="Age"
        property1DefaultStatePosition="absolute"
        property1DefaultStateWidth={312}
        property1DefaultStateTop={400}
        property1DefaultStateLeft={43}
        property1DefaultStateMarginTop="unset"
        keyFieldFontFamily="PTMono-Regular"
        keyFieldColor="#323941"
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={styles.loginToMychart}>Login to MyChart</Text>
        <Image
          style={styles.frameIcon}
          contentFit="cover"
          source={require("../assets/frame12.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageTypo: {
    textAlign: "center",
    color: Color.labelColorLightPrimary,
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  pageTitle3Typo: {
    fontFamily: FontFamily.abhayaLibreBold,
    textAlign: "center",
    fontWeight: "700",
  },
  wrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    height: 175,
    width: 194,
    position: "absolute",
  },
  maleLayout: {
    height: 40,
    width: 155,
    top: 461,
    position: "absolute",
  },
  groupChildLayout: {
    height: 55,
    width: 314,
    position: "absolute",
  },
  pageTitle: {
    top: 153,
    left: 22,
    fontSize: FontSize.size_11xl,
    width: 354,
  },
  pageTitle1: {
    top: 526,
    left: 24,
    fontSize: FontSize.size_smi,
    width: 109,
    height: 26,
  },
  icon: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  vector: {
    left: "8.21%",
    top: "6.99%",
    right: "90.26%",
    bottom: "91.59%",
    width: "1.54%",
    height: "1.42%",
    position: "absolute",
  },
  alreadyHaveAnAccount: {
    color: Color.colorOlivedrab,
    fontSize: FontSize.boldH2_size,
    width: 354,
  },
  pageTitle2: {
    left: 18,
    top: 720,
    position: "absolute",
  },
  pageTitle3: {
    top: 209,
    fontSize: FontSize.size_mid,
    lineHeight: 22,
    color: Color.gray2,
    width: 333,
    height: 48,
    left: 39,
    position: "absolute",
  },
  wrapperChildPosition: {
    transform: [
      {
        scale: 1.046,
      },
    ],
    top: 4,
    objectFit: "contain",
    left: 0,
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  wrapperEllipse3: {
    top: -68,
    left: 220,
  },
  wrapperEllipse2: {
    top: -14,
    left: 251,
  },
  male: {
    left: 39,
  },
  female1: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
  },
  female: {
    left: 200,
  },
  groupChild: {
    top: 0,
    borderRadius: Border.br_xl,
    borderStyle: "solid",
    borderColor: Color.gray3,
    borderWidth: 0.5,
    left: 0,
    width: 314,
  },
  loginToMychart: {
    top: 22,
    left: 23,
    fontFamily: FontFamily.abhayaLibreRegular,
    color: Color.gray3,
    textAlign: "left",
    width: 203,
    height: 33,
    fontSize: FontSize.boldH2_size,
    position: "absolute",
  },
  frameIcon: {
    top: 17,
    left: 266,
    width: 23,
    height: 22,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleParent: {
    top: 549,
    left: 43,
  },
  createAccount: {
    backgroundColor: Color.conditionalPopOver,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default CreateAccount;
