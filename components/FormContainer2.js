import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Padding, Color } from "../GlobalStyles";

const FormContainer2 = () => {
  return (
    <View style={styles.bttomBar}>
      <View style={styles.frameParent}>
        <View style={[styles.frameWrapper, styles.frameWrapperFlexBox]}>
          <Image
            style={styles.frameIcon}
            contentFit="cover"
            source={require("../assets/frame8.png")}
          />
        </View>
        <View style={[styles.frameContainer, styles.frameWrapperFlexBox]}>
          <Image
            style={styles.frameIcon1}
            contentFit="cover"
            source={require("../assets/frame9.png")}
          />
        </View>
        <Image
          style={[styles.vuesaxlinearmessageIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vuesaxlinearmessage1.png")}
        />
        <View
          style={[
            styles.vuesaxlinearprofileWrapper,
            styles.frameWrapperFlexBox,
          ]}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/vuesaxlinearprofile2.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameWrapperFlexBox: {
    padding: Padding.p_xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  frameIcon: {
    width: 44,
    height: 42,
    overflow: "hidden",
  },
  frameWrapper: {
    width: 87,
  },
  frameIcon1: {
    width: 28,
    height: 29,
    overflow: "hidden",
  },
  frameContainer: {
    width: 89,
    marginLeft: 15,
  },
  vuesaxlinearmessageIcon: {
    marginLeft: 15,
  },
  vuesaxlinearprofileWrapper: {
    flex: 1,
    marginLeft: 15,
  },
  frameParent: {
    left: 0,
    backgroundColor: Color.colorPalegoldenrod_200,
    height: 82,
    paddingLeft: Padding.p_mini,
    paddingTop: Padding.p_base,
    paddingRight: Padding.p_5xl,
    paddingBottom: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    width: 390,
    bottom: 0,
    position: "absolute",
  },
  bttomBar: {
    right: 0,
    height: 80,
    width: 390,
    bottom: 0,
    position: "absolute",
  },
});

export default FormContainer2;
