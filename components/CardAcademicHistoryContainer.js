import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontFamily, Border, FontSize, Color, Padding } from "../GlobalStyles";

const CardAcademicHistoryContainer = ({
  dimensionCode,
  contentImageUrl,
  dimensionLabel,
}) => {
  return (
    <View>
      <Image
        style={styles.image873Icon}
        contentFit="cover"
        source={dimensionCode}
      />
      <View style={styles.academicHistoryParent}>
        <Text style={[styles.academicHistory, styles.jadwalTersediaTypo]}>
          {contentImageUrl}
        </Text>
        <View style={styles.component42}>
          <Image
            style={styles.calendarIcon}
            contentFit="cover"
            source={dimensionLabel}
          />
          <Text style={[styles.jadwalTersedia, styles.jadwalTersediaTypo]}>
            Learn more
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  jadwalTersediaTypo: {
    textAlign: "left",
    fontFamily: FontFamily.semiBoldH6,
    fontWeight: "600",
  },
  image873Icon: {
    borderTopLeftRadius: Border.br_5xs,
    borderTopRightRadius: Border.br_5xs,
    height: 83,
    width: 166,
  },
  academicHistory: {
    fontSize: FontSize.boldP2_size,
    color: Color.primaryNavy1,
    alignSelf: "stretch",
  },
  calendarIcon: {
    width: 15,
    height: 15,
    overflow: "hidden",
  },
  jadwalTersedia: {
    flex: 1,
    fontSize: FontSize.semiBoldP4_size,
    color: Color.colorForestgreen,
    marginLeft: 4,
  },
  component42: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.secondaryGreen5,
    flexDirection: "row",
    alignItems: "center",
    padding: Padding.p_11xs,
    marginTop: 8,
    alignSelf: "stretch",
  },
  academicHistoryParent: {
    borderBottomRightRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
    backgroundColor: Color.conditionalPopOver,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_xs,
    width: 166,
  },
});

export default CardAcademicHistoryContainer;
