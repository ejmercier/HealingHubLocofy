import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import CardAcademicHistoryContainer from "./CardAcademicHistoryContainer";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const BlogCard = () => {
  return (
    <View style={styles.cardProdukParent}>
      <CardAcademicHistoryContainer
        dimensionCode={require("../assets/image-8711.png")}
        contentImageUrl="Blog"
        dimensionLabel={require("../assets/calendar4.png")}
      />
      <View style={styles.cardProduk}>
        <Image
          style={styles.image871Icon}
          contentFit="cover"
          source={require("../assets/image-8712.png")}
        />
        <View style={styles.component43Wrapper}>
          <View style={styles.component43}>
            <Image
              style={styles.calendarIcon}
              contentFit="cover"
              source={require("../assets/calendar5.png")}
            />
            <Text style={styles.jadwalBelumTersedia}>premium access</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image871Icon: {
    borderTopLeftRadius: Border.br_5xs,
    borderTopRightRadius: Border.br_5xs,
    height: 83,
    width: 166,
  },
  calendarIcon: {
    width: 15,
    height: 15,
    overflow: "hidden",
  },
  jadwalBelumTersedia: {
    flex: 1,
    fontSize: FontSize.semiBoldP4_size,
    fontWeight: "600",
    fontFamily: FontFamily.semiBoldH6,
    color: Color.colorGoldenrod,
    textAlign: "left",
    marginLeft: 4,
  },
  component43: {
    alignSelf: "stretch",
    borderRadius: Border.br_9xs,
    backgroundColor: Color.warningYellowYellow1,
    alignItems: "center",
    padding: Padding.p_11xs,
    flexDirection: "row",
  },
  component43Wrapper: {
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
  cardProduk: {
    marginLeft: 12,
  },
  cardProdukParent: {
    marginTop: 20,
    flexDirection: "row",
  },
});

export default BlogCard;
