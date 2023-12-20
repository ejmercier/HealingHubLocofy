import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import SectionCard from "../components/SectionCard";
import { Border, FontSize, Color, FontFamily, Padding } from "../GlobalStyles";

const UserProfile = () => {
  return (
    <View style={styles.userProfile}>
      <View style={styles.wrapperRectangle4Parent}>
        <View style={[styles.wrapperRectangle4, styles.wrapperLayout1]}>
          <Image
            style={styles.wrapperChildPosition}
            contentFit="cover"
            source={require("../assets/rectangle-4.png")}
          />
        </View>
        <View style={[styles.wrapperRectangle7, styles.wrapperLayout]}>
          <Image
            style={styles.wrapperChildPosition}
            contentFit="cover"
            source={require("../assets/rectangle-7.png")}
          />
        </View>
        <View style={[styles.wrapperRectangle6, styles.wrapperLayout1]}>
          <Image
            style={styles.wrapperChildPosition}
            contentFit="cover"
            source={require("../assets/rectangle-6.png")}
          />
        </View>
        <View style={[styles.wrapperRectangle8, styles.wrapperLayout]}>
          <Image
            style={styles.wrapperChildPosition}
            contentFit="cover"
            source={require("../assets/rectangle-8.png")}
          />
        </View>
        <View style={[styles.wrapperRectangle9, styles.wrapperLayout]}>
          <Image
            style={styles.wrapperChildPosition}
            contentFit="cover"
            source={require("../assets/rectangle-9.png")}
          />
        </View>
        <View style={[styles.wrapperRectangle5, styles.wrapperLayout1]}>
          <Image
            style={styles.wrapperChildPosition}
            contentFit="cover"
            source={require("../assets/rectangle-51.png")}
          />
        </View>
      </View>
      <Image
        style={styles.userProfileChild}
        contentFit="cover"
        source={require("../assets/rectangle-2.png")}
      />
      <View style={styles.statusBar}>
        <Image
          style={styles.notchIcon}
          contentFit="cover"
          source={require("../assets/notch1.png")}
        />
        <View style={styles.statusIcons}>
          <Image
            style={styles.networkSignalLight}
            contentFit="cover"
            source={require("../assets/network-signal-light.png")}
          />
          <Image
            style={[styles.wifiSignalLight, styles.lightSpaceBlock]}
            contentFit="cover"
            source={require("../assets/wifi-signal--light.png")}
          />
          <Image
            style={[styles.batteryLight, styles.lightSpaceBlock]}
            contentFit="cover"
            source={require("../assets/battery--light.png")}
          />
        </View>
        <Image
          style={styles.indicatorIcon}
          contentFit="cover"
          source={require("../assets/indicator.png")}
        />
        <Image
          style={styles.timeLight}
          contentFit="cover"
          source={require("../assets/time--light.png")}
        />
      </View>
      <Text style={styles.oliviaPinson}>Olivia Pinson</Text>
      <View
        style={[styles.materialSymbolslocationOnParent, styles.materialLayout]}
      >
        <Image
          style={[styles.materialSymbolslocationOnIcon, styles.materialLayout]}
          contentFit="cover"
          source={require("../assets/materialsymbolslocationon.png")}
        />
        <Text style={styles.tampaFlorida}>Tampa, Florida</Text>
      </View>
      <View style={styles.groupParent}>
        <View style={[styles.parent, styles.groupPosition]}>
          <Text style={[styles.text, styles.textTypo]}>122</Text>
          <Text style={[styles.followers, styles.likesTypo]}>followers</Text>
        </View>
        <View style={styles.kParent}>
          <Text style={[styles.k, styles.textTypo]}>37K</Text>
          <Text style={[styles.likes, styles.likesTypo]}>likes</Text>
        </View>
        <View style={[styles.group, styles.groupPosition]}>
          <Text style={[styles.text1, styles.textTypo]}>67</Text>
          <Text style={[styles.following, styles.likesTypo]}>following</Text>
        </View>
      </View>
      <View style={styles.groupContainer}>
        <View style={[styles.rectangleParent, styles.groupLayout]}>
          <View style={[styles.groupChild, styles.groupLayout]} />
          <Text style={[styles.editProfile, styles.addFriendsTypo]}>
            Edit profile
          </Text>
        </View>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupChild, styles.groupLayout]} />
          <View style={[styles.addFriendsWrapper, styles.editProfilePosition]}>
            <Text style={styles.addFriendsTypo}>Add friends</Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.userProfileItem}
        contentFit="cover"
        source={require("../assets/line-1.png")}
      />
      <Text style={[styles.photos, styles.savedPosition]}>Photos</Text>
      <Text style={[styles.saved, styles.savedPosition]}>Saved</Text>
      <Image
        style={styles.user03cIcon}
        contentFit="cover"
        source={require("../assets/user-03c3.png")}
      />
      <SectionCard />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperLayout1: {
    justifyContent: "center",
    display: "flex",
    height: 160,
    width: 110,
    borderRadius: Border.br_3xs,
    alignItems: "center",
    top: 0,
    position: "absolute",
  },
  wrapperLayout: {
    top: 178,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    height: 160,
    width: 110,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  lightSpaceBlock: {
    marginLeft: 4,
    height: 14,
  },
  materialLayout: {
    height: 27,
    position: "absolute",
  },
  groupPosition: {
    width: 61,
    left: "50%",
    position: "absolute",
  },
  textTypo: {
    lineHeight: 21,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    top: 0,
    position: "absolute",
  },
  likesTypo: {
    lineHeight: 12,
    fontSize: FontSize.boldP2_size,
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.buttonMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  groupLayout: {
    width: 124,
    height: 35,
    top: 0,
    position: "absolute",
  },
  addFriendsTypo: {
    color: Color.conditionalPopOver,
    lineHeight: 13,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.body,
    textAlign: "left",
  },
  editProfilePosition: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  savedPosition: {
    top: 530,
    lineHeight: 12,
    fontSize: FontSize.boldP2_size,
    textAlign: "left",
    position: "absolute",
  },
  wrapperChildPosition: {
    transform: [
      {
        scale: 1.073,
      },
    ],
    top: 4,
    objectFit: "contain",
    height: "100%",
    left: 0,
    position: "absolute",
    width: "100%",
  },
  wrapperRectangle4: {
    left: 235,
  },
  wrapperRectangle7: {
    left: 1,
  },
  wrapperRectangle6: {
    left: 117,
  },
  wrapperRectangle8: {
    left: 118,
  },
  wrapperRectangle9: {
    left: 235,
  },
  wrapperRectangle5: {
    left: -1,
  },
  wrapperRectangle4Parent: {
    top: 561,
    left: 24,
    width: 345,
    height: 203,
    position: "absolute",
  },
  userProfileChild: {
    width: 390,
    height: 227,
    left: 0,
    top: 0,
    position: "absolute",
  },
  notchIcon: {
    right: 0,
    maxWidth: "100%",
    height: 30,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  networkSignalLight: {
    width: 20,
    height: 14,
  },
  wifiSignalLight: {
    width: 16,
  },
  batteryLight: {
    width: 25,
  },
  statusIcons: {
    top: 16,
    right: 14,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  indicatorIcon: {
    top: 8,
    right: 71,
    width: 6,
    height: 6,
    position: "absolute",
  },
  timeLight: {
    top: 13,
    left: 12,
    borderRadius: Border.br_xl,
    width: 54,
    height: 21,
    position: "absolute",
    overflow: "hidden",
  },
  statusBar: {
    left: 2,
    width: 385,
    height: 44,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  oliviaPinson: {
    marginLeft: -57,
    top: 320,
    fontSize: FontSize.boldH3_size,
    textAlign: "left",
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    left: "50%",
    position: "absolute",
  },
  materialSymbolslocationOnIcon: {
    width: 27,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  tampaFlorida: {
    top: 7,
    left: 30,
    fontSize: FontSize.size_smi,
    lineHeight: 11,
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.buttonMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  materialSymbolslocationOnParent: {
    top: 354,
    left: 129,
    width: 122,
  },
  text: {
    marginLeft: -20.5,
    left: "50%",
  },
  followers: {
    top: 29,
    fontSize: FontSize.boldP2_size,
    left: 0,
  },
  parent: {
    marginLeft: -121,
    height: 41,
    top: 0,
  },
  k: {
    left: 0,
  },
  likes: {
    marginLeft: -15,
    top: 29,
    fontSize: FontSize.boldP2_size,
    left: "50%",
  },
  kParent: {
    left: 196,
    width: 46,
    height: 41,
    top: 0,
    position: "absolute",
  },
  text1: {
    marginLeft: -14.5,
    left: "50%",
  },
  following: {
    marginLeft: -30.5,
    top: 28,
    left: "50%",
  },
  group: {
    marginLeft: -23,
    top: 1,
    height: 40,
  },
  groupParent: {
    marginLeft: -118,
    top: 414,
    width: 242,
    height: 41,
    left: "50%",
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_2xs,
    backgroundColor: Color.colorDarkslateblue,
    left: 0,
  },
  editProfile: {
    marginTop: -5.8,
    marginLeft: -38,
    width: 77,
    height: 13,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  rectangleParent: {
    left: 0,
  },
  addFriendsWrapper: {
    marginTop: -16,
    marginLeft: -51,
    padding: Padding.p_3xs,
    flexDirection: "row",
  },
  rectangleGroup: {
    left: 130,
  },
  groupContainer: {
    top: 478,
    left: 77,
    width: 254,
    height: 35,
    position: "absolute",
  },
  userProfileItem: {
    marginLeft: -153,
    top: 552,
    width: 327,
    height: 1,
    left: "50%",
    position: "absolute",
  },
  photos: {
    left: 101,
    top: 530,
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  saved: {
    left: 269,
    color: "#9b9494",
    fontFamily: FontFamily.body,
    top: 530,
  },
  user03cIcon: {
    top: 165,
    left: 128,
    borderRadius: Border.br_81xl,
    width: 135,
    height: 136,
    position: "absolute",
    overflow: "hidden",
  },
  userProfile: {
    backgroundColor: Color.conditionalPopOver,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default UserProfile;
