import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const DetailsContainer = () => {
  return (
    <View style={styles.detailsParent}>
      <Text style={styles.details}>Details</Text>
      <Text
        style={[
          styles.ufHealthOrthopapedicsContainer,
          styles.hullRdGainesvilleTypo,
        ]}
      >
        UF Health Orthopapedics and SportsMedicine Institute
      </Text>
      <View style={styles.frameParent}>
        <View style={styles.addressParent}>
          <Text style={styles.address}>Address</Text>
          <Text
            style={[styles.hullRdGainesville, styles.hullRdGainesvilleTypo]}
          >{`3450 Hull Rd, Gainesville, FL 32607 `}</Text>
        </View>
        <View style={styles.nameParent}>
          <Text style={styles.address}>Name</Text>
          <Text
            style={[styles.hullRdGainesville, styles.hullRdGainesvilleTypo]}
          >
            Grace Bailey
          </Text>
        </View>
        <View style={styles.nameParent}>
          <Text style={styles.address}>Date</Text>
          <Text
            style={[styles.hullRdGainesville, styles.hullRdGainesvilleTypo]}
          >
            July 28, 2024
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  hullRdGainesvilleTypo: {
    fontSize: FontSize.body_size,
    textAlign: "left",
    color: Color.primaryNavy1,
    fontFamily: FontFamily.boldH5,
    fontWeight: "700",
  },
  details: {
    fontSize: FontSize.boldH3_size,
    lineHeight: 28,
    textAlign: "left",
    color: Color.primaryNavy1,
    fontFamily: FontFamily.boldH5,
    fontWeight: "700",
    alignSelf: "stretch",
  },
  ufHealthOrthopapedicsContainer: {
    marginTop: 12,
  },
  address: {
    fontSize: FontSize.boldP2_size,
    fontFamily: FontFamily.regulerP2,
    color: Color.coolGreyCoolGrey500,
    textAlign: "left",
  },
  hullRdGainesville: {
    marginTop: 6,
  },
  addressParent: {
    width: 328,
  },
  nameParent: {
    width: 328,
    marginTop: 12,
  },
  frameParent: {
    marginTop: 12,
    alignSelf: "stretch",
  },
  detailsParent: {
    position: "absolute",
    top: 162,
    left: 20,
    borderRadius: Border.br_xs,
    backgroundColor: Color.conditionalPopOver,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: 343,
    padding: Padding.p_xs,
  },
});

export default DetailsContainer;
