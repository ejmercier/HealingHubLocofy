import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button1 from "../components/Button1";
import StateTypingErrorFalseIco from "../components/StateTypingErrorFalseIco";
import Property1DefaultState from "../components/Property1DefaultState";
import { Padding, Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <View style={[styles.button, styles.buttonPosition]}>
        <Image
          style={styles.appleIcon}
          contentFit="cover"
          source={require("../assets/apple.png")}
        />
        <Text style={[styles.signInWith, styles.signInWithLayout]}>
          Sign in with Apple
        </Text>
      </View>
      <View style={[styles.button1, styles.buttonPosition]}>
        <Image
          style={styles.appleIcon}
          contentFit="cover"
          source={require("../assets/google-brand.png")}
        />
        <Text style={[styles.signInWith, styles.signInWithLayout]}>
          Sign in with Google
        </Text>
      </View>
      <View style={[styles.rectangleParent, styles.groupItemLayout]}>
        <View style={styles.groupChild} />
        <View style={[styles.groupItem, styles.groupItemLayout]} />
        <Text style={[styles.or, styles.orTypo]}>or</Text>
      </View>
      <Button1
        pageTitle="Login"
        buttonPosition="absolute"
        buttonTop={646}
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
        onButtonPress={() => navigation.navigate("CreateAccount")}
      />
      <StateTypingErrorFalseIco
        exclamation={require("../assets/exclamation2.png")}
        iconLeft={require("../assets/icon-left2.png")}
        emailAddress="•••••••••••••"
        arrowDown={require("../assets/eye-show.png")}
        stateTypingErrorFalseIcoPosition="absolute"
        stateTypingErrorFalseIcoWidth={318}
        stateTypingErrorFalseIcoHeight={40}
        stateTypingErrorFalseIcoTop={458}
        stateTypingErrorFalseIcoLeft={42}
        selectedShapeWidth="101.89%"
        selectedShapeRight="-0.94%"
        selectedShapeLeft="-0.94%"
        arrowDownIconOverflow="hidden"
      />
      <Pressable
        style={styles.notAMemberCreateAnAccoun}
        onPress={() => navigation.navigate("CreateAccount")}
      >
        <Text style={[styles.notAMemberContainer, styles.iconLayout]}>
          <Text style={styles.notAMember}>Not a member?</Text>
          <Text style={styles.text}>{` `}</Text>
          <Text style={styles.createAnAccount}>Create an account.</Text>
        </Text>
      </Pressable>
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
        property1DefaultStateWidth={312}
        property1DefaultStateTop={400}
        property1DefaultStateLeft={48}
        property1DefaultStateMarginTop="unset"
        keyFieldFontFamily="PTMono-Regular"
        keyFieldColor="#323941"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonPosition: {
    paddingBottom: Padding.p_smi,
    paddingRight: Padding.p_xl,
    paddingTop: Padding.p_smi,
    paddingLeft: Padding.p_5xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_9xs,
    width: 331,
    left: 30,
    position: "absolute",
    overflow: "hidden",
  },
  signInWithLayout: {
    lineHeight: 22,
    fontSize: FontSize.body_size,
  },
  groupItemLayout: {
    height: 17,
    position: "absolute",
  },
  orTypo: {
    fontFamily: FontFamily.body,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  appleIcon: {
    width: 18,
    height: 18,
    overflow: "hidden",
  },
  signInWith: {
    fontWeight: "500",
    fontFamily: FontFamily.buttonMedium,
    color: Color.conditionalPopOver,
    marginLeft: 6,
    textAlign: "left",
  },
  button: {
    top: 290,
    backgroundColor: Color.black1,
    height: 43,
  },
  button1: {
    top: 234,
    backgroundColor: Color.colorDarkkhaki,
    height: 42,
  },
  groupChild: {
    top: 8,
    left: 0,
    backgroundColor: Color.black20,
    height: 1,
    width: 331,
    position: "absolute",
  },
  groupItem: {
    top: 0,
    left: 153,
    width: 25,
    height: 17,
    backgroundColor: Color.conditionalPopOver,
  },
  or: {
    top: 2,
    left: 160,
    fontSize: FontSize.label_size,
    lineHeight: 14,
    width: 29,
    height: 12,
    color: Color.labelColorLightPrimary,
    textAlign: "left",
  },
  rectangleParent: {
    top: 356,
    width: 331,
    left: 30,
    height: 17,
  },
  notAMember: {
    color: Color.black60,
  },
  text: {
    color: Color.labelColorLightPrimary,
  },
  createAnAccount: {
    textDecoration: "underline",
    color: Color.colorOlivedrab,
  },
  notAMemberContainer: {
    top: "0%",
    left: "0%",
    textAlign: "center",
    fontFamily: FontFamily.body,
    position: "absolute",
    lineHeight: 22,
    fontSize: FontSize.body_size,
  },
  notAMemberCreateAnAccoun: {
    top: 734,
    left: 77,
    width: 237,
    height: 61,
    position: "absolute",
  },
  icon: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  vector: {
    left: "6.92%",
    top: "7.23%",
    right: "91.54%",
    bottom: "91.35%",
    width: "1.54%",
    height: "1.42%",
    position: "absolute",
  },
  login: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.conditionalPopOver,
  },
});

export default Login;
