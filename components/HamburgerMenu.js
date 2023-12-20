import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const HamburgerMenu = ({ onClose }) => {
  return (
    <View style={[styles.hamburgerMenu, styles.iconLayout4]}>
      <View style={[styles.list, styles.frameBg]}>
        <View style={styles.settingParent}>
          <View style={[styles.setting, styles.settingPosition]}>
            <View style={[styles.settingChild, styles.settingChildLayout]} />
            <Text style={[styles.nutrition, styles.nutritionTypo]}>
              Nutrition
            </Text>
          </View>
          <Image
            style={[styles.variantIcon, styles.frameIconPosition]}
            contentFit="cover"
            source={require("../assets/svg8.png")}
          />
          <Image
            style={[styles.svg8Icon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/svg83.png")}
          />
        </View>
        <View style={styles.settingGroup}>
          <View style={styles.setting1}>
            <View style={[styles.settingItem, styles.settingChildLayout]} />
            <Text style={[styles.restAndRecovery, styles.mindfulnessTypo]}>
              Rest and Recovery
            </Text>
          </View>
          <Image
            style={[styles.variantIcon1, styles.iconPosition2]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
          <Image
            style={[styles.objectIcon, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/object.png")}
          />
        </View>
        <View style={[styles.settingWrapper, styles.settingLayout]}>
          <View style={[styles.setting2, styles.settingLayout]}>
            <View style={[styles.settingInner, styles.settingChildLayout]} />
            <Text style={[styles.mindfulness, styles.setting29Position]}>
              Mindfulness
            </Text>
            <Image
              style={[styles.svg8Icon1, styles.svg8Icon1Position]}
              contentFit="cover"
              source={require("../assets/svg8.png")}
            />
            <Image
              style={[styles.frameIcon, styles.frameIconPosition]}
              contentFit="cover"
              source={require("../assets/frame21.png")}
            />
          </View>
        </View>
        <View style={styles.settingGroup}>
          <View style={styles.setting1}>
            <View style={[styles.settingItem, styles.settingChildLayout]} />
            <Text style={[styles.nutrition, styles.nutritionTypo]}>
              Scoliosis
            </Text>
          </View>
          <Image
            style={[styles.variantIcon1, styles.iconPosition2]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
          <Image
            style={[styles.layer11Icon, styles.frameIconPosition]}
            contentFit="cover"
            source={require("../assets/layer-1-13.png")}
          />
        </View>
        <View style={styles.settingGroup}>
          <View style={styles.setting1}>
            <View style={[styles.settingItem, styles.settingChildLayout]} />
            <Text style={[styles.breastCancer, styles.breastCancerTypo]}>
              Breast Cancer
            </Text>
          </View>
          <Image
            style={[styles.variantIcon1, styles.iconPosition2]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
          <Image
            style={[styles.frameIcon1, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/frame15.png")}
          />
        </View>
        <View style={[styles.settingWrapper, styles.settingLayout]}>
          <View style={styles.setting5}>
            <View style={[styles.settingItem, styles.settingChildLayout]} />
            <Text style={[styles.nutrition, styles.nutritionTypo]}>
              Movement
            </Text>
          </View>
          <Image
            style={[styles.variantIcon4, styles.iconPosition2]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
          <Image
            style={[styles.layer1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/layer-13.png")}
          />
        </View>
        <View style={styles.settingGroup}>
          <View style={styles.setting1}>
            <View style={[styles.settingItem, styles.settingChildLayout]} />
            <Text style={[styles.heartHealth, styles.mindfulnessTypo]}>
              Heart Health
            </Text>
          </View>
          <Image
            style={[styles.variantIcon1, styles.iconPosition2]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
          <Image
            style={[styles.frameIcon2, styles.frameIconPosition]}
            contentFit="cover"
            source={require("../assets/frame16.png")}
          />
        </View>
        <View style={styles.settingGroup}>
          <View style={styles.setting1}>
            <View style={[styles.settingItem, styles.settingChildLayout]} />
            <Text style={[styles.holisticApproaches, styles.createTypo]}>
              Holistic Approaches
            </Text>
          </View>
          <Image
            style={[styles.variantIcon1, styles.iconPosition2]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
          <Image
            style={[styles.layer1Icon1, styles.iconPosition1]}
            contentFit="cover"
            source={require("../assets/layer-14.png")}
          />
        </View>
        <View style={styles.settingParent4}>
          <View style={[styles.setting8, styles.setting8Position]}>
            <View style={[styles.settingItem, styles.settingChildLayout]} />
            <Text style={[styles.nutrition, styles.nutritionTypo]}>Skin</Text>
          </View>
          <Image
            style={[styles.variantIcon7, styles.setting8Position]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
          <Image
            style={[styles.layer1Icon2, styles.frameIconPosition]}
            contentFit="cover"
            source={require("../assets/layer-15.png")}
          />
        </View>
        <View style={styles.settingGroup}>
          <View style={styles.setting1}>
            <View style={[styles.settingItem, styles.settingChildLayout]} />
            <Text style={[styles.holisticApproaches, styles.createTypo]}>
              Stress Management
            </Text>
          </View>
          <Image
            style={[styles.variantIcon1, styles.iconPosition2]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
          <Image
            style={[styles.frameIcon3, styles.frameIconPosition]}
            contentFit="cover"
            source={require("../assets/frame17.png")}
          />
        </View>
        <View style={styles.settingGroup}>
          <View style={[styles.settingItem, styles.settingChildLayout]} />
          <Text style={[styles.breastCancer, styles.breastCancerTypo]}>
            Fitness Fam
          </Text>
          <Image
            style={[styles.variantIcon1, styles.iconPosition2]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
          <Image
            style={[
              styles.exercisePlanConsistantIcon,
              styles.frameIconPosition,
            ]}
            contentFit="cover"
            source={require("../assets/exerciseplanconsistant.png")}
          />
        </View>
        <View style={styles.setting11}>
          <View style={[styles.settingChild8, styles.settingChildLayout]} />
          <Text style={[styles.digestive, styles.nutritionTypo]}>
            Digestive
          </Text>
          <Image
            style={[styles.variantIcon10, styles.iconPosition2]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
          <Image
            style={[styles.layer11Icon1, styles.frameIconPosition]}
            contentFit="cover"
            source={require("../assets/layer-1-11.png")}
          />
        </View>
        <View style={styles.setting12}>
          <View style={[styles.settingChild9, styles.settingChildLayout]} />
          <Text style={[styles.arthritis, styles.arthritisPosition]}>
            Arthritis
          </Text>
          <Image
            style={[styles.variantIcon11, styles.arthritisPosition]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
          <Image
            style={[styles.icons, styles.iconsLayout]}
            contentFit="cover"
            source={require("../assets/icons.png")}
          />
        </View>
        <View style={styles.setting13}>
          <View style={[styles.settingChild10, styles.settingChildLayout]} />
          <Text style={[styles.celiacDisease, styles.mentalHealthTypo]}>
            Celiac Disease
          </Text>
          <Image
            style={[styles.variantIcon4, styles.iconPosition2]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
          <Image
            style={[styles.flatIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/flat.png")}
          />
        </View>
        <View style={styles.setting11}>
          <View style={styles.setting14}>
            <View style={[styles.settingChild8, styles.settingChildLayout]} />
            <Text style={[styles.appendectomy, styles.breastCancerTypo]}>
              Appendectomy
            </Text>
            <Image
              style={[styles.variantIcon1, styles.iconPosition2]}
              contentFit="cover"
              source={require("../assets/svg81.png")}
            />
          </View>
          <Image
            style={[styles.flatIcon1, styles.frameIconPosition]}
            contentFit="cover"
            source={require("../assets/flat2.png")}
          />
        </View>
        <View style={styles.settingGroup}>
          <View style={styles.setting1}>
            <View style={[styles.settingItem, styles.settingChildLayout]} />
            <Text style={[styles.nutrition, styles.nutritionTypo]}>
              Fertility
            </Text>
          </View>
          <Image
            style={[styles.variantIcon1, styles.iconPosition2]}
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
          <View style={styles.setting1}>
            <View style={[styles.settingItem, styles.settingChildLayout]} />
            <Text style={[styles.heartHealth, styles.mindfulnessTypo]}>
              Hernia Repar
            </Text>
          </View>
          <Image
            style={[styles.variantIcon1, styles.iconPosition2]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
          <Image
            style={[styles.icon, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/icon1.png")}
          />
        </View>
        <View style={styles.settingParent9}>
          <View style={[styles.setting17, styles.svg8Icon1Position]}>
            <View style={[styles.settingItem, styles.settingChildLayout]} />
            <Text style={[styles.mentalHealth, styles.mentalHealthTypo]}>
              Mental Health
            </Text>
          </View>
          <Image
            style={[styles.flatIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/frame18.png")}
          />
          <Image
            style={[styles.svg8Icon1, styles.svg8Icon1Position]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
        </View>
        <View style={styles.settingGroup}>
          <View style={styles.setting1}>
            <View style={[styles.settingItem, styles.settingChildLayout]} />
            <Text style={[styles.nutrition, styles.nutritionTypo]}>
              Workplace
            </Text>
          </View>
          <Image
            style={[styles.variantIcon1, styles.iconPosition2]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
          <Image
            style={[styles.frameIcon5, styles.iconPosition1]}
            contentFit="cover"
            source={require("../assets/frame19.png")}
          />
        </View>
        <View style={styles.settingParent11}>
          <View style={styles.setting19}>
            <View style={[styles.settingItem, styles.settingChildLayout]} />
            <Text style={[styles.nutrition, styles.nutritionTypo]}>
              Wellness
            </Text>
          </View>
          <Image
            style={[styles.variantIcon17, styles.iconPosition2]}
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
          <View style={styles.setting1}>
            <View style={[styles.settingItem, styles.settingChildLayout]} />
            <Text style={[styles.nutrition, styles.nutritionTypo]}>Family</Text>
          </View>
          <Image
            style={[styles.variantIcon1, styles.iconPosition2]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
          <Image
            style={[styles.layer1Icon4, styles.frameIconPosition]}
            contentFit="cover"
            source={require("../assets/layer-17.png")}
          />
        </View>
        <View style={styles.setting12}>
          <View style={[styles.setting21, styles.arthritisPosition]}>
            <View style={[styles.settingItem, styles.settingChildLayout]} />
            <Text style={[styles.painManagement, styles.mindfulnessTypo]}>
              Pain Management
            </Text>
          </View>
          <Image
            style={[styles.variantIcon11, styles.arthritisPosition]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
          <Image
            style={[styles.frameIcon6, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/frame22.png")}
          />
        </View>
        <View style={styles.settingParent4}>
          <View style={[styles.setting8, styles.setting8Position]}>
            <View style={[styles.settingItem, styles.settingChildLayout]} />
            <Text style={[styles.autoimmune, styles.createTypo]}>
              Autoimmune
            </Text>
          </View>
          <Image
            style={[styles.variantIcon7, styles.setting8Position]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
          <Image
            style={[styles.layer11Icon2, styles.frameIconPosition]}
            contentFit="cover"
            source={require("../assets/layer-1-14.png")}
          />
        </View>
        <View style={styles.settingGroup}>
          <View style={styles.setting1}>
            <View style={[styles.settingItem, styles.settingChildLayout]} />
            <Text style={[styles.mentalHealth, styles.mentalHealthTypo]}>
              Neurological
            </Text>
          </View>
          <Image
            style={[styles.variantIcon1, styles.iconPosition2]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
          <Image
            style={[styles.frameIcon7, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/frame23.png")}
          />
        </View>
        <View style={styles.settingGroup}>
          <View style={styles.setting1}>
            <View style={[styles.settingItem, styles.settingChildLayout]} />
            <Text style={[styles.mentalHealth, styles.mentalHealthTypo]}>
              Fibromyalgia
            </Text>
          </View>
          <Image
            style={[styles.variantIcon1, styles.iconPosition2]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
        </View>
        <View style={styles.settingGroup}>
          <View style={styles.setting1}>
            <View style={[styles.settingItem, styles.settingChildLayout]} />
            <Text style={[styles.nutrition, styles.nutritionTypo]}>
              Bipolar
            </Text>
          </View>
          <Image
            style={[styles.variantIcon1, styles.iconPosition2]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
        </View>
        <View style={styles.settingGroup}>
          <View style={styles.setting1}>
            <View style={[styles.settingItem, styles.settingChildLayout]} />
            <Text style={[styles.chemotherapy, styles.mindfulnessTypo]}>
              Chemotherapy
            </Text>
          </View>
          <Image
            style={[styles.variantIcon1, styles.iconPosition2]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
        </View>
        <View style={styles.settingGroup}>
          <View style={styles.setting1}>
            <View style={[styles.settingItem, styles.settingChildLayout]} />
            <Text style={[styles.nutrition, styles.nutritionTypo]}>IBS</Text>
          </View>
          <Image
            style={[styles.variantIcon1, styles.iconPosition2]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
        </View>
        <View style={styles.settingGroup}>
          <View style={styles.setting1}>
            <View style={[styles.settingItem, styles.settingChildLayout]} />
            <Text style={[styles.nutrition, styles.nutritionTypo]}>
              Thyroid
            </Text>
          </View>
          <Image
            style={[styles.variantIcon1, styles.iconPosition2]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
        </View>
        <View style={[styles.settingWrapper, styles.settingLayout]}>
          <View style={[styles.setting29, styles.setting29Position]}>
            <View style={[styles.settingItem, styles.settingChildLayout]} />
            <Text style={[styles.nutrition, styles.nutritionTypo]}>
              Pregnancy
            </Text>
          </View>
          <Image
            style={[styles.svg8Icon1, styles.svg8Icon1Position]}
            contentFit="cover"
            source={require("../assets/variant1.png")}
          />
          <Image
            style={[styles.xmlid1Icon, styles.frameIconPosition]}
            contentFit="cover"
            source={require("../assets/xmlid-1.png")}
          />
        </View>
        <View style={styles.settingGroup}>
          <View style={styles.setting1}>
            <View style={[styles.settingItem, styles.settingChildLayout]} />
            <Text style={[styles.autoimmune, styles.createTypo]}>
              Reproductive
            </Text>
          </View>
          <Image
            style={[styles.variantIcon1, styles.iconPosition2]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
        </View>
        <View style={styles.settingGroup}>
          <View style={styles.setting1}>
            <View style={[styles.settingItem, styles.settingChildLayout]} />
            <Text style={[styles.autoimmune, styles.createTypo]}>
              Concussion
            </Text>
          </View>
          <Image
            style={[styles.variantIcon1, styles.iconPosition2]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
        </View>
        <View style={styles.settingGroup}>
          <View style={styles.setting1}>
            <View style={[styles.settingItem, styles.settingChildLayout]} />
            <Text style={[styles.nutrition, styles.nutritionTypo]}>
              Epilepsy
            </Text>
          </View>
          <Image
            style={[styles.variantIcon1, styles.iconPosition2]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
        </View>
        <View style={styles.settingGroup}>
          <View style={styles.setting1}>
            <View style={[styles.settingItem, styles.settingChildLayout]} />
            <Text style={[styles.nutrition, styles.nutritionTypo]}>
              Parenting
            </Text>
          </View>
          <Image
            style={[styles.variantIcon1, styles.iconPosition2]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
        </View>
        <View style={styles.settingGroup}>
          <View style={styles.setting1}>
            <View style={[styles.settingItem, styles.settingChildLayout]} />
            <Text style={[styles.nutrition, styles.nutritionTypo]}>Asma</Text>
          </View>
          <Image
            style={[styles.variantIcon1, styles.iconPosition2]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
        </View>
        <View style={styles.settingGroup}>
          <View style={styles.setting1}>
            <View style={[styles.settingItem, styles.settingChildLayout]} />
            <Text style={[styles.nutrition, styles.nutritionTypo]}>
              Cholesterol
            </Text>
          </View>
          <Image
            style={[styles.variantIcon1, styles.iconPosition2]}
            contentFit="cover"
            source={require("../assets/variant.png")}
          />
        </View>
        <View style={styles.settingGroup}>
          <View style={styles.setting1}>
            <View style={[styles.settingItem, styles.settingChildLayout]} />
            <Text style={[styles.autoimmune, styles.createTypo]}>
              Blood Pressure
            </Text>
          </View>
          <Image
            style={[styles.variantIcon1, styles.iconPosition2]}
            contentFit="cover"
            source={require("../assets/variant2.png")}
          />
        </View>
        <View style={styles.settingGroup}>
          <View style={styles.setting1}>
            <View style={[styles.settingItem, styles.settingChildLayout]} />
            <Text style={[styles.nutrition, styles.nutritionTypo]}>Anemia</Text>
          </View>
          <Image
            style={[styles.variantIcon1, styles.iconPosition2]}
            contentFit="cover"
            source={require("../assets/variant2.png")}
          />
        </View>
        <View style={styles.settingGroup}>
          <View style={styles.setting1}>
            <View style={[styles.settingItem, styles.settingChildLayout]} />
            <Text style={[styles.chronicFatigue, styles.mindfulnessTypo]}>
              Chronic Fatigue
            </Text>
          </View>
          <Image
            style={[styles.variantIcon1, styles.iconPosition2]}
            contentFit="cover"
            source={require("../assets/variant2.png")}
          />
        </View>
        <View style={styles.settingGroup}>
          <View style={styles.setting1}>
            <View style={[styles.settingItem, styles.settingChildLayout]} />
            <Text style={[styles.nutrition, styles.nutritionTypo]}>
              Depression
            </Text>
          </View>
          <Image
            style={[styles.variantIcon1, styles.iconPosition2]}
            contentFit="cover"
            source={require("../assets/variant2.png")}
          />
        </View>
      </View>
      <View style={styles.hamburgerMenuInner}>
        <View style={styles.rectangleParent}>
          <View style={[styles.frameChild, styles.frameBg]} />
          <View style={[styles.frameItem, styles.frameBg]} />
          <Text style={[styles.pageTitle, styles.createClr]}>
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
  iconLayout4: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  frameBg: {
    backgroundColor: Color.colorDarkseagreen,
    width: 284,
  },
  settingPosition: {
    bottom: 0,
    left: "50%",
  },
  settingChildLayout: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorDimgray_200,
    borderStyle: "solid",
    width: 270,
    position: "absolute",
  },
  nutritionTypo: {
    width: 80,
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.boldP2_size,
    left: 64,
  },
  frameIconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  iconLayout1: {
    height: 20,
    width: 21,
    left: 9,
    overflow: "hidden",
    position: "absolute",
  },
  mindfulnessTypo: {
    left: 65,
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.boldP2_size,
  },
  iconPosition2: {
    left: 245,
    overflow: "hidden",
    width: 24,
  },
  iconLayout2: {
    width: 21,
    height: 21,
    overflow: "hidden",
    top: 0,
    position: "absolute",
  },
  settingLayout: {
    height: 29,
    width: 269,
  },
  setting29Position: {
    top: 5,
    position: "absolute",
  },
  svg8Icon1Position: {
    top: 1,
    height: 24,
    position: "absolute",
  },
  breastCancerTypo: {
    width: 110,
    left: 65,
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.boldP2_size,
    position: "absolute",
  },
  iconLayout: {
    width: 29,
    height: 29,
    overflow: "hidden",
    top: 0,
    position: "absolute",
  },
  createTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interBold,
  },
  iconPosition1: {
    left: 13,
    overflow: "hidden",
    top: 0,
    position: "absolute",
  },
  setting8Position: {
    top: 2,
    height: 24,
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
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.boldP2_size,
    left: 64,
    position: "absolute",
  },
  iconPosition: {
    width: 22,
    overflow: "hidden",
    top: 0,
    position: "absolute",
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
    marginLeft: -135,
    bottom: 0,
    left: "50%",
  },
  nutrition: {
    top: 0,
    position: "absolute",
  },
  setting: {
    marginLeft: -134.75,
    height: 24,
    width: 269,
    position: "absolute",
  },
  variantIcon: {
    left: 246,
    width: 24,
    overflow: "hidden",
    top: 0,
    height: 24,
  },
  svg8Icon: {
    top: 4,
  },
  settingParent: {
    height: 28,
    width: 270,
  },
  settingItem: {
    top: 24,
    left: 0,
  },
  restAndRecovery: {
    width: 134,
    top: 0,
    position: "absolute",
  },
  setting1: {
    left: 0,
    top: 0,
    height: 24,
    width: 269,
    position: "absolute",
  },
  variantIcon1: {
    top: 0,
    height: 24,
    position: "absolute",
  },
  objectIcon: {
    height: 21,
    left: 9,
    width: 21,
  },
  settingGroup: {
    marginTop: 8,
    height: 24,
    width: 269,
  },
  settingInner: {
    top: 29,
    left: 0,
  },
  mindfulness: {
    width: 97,
    left: 65,
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.boldP2_size,
  },
  svg8Icon1: {
    left: 245,
    overflow: "hidden",
    width: 24,
  },
  frameIcon: {
    height: 25,
    left: 8,
    width: 24,
    overflow: "hidden",
    top: 0,
  },
  setting2: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  settingWrapper: {
    marginTop: 8,
  },
  layer11Icon: {
    width: 18,
    height: 18,
    left: 11,
    top: 0,
  },
  breastCancer: {
    top: 0,
  },
  frameIcon1: {
    top: 0,
  },
  setting5: {
    top: 3,
    left: 0,
    height: 24,
    width: 269,
    position: "absolute",
  },
  variantIcon4: {
    top: 3,
    height: 24,
    position: "absolute",
  },
  layer1Icon: {
    left: 6,
  },
  heartHealth: {
    width: 105,
    top: 0,
    position: "absolute",
  },
  frameIcon2: {
    width: 20,
    left: 12,
    height: 18,
    top: 0,
  },
  holisticApproaches: {
    width: 153,
    color: Color.colorGray_200,
    fontWeight: "700",
    fontSize: FontSize.boldP2_size,
    left: 64,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    top: 0,
    position: "absolute",
  },
  layer1Icon1: {
    width: 17,
    height: 18,
  },
  setting8: {
    left: 0,
    width: 269,
  },
  variantIcon7: {
    left: 245,
    overflow: "hidden",
    width: 24,
  },
  layer1Icon2: {
    width: 27,
    height: 25,
    left: 8,
    top: 0,
  },
  settingParent4: {
    height: 26,
    marginTop: 8,
    width: 269,
  },
  frameIcon3: {
    width: 23,
    height: 22,
    left: 10,
    top: 0,
  },
  exercisePlanConsistantIcon: {
    height: "66.67%",
    width: "6.68%",
    top: "8.33%",
    right: "88.27%",
    bottom: "25%",
    left: "5.05%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  settingChild8: {
    top: 28,
    left: 0,
  },
  digestive: {
    top: 4,
    position: "absolute",
  },
  variantIcon10: {
    top: 4,
    height: 24,
    position: "absolute",
  },
  layer11Icon1: {
    width: 19,
    left: 14,
    top: 0,
    height: 24,
  },
  setting11: {
    marginTop: 8,
    width: 269,
    height: 28,
  },
  settingChild9: {
    top: 32,
    left: 0,
  },
  arthritis: {
    width: 80,
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.boldP2_size,
    left: 64,
  },
  variantIcon11: {
    left: 245,
    overflow: "hidden",
    width: 24,
    height: 24,
  },
  icons: {
    left: 10,
  },
  setting12: {
    height: 32,
    marginTop: 8,
    width: 269,
  },
  settingChild10: {
    top: 27,
    left: 0,
  },
  celiacDisease: {
    top: 3,
  },
  flatIcon: {
    height: 22,
    left: 12,
  },
  setting13: {
    height: 27,
    marginTop: 8,
    width: 269,
  },
  appendectomy: {
    top: 4,
  },
  setting14: {
    left: 0,
    top: 0,
    width: 269,
    height: 28,
    position: "absolute",
  },
  flatIcon1: {
    left: 11,
    width: 24,
    overflow: "hidden",
    top: 0,
    height: 24,
  },
  iconsManandwoman: {
    left: 11,
    height: 21,
  },
  icon: {
    left: 12,
    height: 21,
  },
  mentalHealth: {
    top: 0,
  },
  setting17: {
    left: 0,
    width: 269,
  },
  settingParent9: {
    height: 25,
    marginTop: 8,
    width: 269,
  },
  frameIcon5: {
    height: 19,
    width: 20,
  },
  setting19: {
    top: 7,
    left: 0,
    height: 24,
    width: 269,
    position: "absolute",
  },
  variantIcon17: {
    top: 7,
    height: 24,
    position: "absolute",
  },
  layer1Icon3: {
    left: 12,
  },
  settingParent11: {
    height: 31,
    marginTop: 8,
    width: 269,
  },
  layer1Icon4: {
    left: 14,
    width: 20,
    top: 3,
    height: 18,
  },
  painManagement: {
    width: 145,
    top: 0,
    position: "absolute",
  },
  setting21: {
    left: 0,
    height: 24,
    width: 269,
  },
  frameIcon6: {
    left: 8,
  },
  autoimmune: {
    width: 113,
    color: Color.colorGray_200,
    fontWeight: "700",
    fontSize: FontSize.boldP2_size,
    left: 64,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    top: 0,
    position: "absolute",
  },
  layer11Icon2: {
    width: 26,
    height: 26,
    left: 11,
    top: 0,
  },
  frameIcon7: {
    left: 14,
    height: 22,
  },
  chemotherapy: {
    width: 123,
    top: 0,
    position: "absolute",
  },
  setting29: {
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
    maxHeight: "100%",
    maxWidth: "100%",
  },
  chronicFatigue: {
    width: 141,
    top: 0,
    position: "absolute",
  },
  list: {
    marginLeft: -142,
    top: 85,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_31xl,
    paddingVertical: 0,
    left: "50%",
    backgroundColor: Color.colorDarkseagreen,
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
  pageTitle: {
    top: 14,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.dMSansBold,
    textAlign: "center",
    width: 104,
    height: 55,
    zIndex: 2,
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
  hamburgerMenuInner: {
    width: 285,
    left: 0,
    top: 0,
    position: "absolute",
    height: 844,
  },
  hamburgerMenu: {
    backgroundColor: "#467d5e",
    height: 844,
    width: 284,
    maxWidth: "100%",
  },
});

export default HamburgerMenu;
