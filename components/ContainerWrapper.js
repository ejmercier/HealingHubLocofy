import * as React from "react";
import { StyleSheet, View } from "react-native";
import CardAcademicHistoryContainer from "./CardAcademicHistoryContainer";
import CardRating from "./CardRating";

const ContainerWrapper = () => {
  return (
    <View style={styles.cardProdukParent}>
      <CardAcademicHistoryContainer
        dimensionCode={require("../assets/image-873.png")}
        contentImageUrl="Academic History"
        dimensionLabel={require("../assets/calendar2.png")}
      />
      <CardRating
        dimension={require("../assets/image-874.png")}
        componentInfo="Incident Reports"
        rating="2"
        productDimensions={require("../assets/calendar3.png")}
        buttonText="premium access"
        propMarginLeft={12}
        propBackgroundColor="#ffdc98"
        propColor="#db9100"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardProdukParent: {
    flexDirection: "row",
    marginTop: 20,
  },
});

export default ContainerWrapper;
