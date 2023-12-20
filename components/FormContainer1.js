import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color } from "../GlobalStyles";

const FormContainer1 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.bttomBar}
      onPress={() => navigation.navigate("Homepage")}
    >
      <View style={styles.frameParent}>
        <View style={styles.frameWrapper}>
          <Image
            style={styles.frameIcon}
            contentFit="cover"
            source={require("../assets/frame10.png")}
          />
        </View>
        <View style={[styles.frameContainer, styles.wrapperFlexBox]}>
          <Image
            style={styles.frameIcon1}
            contentFit="cover"
            source={require("../assets/frame11.png")}
          />
        </View>
        <View
          style={[styles.vuesaxlinearmessageWrapper, styles.wrapperFlexBox]}
        >
          <Image
            style={styles.vuesaxlinearmessageIcon}
            contentFit="cover"
            source={require("../assets/vuesaxlinearmessage1.png")}
          />
        </View>
        <View
          style={[styles.vuesaxlinearprofileWrapper, styles.wrapperFlexBox]}
        >
          <Image
            style={styles.vuesaxlinearmessageIcon}
            contentFit="cover"
            source={require("../assets/vuesaxlinearprofile.png")}
          />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapperFlexBox: {
    marginLeft: 15,
    padding: Padding.p_xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  frameIcon: {
    width: 26,
    height: 26,
    overflow: "hidden",
  },
  frameWrapper: {
    width: 76,
    padding: Padding.p_xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  frameIcon1: {
    width: 46,
    height: 45,
    overflow: "hidden",
  },
  frameContainer: {
    width: 74,
  },
  vuesaxlinearmessageIcon: {
    width: 24,
    height: 24,
  },
  vuesaxlinearmessageWrapper: {
    width: 71,
  },
  vuesaxlinearprofileWrapper: {
    width: 88,
  },
  frameParent: {
    left: 0,
    backgroundColor: Color.colorPalegoldenrod_200,
    paddingLeft: Padding.p_mini,
    paddingTop: Padding.p_base,
    paddingRight: Padding.p_5xl,
    paddingBottom: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    height: 80,
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

export default FormContainer1;
