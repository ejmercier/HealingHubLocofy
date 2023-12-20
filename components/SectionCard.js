import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color } from "../GlobalStyles";

const SectionCard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frameParent}>
      <Pressable
        style={[styles.frameWrapper, styles.wrapperFlexBox]}
        onPress={() => navigation.navigate("Homepage")}
      >
        <Image
          style={styles.frameIcon}
          contentFit="cover"
          source={require("../assets/frame4.png")}
        />
      </Pressable>
      <Image
        style={[styles.frameIcon1, styles.frameIcon1SpaceBlock]}
        contentFit="cover"
        source={require("../assets/frame5.png")}
      />
      <View
        style={[styles.vuesaxlinearmessageWrapper, styles.frameIcon1SpaceBlock]}
      >
        <Image
          style={styles.vuesaxlinearmessageIcon}
          contentFit="cover"
          source={require("../assets/vuesaxlinearmessage1.png")}
        />
      </View>
      <View
        style={[styles.vuesaxlinearmessageWrapper, styles.frameIcon1SpaceBlock]}
      >
        <Image
          style={styles.vuesaxlinearmessageIcon}
          contentFit="cover"
          source={require("../assets/vuesaxlinearprofile1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperFlexBox: {
    padding: Padding.p_xs,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  frameIcon1SpaceBlock: {
    marginLeft: 12,
    overflow: "hidden",
  },
  frameIcon: {
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  frameWrapper: {
    overflow: "hidden",
  },
  frameIcon1: {
    width: 38,
    height: 38,
  },
  vuesaxlinearmessageIcon: {
    width: 24,
    height: 24,
  },
  vuesaxlinearmessageWrapper: {
    padding: Padding.p_xs,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  frameParent: {
    position: "absolute",
    top: 764,
    left: 0,
    backgroundColor: Color.colorPalegoldenrod_200,
    width: 390,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default SectionCard;
