import * as React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Chosen = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.chosen, styles.iconLayout]}>
      <View style={[styles.list, styles.listPosition]}>
        <View style={styles.settingParent}>
          <View style={styles.setting}>
            <View style={[styles.settingChild, styles.settingChildLayout]} />
            <Text style={[styles.restAndRecovery, styles.createTypo]}>
              Rest and Recovery
            </Text>
          </View>
          <Image
            style={[styles.variantIcon, styles.iconPosition7]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
          <Image
            style={[styles.objectIcon, styles.iconPosition5]}
            contentFit="cover"
            source={require("../assets/object.png")}
          />
        </View>
        <View style={[styles.settingWrapper, styles.settingLayout1]}>
          <View style={[styles.setting1, styles.settingLayout1]}>
            <View style={[styles.settingItem, styles.settingChildLayout]} />
            <Text style={[styles.mindfulness, styles.setting27Position]}>
              Mindfulness
            </Text>
            <Image
              style={[styles.svg8Icon, styles.svg8IconPosition]}
              contentFit="cover"
              source={require("../assets/svg8.png")}
            />
            <Image
              style={[styles.frameIcon, styles.iconPosition4]}
              contentFit="cover"
              source={require("../assets/frame14.png")}
            />
          </View>
        </View>
        <View style={styles.settingGroup}>
          <View style={styles.setting}>
            <View style={[styles.settingChild, styles.settingChildLayout]} />
            <Text style={[styles.breastCancer, styles.breastCancerTypo]}>
              Breast Cancer
            </Text>
          </View>
          <Image
            style={[styles.variantIcon, styles.iconPosition7]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
          <Image
            style={[styles.frameIcon1, styles.iconPosition5]}
            contentFit="cover"
            source={require("../assets/frame15.png")}
          />
        </View>
        <View style={[styles.settingWrapper, styles.settingLayout1]}>
          <View style={styles.setting3}>
            <View style={[styles.settingChild, styles.settingChildLayout]} />
            <Text style={[styles.movement, styles.movementTypo]}>Movement</Text>
          </View>
          <Image
            style={[styles.variantIcon2, styles.iconPosition7]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
          <Image
            style={styles.layer1Icon}
            contentFit="cover"
            source={require("../assets/layer-13.png")}
          />
        </View>
        <View style={styles.settingGroup}>
          <View style={styles.setting}>
            <View style={[styles.settingChild, styles.settingChildLayout]} />
            <Text style={[styles.heartHealth, styles.createTypo]}>
              Heart Health
            </Text>
          </View>
          <Image
            style={[styles.variantIcon, styles.iconPosition7]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
          <Image
            style={styles.frameIcon2}
            contentFit="cover"
            source={require("../assets/frame16.png")}
          />
        </View>
        <View style={styles.settingGroup}>
          <View style={styles.setting}>
            <View style={[styles.settingChild, styles.settingChildLayout]} />
            <Text style={[styles.holisticApproaches, styles.autoimmuneTypo]}>
              Holistic Approaches
            </Text>
          </View>
          <Image
            style={[styles.variantIcon, styles.iconPosition7]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
          <Image
            style={[styles.layer1Icon1, styles.iconPosition3]}
            contentFit="cover"
            source={require("../assets/layer-14.png")}
          />
        </View>
        <View style={styles.settingParent2}>
          <View style={[styles.setting6, styles.setting6Position]}>
            <View style={[styles.settingChild, styles.settingChildLayout]} />
            <Text style={[styles.movement, styles.movementTypo]}>Skin</Text>
          </View>
          <Image
            style={[styles.variantIcon5, styles.setting6Position]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
          <Image
            style={[styles.layer1Icon2, styles.iconPosition4]}
            contentFit="cover"
            source={require("../assets/layer-15.png")}
          />
        </View>
        <View style={styles.settingGroup}>
          <View style={styles.setting}>
            <View style={[styles.settingChild, styles.settingChildLayout]} />
            <Text style={[styles.holisticApproaches, styles.autoimmuneTypo]}>
              Stress Management
            </Text>
          </View>
          <Image
            style={[styles.variantIcon, styles.iconPosition7]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
          <Image
            style={[styles.frameIcon3, styles.iconPosition2]}
            contentFit="cover"
            source={require("../assets/frame17.png")}
          />
        </View>
        <View style={styles.settingGroup}>
          <View style={[styles.settingChild, styles.settingChildLayout]} />
          <Text style={[styles.breastCancer, styles.breastCancerTypo]}>
            Fitness Fam
          </Text>
          <Image
            style={[styles.variantIcon, styles.iconPosition7]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
          <Image
            style={[styles.exercisePlanConsistantIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/exerciseplanconsistant.png")}
          />
        </View>
        <View style={[styles.setting9, styles.settingLayout]}>
          <View style={[styles.settingChild6, styles.settingChildLayout]} />
          <Text style={[styles.digestive, styles.digestivePosition]}>
            Digestive
          </Text>
          <Image
            style={[styles.variantIcon8, styles.digestivePosition]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
          <Image
            style={[styles.layer11Icon, styles.iconPosition1]}
            contentFit="cover"
            source={require("../assets/layer-1-11.png")}
          />
        </View>
        <View style={styles.setting10}>
          <View style={[styles.settingChild7, styles.settingChildLayout]} />
          <Text style={[styles.arthritis, styles.arthritisPosition]}>
            Arthritis
          </Text>
          <Image
            style={[styles.variantIcon9, styles.arthritisPosition]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
          <Image
            style={[styles.icons, styles.iconsLayout]}
            contentFit="cover"
            source={require("../assets/icons.png")}
          />
        </View>
        <View style={styles.setting11}>
          <View style={[styles.settingChild8, styles.settingChildLayout]} />
          <Text style={[styles.celiacDisease, styles.mentalHealthTypo]}>
            Celiac Disease
          </Text>
          <Image
            style={[styles.variantIcon2, styles.iconPosition7]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
          <Image
            style={[styles.flatIcon, styles.iconPosition2]}
            contentFit="cover"
            source={require("../assets/flat.png")}
          />
        </View>
        <View style={[styles.setting9, styles.settingLayout]}>
          <View style={[styles.setting12, styles.settingLayout]}>
            <View style={[styles.settingChild6, styles.settingChildLayout]} />
            <Text style={[styles.appendectomy, styles.digestivePosition]}>
              Appendectomy
            </Text>
            <Image
              style={[styles.variantIcon, styles.iconPosition7]}
              contentFit="cover"
              source={require("../assets/svg81.png")}
            />
          </View>
          <Image
            style={[styles.flatIcon1, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/flat1.png")}
          />
        </View>
        <View style={styles.settingGroup}>
          <View style={styles.setting}>
            <View style={[styles.settingChild, styles.settingChildLayout]} />
            <Text style={[styles.movement, styles.movementTypo]}>
              Fertility
            </Text>
          </View>
          <Image
            style={[styles.variantIcon, styles.iconPosition7]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
          <Image
            style={[styles.iconsManandwoman, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/icons-manandwoman.png")}
          />
        </View>
        <View style={styles.settingGroup}>
          <View style={styles.setting}>
            <View style={[styles.settingChild, styles.settingChildLayout]} />
            <Text style={[styles.heartHealth, styles.createTypo]}>
              Hernia Repar
            </Text>
          </View>
          <Image
            style={[styles.variantIcon, styles.iconPosition7]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
          <Image
            style={[styles.icon, styles.iconPosition5]}
            contentFit="cover"
            source={require("../assets/icon1.png")}
          />
        </View>
        <View style={styles.settingParent7}>
          <View style={[styles.setting15, styles.svg8IconPosition]}>
            <View style={[styles.settingChild, styles.settingChildLayout]} />
            <Text style={[styles.mentalHealth, styles.mentalHealthTypo]}>
              Mental Health
            </Text>
          </View>
          <Image
            style={[styles.flatIcon, styles.iconPosition2]}
            contentFit="cover"
            source={require("../assets/frame18.png")}
          />
          <Image
            style={[styles.svg8Icon, styles.svg8IconPosition]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
        </View>
        <View style={styles.settingGroup}>
          <View style={styles.setting}>
            <View style={[styles.settingChild, styles.settingChildLayout]} />
            <Text style={[styles.movement, styles.movementTypo]}>
              Workplace
            </Text>
          </View>
          <Image
            style={[styles.variantIcon, styles.iconPosition7]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
          <Image
            style={[styles.frameIcon5, styles.iconPosition3]}
            contentFit="cover"
            source={require("../assets/frame19.png")}
          />
        </View>
        <View style={styles.settingParent9}>
          <View style={styles.setting17}>
            <View style={[styles.settingChild, styles.settingChildLayout]} />
            <Text style={[styles.movement, styles.movementTypo]}>Wellness</Text>
          </View>
          <Image
            style={[styles.variantIcon15, styles.iconPosition7]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
          <Image
            style={[styles.layer1Icon3, styles.iconsLayout]}
            contentFit="cover"
            source={require("../assets/layer-16.png")}
          />
        </View>
        <View style={styles.settingGroup}>
          <View style={styles.setting}>
            <View style={[styles.settingChild, styles.settingChildLayout]} />
            <Text style={[styles.movement, styles.movementTypo]}>Family</Text>
          </View>
          <Image
            style={[styles.variantIcon, styles.iconPosition7]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
          <Image
            style={[styles.layer1Icon4, styles.iconPosition1]}
            contentFit="cover"
            source={require("../assets/layer-17.png")}
          />
        </View>
        <View style={styles.settingGroup}>
          <View style={styles.setting}>
            <View style={[styles.settingChild, styles.settingChildLayout]} />
            <Text style={[styles.painManagement, styles.createTypo]}>
              Pain Management
            </Text>
          </View>
          <Image
            style={[styles.variantIcon, styles.iconPosition7]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
        </View>
        <View style={styles.settingGroup}>
          <View style={styles.setting}>
            <View style={[styles.settingChild, styles.settingChildLayout]} />
            <Text style={[styles.autoimmune, styles.autoimmuneTypo]}>
              Autoimmune
            </Text>
          </View>
          <Image
            style={[styles.variantIcon, styles.iconPosition7]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
        </View>
        <View style={styles.settingGroup}>
          <View style={styles.setting}>
            <View style={[styles.settingChild, styles.settingChildLayout]} />
            <Text style={[styles.mentalHealth, styles.mentalHealthTypo]}>
              Neurological
            </Text>
          </View>
          <Image
            style={[styles.variantIcon, styles.iconPosition7]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
        </View>
        <View style={styles.settingGroup}>
          <View style={styles.setting}>
            <View style={[styles.settingChild, styles.settingChildLayout]} />
            <Text style={[styles.mentalHealth, styles.mentalHealthTypo]}>
              Fibromyalgia
            </Text>
          </View>
          <Image
            style={[styles.variantIcon, styles.iconPosition7]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
        </View>
        <View style={styles.settingGroup}>
          <View style={styles.setting}>
            <View style={[styles.settingChild, styles.settingChildLayout]} />
            <Text style={[styles.movement, styles.movementTypo]}>Bipolar</Text>
          </View>
          <Image
            style={[styles.variantIcon, styles.iconPosition7]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
        </View>
        <View style={styles.settingGroup}>
          <View style={styles.setting}>
            <View style={[styles.settingChild, styles.settingChildLayout]} />
            <Text style={[styles.chemotherapy, styles.createTypo]}>
              Chemotherapy
            </Text>
          </View>
          <Image
            style={[styles.variantIcon, styles.iconPosition7]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
        </View>
        <View style={styles.settingGroup}>
          <View style={styles.setting}>
            <View style={[styles.settingChild, styles.settingChildLayout]} />
            <Text style={[styles.movement, styles.movementTypo]}>IBS</Text>
          </View>
          <Image
            style={[styles.variantIcon, styles.iconPosition7]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
        </View>
        <View style={styles.settingGroup}>
          <View style={styles.setting}>
            <View style={[styles.settingChild, styles.settingChildLayout]} />
            <Text style={[styles.movement, styles.movementTypo]}>Thyroid</Text>
          </View>
          <Image
            style={[styles.variantIcon, styles.iconPosition7]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
        </View>
        <View style={[styles.settingWrapper, styles.settingLayout1]}>
          <View style={[styles.setting27, styles.setting27Position]}>
            <View style={[styles.settingChild, styles.settingChildLayout]} />
            <Text style={[styles.movement, styles.movementTypo]}>
              Pregnancy
            </Text>
          </View>
          <Image
            style={[styles.svg8Icon, styles.svg8IconPosition]}
            contentFit="cover"
            source={require("../assets/variant1.png")}
          />
          <Image
            style={[styles.xmlid1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/xmlid-1.png")}
          />
        </View>
        <View style={styles.settingGroup}>
          <View style={styles.setting}>
            <View style={[styles.settingChild, styles.settingChildLayout]} />
            <Text style={[styles.autoimmune, styles.autoimmuneTypo]}>
              Reproductive
            </Text>
          </View>
          <Image
            style={[styles.variantIcon, styles.iconPosition7]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
        </View>
        <View style={styles.settingGroup}>
          <View style={styles.setting}>
            <View style={[styles.settingChild, styles.settingChildLayout]} />
            <Text style={[styles.autoimmune, styles.autoimmuneTypo]}>
              Concussion
            </Text>
          </View>
          <Image
            style={[styles.variantIcon, styles.iconPosition7]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
        </View>
        <View style={styles.settingGroup}>
          <View style={styles.setting}>
            <View style={[styles.settingChild, styles.settingChildLayout]} />
            <Text style={[styles.movement, styles.movementTypo]}>Epilepsy</Text>
          </View>
          <Image
            style={[styles.variantIcon, styles.iconPosition7]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
        </View>
        <View style={styles.settingGroup}>
          <View style={styles.setting}>
            <View style={[styles.settingChild, styles.settingChildLayout]} />
            <Text style={[styles.movement, styles.movementTypo]}>
              Parenting
            </Text>
          </View>
          <Image
            style={[styles.variantIcon, styles.iconPosition7]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
        </View>
        <View style={styles.settingGroup}>
          <View style={styles.setting}>
            <View style={[styles.settingChild, styles.settingChildLayout]} />
            <Text style={[styles.movement, styles.movementTypo]}>Asma</Text>
          </View>
          <Image
            style={[styles.variantIcon, styles.iconPosition7]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
        </View>
        <View style={styles.settingGroup}>
          <View style={styles.setting}>
            <View style={[styles.settingChild, styles.settingChildLayout]} />
            <Text style={[styles.movement, styles.movementTypo]}>
              Cholesterol
            </Text>
          </View>
          <Image
            style={[styles.variantIcon, styles.iconPosition7]}
            contentFit="cover"
            source={require("../assets/variant2.png")}
          />
        </View>
        <View style={styles.settingGroup}>
          <View style={styles.setting}>
            <View style={[styles.settingChild, styles.settingChildLayout]} />
            <Text style={[styles.autoimmune, styles.autoimmuneTypo]}>
              Blood Pressure
            </Text>
          </View>
          <Image
            style={[styles.variantIcon, styles.iconPosition7]}
            contentFit="cover"
            source={require("../assets/variant2.png")}
          />
        </View>
        <View style={styles.settingGroup}>
          <View style={styles.setting}>
            <View style={[styles.settingChild, styles.settingChildLayout]} />
            <Text style={[styles.movement, styles.movementTypo]}>Anemia</Text>
          </View>
          <Image
            style={[styles.variantIcon, styles.iconPosition7]}
            contentFit="cover"
            source={require("../assets/variant2.png")}
          />
        </View>
        <View style={styles.settingGroup}>
          <View style={styles.setting}>
            <View style={[styles.settingChild, styles.settingChildLayout]} />
            <Text style={[styles.chronicFatigue, styles.createTypo]}>
              Chronic Fatigue
            </Text>
          </View>
          <Image
            style={[styles.variantIcon, styles.iconPosition7]}
            contentFit="cover"
            source={require("../assets/variant2.png")}
          />
        </View>
        <View style={styles.settingGroup}>
          <View style={styles.setting}>
            <View style={[styles.settingChild, styles.settingChildLayout]} />
            <Text style={[styles.movement, styles.movementTypo]}>
              Depression
            </Text>
          </View>
          <Image
            style={[styles.variantIcon, styles.iconPosition7]}
            contentFit="cover"
            source={require("../assets/variant2.png")}
          />
        </View>
      </View>
      <Text style={[styles.pageTitle, styles.pageTypo]}>Popular</Text>
      <Text style={[styles.pageTitle1, styles.pageTypo]}>Yours</Text>
      <View style={[styles.settingParent30, styles.listPosition]}>
        <View style={[styles.setting38, styles.settingPosition]}>
          <View style={[styles.settingChild35, styles.settingPosition]} />
          <Text style={[styles.movement, styles.movementTypo]}>Nutrition</Text>
        </View>
        <Image
          style={[styles.frameIcon1, styles.iconPosition5]}
          contentFit="cover"
          source={require("../assets/svg82.png")}
        />
      </View>
      <Image
        style={[styles.frameIcon6, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame20.png")}
      />
      <Image
        style={[styles.frameIcon7, styles.frameIconLayout]}
        contentFit="cover"
        source={require("../assets/frame20.png")}
      />
      <Pressable
        style={styles.groupPressable}
        onPress={() => navigation.navigate("Homepage")}
      >
        <View style={styles.setting}>
          <View style={[styles.settingChild, styles.settingChildLayout]} />
          <Text style={[styles.movement, styles.movementTypo]}>Scoliosis</Text>
        </View>
        <Image
          style={[styles.layer11Icon1, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/layer-1-12.png")}
        />
      </Pressable>
      <View style={styles.chosenInner}>
        <View style={styles.rectangleParent}>
          <View style={[styles.frameChild, styles.frameLayout]} />
          <View style={[styles.frameItem, styles.frameLayout]} />
          <Text style={[styles.pageTitle2, styles.createClr]}>
            Join a community
          </Text>
          <View style={[styles.btn, styles.btnLayout]}>
            <View style={[styles.btnChild, styles.btnLayout]} />
            <Text style={[styles.create, styles.createClr]}>Create</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  listPosition: {
    left: "50%",
    position: "absolute",
  },
  settingChildLayout: {
    height: 1,
    width: 270,
    borderTopWidth: 1,
    borderColor: Color.colorDimgray_200,
    borderStyle: "solid",
  },
  createTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interBold,
  },
  iconPosition7: {
    left: 245,
    overflow: "hidden",
    width: 24,
  },
  iconPosition5: {
    width: 21,
    overflow: "hidden",
    top: 0,
    position: "absolute",
  },
  settingLayout1: {
    height: 29,
    width: 269,
  },
  setting27Position: {
    top: 5,
    position: "absolute",
  },
  svg8IconPosition: {
    top: 1,
    height: 24,
    position: "absolute",
  },
  iconPosition4: {
    left: 8,
    height: 25,
    overflow: "hidden",
    top: 0,
    position: "absolute",
  },
  breastCancerTypo: {
    width: 110,
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.boldP2_size,
    left: 65,
  },
  movementTypo: {
    width: 80,
    left: 64,
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.boldP2_size,
  },
  autoimmuneTypo: {
    left: 64,
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.boldP2_size,
    top: 0,
    position: "absolute",
  },
  iconPosition3: {
    left: 13,
    overflow: "hidden",
    top: 0,
    position: "absolute",
  },
  setting6Position: {
    top: 2,
    height: 24,
    position: "absolute",
  },
  iconPosition2: {
    height: 22,
    overflow: "hidden",
    top: 0,
    position: "absolute",
  },
  settingLayout: {
    height: 28,
    width: 269,
  },
  digestivePosition: {
    top: 4,
    position: "absolute",
  },
  iconPosition1: {
    left: 14,
    overflow: "hidden",
    position: "absolute",
  },
  arthritisPosition: {
    top: 8,
    position: "absolute",
  },
  iconsLayout: {
    width: 25,
    height: 25,
    overflow: "hidden",
    top: 0,
    position: "absolute",
  },
  mentalHealthTypo: {
    width: 119,
    left: 64,
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.boldP2_size,
    position: "absolute",
  },
  iconPosition: {
    left: 11,
    overflow: "hidden",
    top: 0,
    position: "absolute",
  },
  pageTypo: {
    height: 17,
    width: 58,
    color: Color.colorGray_100,
    fontSize: FontSize.label_size,
    textAlign: "center",
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  settingPosition: {
    bottom: 0,
    left: "50%",
    position: "absolute",
  },
  frameIconLayout: {
    height: 16,
    width: 16,
    left: 257,
    overflow: "hidden",
    position: "absolute",
  },
  frameLayout: {
    width: 284,
    backgroundColor: Color.colorDarkseagreen,
  },
  createClr: {
    color: Color.conditionalPopOver,
    fontWeight: "700",
    position: "absolute",
  },
  btnLayout: {
    height: 35,
    width: 161,
    position: "absolute",
  },
  settingChild: {
    top: 24,
    left: 0,
    position: "absolute",
  },
  restAndRecovery: {
    width: 134,
    color: Color.colorGray_200,
    fontWeight: "700",
    fontSize: FontSize.boldP2_size,
    left: 65,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    top: 0,
    position: "absolute",
  },
  setting: {
    left: 0,
    top: 0,
    height: 24,
    width: 269,
    position: "absolute",
  },
  variantIcon: {
    overflow: "hidden",
    width: 24,
    top: 0,
    height: 24,
    position: "absolute",
  },
  objectIcon: {
    height: 21,
    left: 9,
    width: 21,
  },
  settingParent: {
    height: 24,
    width: 269,
  },
  settingItem: {
    top: 29,
    left: 0,
    position: "absolute",
  },
  mindfulness: {
    width: 97,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    color: Color.colorGray_200,
    fontWeight: "700",
    fontSize: FontSize.boldP2_size,
    left: 65,
  },
  svg8Icon: {
    overflow: "hidden",
    width: 24,
    left: 245,
  },
  frameIcon: {
    height: 25,
    width: 24,
  },
  setting1: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  settingWrapper: {
    marginTop: 8,
  },
  breastCancer: {
    top: 0,
    position: "absolute",
  },
  frameIcon1: {
    height: 20,
    left: 9,
    width: 21,
  },
  settingGroup: {
    marginTop: 8,
    height: 24,
    width: 269,
  },
  movement: {
    top: 0,
    position: "absolute",
  },
  setting3: {
    top: 3,
    left: 0,
    height: 24,
    width: 269,
    position: "absolute",
  },
  variantIcon2: {
    top: 3,
    overflow: "hidden",
    width: 24,
    height: 24,
    position: "absolute",
  },
  layer1Icon: {
    width: 29,
    left: 6,
    height: 29,
    overflow: "hidden",
    top: 0,
    position: "absolute",
  },
  heartHealth: {
    width: 105,
    color: Color.colorGray_200,
    fontWeight: "700",
    fontSize: FontSize.boldP2_size,
    left: 65,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    top: 0,
    position: "absolute",
  },
  frameIcon2: {
    height: 18,
    width: 20,
    left: 12,
    overflow: "hidden",
    top: 0,
    position: "absolute",
  },
  holisticApproaches: {
    width: 153,
  },
  layer1Icon1: {
    width: 17,
    height: 18,
  },
  setting6: {
    left: 0,
    width: 269,
  },
  variantIcon5: {
    overflow: "hidden",
    width: 24,
    left: 245,
  },
  layer1Icon2: {
    width: 27,
    height: 25,
  },
  settingParent2: {
    height: 26,
    marginTop: 8,
    width: 269,
  },
  frameIcon3: {
    width: 23,
    left: 10,
  },
  exercisePlanConsistantIcon: {
    height: "66.67%",
    width: "6.68%",
    top: "8.33%",
    right: "88.27%",
    bottom: "25%",
    left: "5.05%",
    overflow: "hidden",
    position: "absolute",
  },
  settingChild6: {
    top: 28,
    left: 0,
    position: "absolute",
  },
  digestive: {
    width: 80,
    left: 64,
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.boldP2_size,
  },
  variantIcon8: {
    overflow: "hidden",
    width: 24,
    left: 245,
    height: 24,
  },
  layer11Icon: {
    width: 19,
    top: 0,
    height: 24,
  },
  setting9: {
    marginTop: 8,
  },
  settingChild7: {
    top: 32,
    left: 0,
    position: "absolute",
  },
  arthritis: {
    width: 80,
    left: 64,
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.boldP2_size,
  },
  variantIcon9: {
    overflow: "hidden",
    width: 24,
    left: 245,
    height: 24,
  },
  icons: {
    left: 10,
  },
  setting10: {
    height: 32,
    marginTop: 8,
    width: 269,
  },
  settingChild8: {
    top: 27,
    left: 0,
    position: "absolute",
  },
  celiacDisease: {
    top: 3,
  },
  flatIcon: {
    width: 22,
    left: 12,
  },
  setting11: {
    height: 27,
    marginTop: 8,
    width: 269,
  },
  appendectomy: {
    width: 110,
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.boldP2_size,
    left: 65,
  },
  setting12: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  flatIcon1: {
    width: 24,
    height: 24,
  },
  iconsManandwoman: {
    width: 22,
    height: 21,
  },
  icon: {
    left: 12,
    height: 21,
  },
  mentalHealth: {
    top: 0,
  },
  setting15: {
    left: 0,
    width: 269,
  },
  settingParent7: {
    height: 25,
    marginTop: 8,
    width: 269,
  },
  frameIcon5: {
    height: 19,
    width: 20,
  },
  setting17: {
    top: 7,
    left: 0,
    height: 24,
    width: 269,
    position: "absolute",
  },
  variantIcon15: {
    top: 7,
    overflow: "hidden",
    width: 24,
    height: 24,
    position: "absolute",
  },
  layer1Icon3: {
    left: 12,
  },
  settingParent9: {
    height: 31,
    marginTop: 8,
    width: 269,
  },
  layer1Icon4: {
    height: 18,
    width: 20,
    top: 3,
  },
  painManagement: {
    width: 145,
    color: Color.colorGray_200,
    fontWeight: "700",
    fontSize: FontSize.boldP2_size,
    left: 65,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    top: 0,
    position: "absolute",
  },
  autoimmune: {
    width: 113,
  },
  chemotherapy: {
    width: 123,
    color: Color.colorGray_200,
    fontWeight: "700",
    fontSize: FontSize.boldP2_size,
    left: 65,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    top: 0,
    position: "absolute",
  },
  setting27: {
    left: 0,
    height: 24,
    width: 269,
  },
  xmlid1Icon: {
    height: "75.86%",
    width: "8.18%",
    top: "0%",
    right: "86.8%",
    bottom: "24.14%",
    left: "5.02%",
    overflow: "hidden",
    position: "absolute",
  },
  chronicFatigue: {
    width: 141,
    color: Color.colorGray_200,
    fontWeight: "700",
    fontSize: FontSize.boldP2_size,
    left: 65,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    top: 0,
    position: "absolute",
  },
  list: {
    marginLeft: -142,
    top: 211,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_31xl,
    paddingVertical: 0,
    width: 284,
    backgroundColor: Color.colorDarkseagreen,
  },
  pageTitle: {
    top: 184,
    left: 4,
  },
  pageTitle1: {
    top: 91,
    left: -2,
  },
  settingChild35: {
    marginLeft: -135,
    height: 1,
    width: 270,
    borderTopWidth: 1,
    borderColor: Color.colorDimgray_200,
    borderStyle: "solid",
  },
  setting38: {
    marginLeft: -134.5,
    height: 24,
    width: 269,
  },
  settingParent30: {
    marginLeft: -136,
    bottom: 708,
    height: 24,
    width: 269,
  },
  frameIcon6: {
    top: 113,
  },
  frameIcon7: {
    top: 148,
  },
  layer11Icon1: {
    width: 18,
    height: 18,
  },
  groupPressable: {
    top: 147,
    left: 7,
    height: 24,
    width: 269,
    position: "absolute",
  },
  frameChild: {
    height: 85,
    zIndex: 0,
  },
  frameItem: {
    height: 75,
    zIndex: 1,
    marginTop: 694,
  },
  pageTitle2: {
    top: 14,
    fontSize: FontSize.size_mid,
    width: 104,
    height: 55,
    zIndex: 2,
    textAlign: "center",
    fontFamily: FontFamily.dMSansBold,
    color: Color.conditionalPopOver,
    left: 6,
  },
  btnChild: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorDarkkhaki,
    left: 0,
    top: 0,
  },
  create: {
    left: 51,
    fontSize: FontSize.boldH3_size,
    width: 60,
    top: 7,
    height: 21,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    color: Color.conditionalPopOver,
  },
  btn: {
    top: 789,
    left: 69,
    zIndex: 3,
  },
  rectangleParent: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  chosenInner: {
    width: 285,
    left: 0,
    top: 0,
    position: "absolute",
    height: 844,
  },
  chosen: {
    height: 844,
    width: 284,
    backgroundColor: Color.colorDarkseagreen,
  },
});

export default Chosen;
