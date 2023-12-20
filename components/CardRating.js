import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const CardRating = ({
  dimension,
  componentInfo,
  rating,
  productDimensions,
  buttonText,
  propMarginLeft,
  propBackgroundColor,
  propColor,
}) => {
  const cardProdukStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft),
    };
  }, [propMarginLeft]);

  const component43Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor),
    };
  }, [propBackgroundColor]);

  const jadwalTersediaStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor),
    };
  }, [propColor]);

  return (
    <View>
      <Image
        style={styles.image871Icon}
        contentFit="cover"
        source={dimension}
      />
      <View style={styles.reviewsParent}>
        <Text style={styles.reviews}>{componentInfo}</Text>
        <Text style={[styles.stars, styles.starsSpaceBlock]}>{rating}</Text>
        <View
          style={[styles.component43, styles.starsSpaceBlock, component43Style]}
        >
          <Image
            style={styles.calendarIcon}
            contentFit="cover"
            source={productDimensions}
          />
          <Text
            style={[
              styles.jadwalTersedia,
              styles.starsClr,
              jadwalTersediaStyle,
            ]}
          >
            {buttonText}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  starsSpaceBlock: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  starsClr: {
    color: Color.colorForestgreen,
    textAlign: "left",
  },
  image871Icon: {
    borderTopLeftRadius: Border.br_5xs,
    borderTopRightRadius: Border.br_5xs,
    height: 83,
    width: 166,
  },
  reviews: {
    color: Color.primaryNavy1,
    textAlign: "left",
    alignSelf: "stretch",
    fontFamily: FontFamily.semiBoldH6,
    fontWeight: "600",
    fontSize: FontSize.boldP2_size,
  },
  stars: {
    fontWeight: "900",
    fontFamily: FontFamily.boldP2,
    color: Color.colorForestgreen,
    textAlign: "left",
    fontSize: FontSize.boldP2_size,
    marginTop: 8,
  },
  calendarIcon: {
    width: 15,
    height: 15,
    overflow: "hidden",
  },
  jadwalTersedia: {
    flex: 1,
    fontSize: FontSize.semiBoldP4_size,
    marginLeft: 4,
    fontFamily: FontFamily.semiBoldH6,
    fontWeight: "600",
    color: Color.colorForestgreen,
  },
  component43: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.secondaryGreen5,
    flexDirection: "row",
    alignItems: "center",
    padding: Padding.p_11xs,
  },
  reviewsParent: {
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

export default CardRating;
