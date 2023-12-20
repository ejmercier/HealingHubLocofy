import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const ContainerOK = () => {
  return (
    <View style={styles.frameParent}>
      <View style={styles.frameGroup}>
        <View style={styles.rectangleParent}>
          <View style={[styles.frameChild, styles.frameLayout]} />
          <Text style={[styles.available, styles.todayTypo]}>Available</Text>
        </View>
        <View style={styles.rectangleGroup}>
          <View style={[styles.frameItem, styles.frameLayout]} />
          <Text style={[styles.today, styles.todayTypo]}>Today</Text>
        </View>
        <View style={styles.rectangleGroup}>
          <View style={[styles.frameInner, styles.frameLayout]} />
          <Text style={[styles.outOfOffice, styles.todayTypo]}>
            Out of office
          </Text>
        </View>
      </View>
      <View style={styles.pickerDropdowndatePanel}>
        <Image
          style={styles.arrowIcon}
          contentFit="cover"
          source={require("../assets/arrow.png")}
        />
        <View style={styles.antPickerHeader}>
          <View style={styles.padding} />
          <Image
            style={[styles.headerSuperPrevBtnIcon, styles.headerIconPosition]}
            contentFit="cover"
            source={require("../assets/headersuperprevbtn.png")}
          />
          <Image
            style={[styles.headerPrevBtnIcon, styles.headerIconPosition]}
            contentFit="cover"
            source={require("../assets/headerprevbtn.png")}
          />
          <Image
            style={[styles.headerSuperNextBtnIcon, styles.headerIconPosition]}
            contentFit="cover"
            source={require("../assets/headersupernextbtn.png")}
          />
          <Image
            style={[styles.headerNextBtnIcon, styles.headerIconPosition]}
            contentFit="cover"
            source={require("../assets/headernextbtn.png")}
          />
          <View style={[styles.headerView, styles.nowPosition]}>
            <Text style={[styles.may, styles.mayTypo]}>April</Text>
            <Text style={[styles.text, styles.mayTypo]}>2022</Text>
          </View>
        </View>
        <View style={styles.antPickerBody}>
          <View style={[styles.antPickerContent, styles.trFlexBox]}>
            <View style={[styles.tr, styles.trFlexBox]}>
              <Text style={styles.mon}>Sun</Text>
              <Text style={styles.mon}>Mon</Text>
              <Text style={styles.mon}>Tues</Text>
              <Text style={styles.mon}>Wed</Text>
              <Text style={styles.mon}>Thur</Text>
              <Text style={styles.mon}>Fri</Text>
              <Text style={styles.mon}>Sat</Text>
            </View>
            <View style={[styles.tr1, styles.trFlexBox]}>
              <View style={[styles.pickerCellmonth, styles.pickerLayout]}>
                <Text style={[styles.value, styles.valuePosition]}>27</Text>
              </View>
              <View style={[styles.pickerCellmonth1, styles.pickerLayout]}>
                <Text style={[styles.value1, styles.valuePosition]}>28</Text>
              </View>
              <View style={[styles.pickerCellmonth, styles.pickerLayout]}>
                <Text style={[styles.value, styles.valuePosition]}>29</Text>
              </View>
              <View style={[styles.pickerCellmonth, styles.pickerLayout]}>
                <Text style={[styles.value, styles.valuePosition]}>30</Text>
              </View>
              <View style={[styles.pickerCellmonth, styles.pickerLayout]}>
                <Text style={[styles.value2, styles.valueTypo]}>1</Text>
              </View>
              <View style={[styles.pickerCellmonth, styles.pickerLayout]}>
                <Text style={[styles.value, styles.valuePosition]}>2</Text>
              </View>
              <View style={[styles.pickerCellmonth, styles.pickerLayout]}>
                <Text style={[styles.value, styles.valuePosition]}>3</Text>
              </View>
            </View>
            <View style={[styles.tr1, styles.trFlexBox]}>
              <View style={[styles.pickerCellmonth, styles.pickerLayout]}>
                <Text style={[styles.value, styles.valuePosition]}>4</Text>
              </View>
              <View style={[styles.pickerCellmonth, styles.pickerLayout]}>
                <Text style={[styles.value2, styles.valueTypo]}>5</Text>
              </View>
              <View style={[styles.pickerCellmonth, styles.pickerLayout]}>
                <Text style={[styles.value2, styles.valueTypo]}>6</Text>
              </View>
              <View style={[styles.pickerCellmonth, styles.pickerLayout]}>
                <Text style={[styles.value2, styles.valueTypo]}>7</Text>
              </View>
              <View style={[styles.pickerCellmonth11, styles.pickerLayout]}>
                <Text style={[styles.value2, styles.valueTypo]}>8</Text>
              </View>
              <View style={[styles.pickerCellmonth, styles.pickerLayout]}>
                <Text style={[styles.value, styles.valuePosition]}>9</Text>
              </View>
              <View style={[styles.pickerCellmonth, styles.pickerLayout]}>
                <Text style={[styles.value, styles.valuePosition]}>10</Text>
              </View>
            </View>
            <View style={[styles.tr1, styles.trFlexBox]}>
              <View style={[styles.pickerCellmonth, styles.pickerLayout]}>
                <Text style={[styles.value2, styles.valueTypo]}>11</Text>
              </View>
              <View style={[styles.pickerCellmonth, styles.pickerLayout]}>
                <Text style={[styles.value2, styles.valueTypo]}>12</Text>
              </View>
              <View style={[styles.pickerCellmonth, styles.pickerLayout]}>
                <Text style={[styles.value2, styles.valueTypo]}>13</Text>
              </View>
              <View style={[styles.pickerCellmonth, styles.pickerLayout]}>
                <Text style={[styles.value2, styles.valueTypo]}>14</Text>
              </View>
              <View style={[styles.pickerCellmonth18, styles.pickerLayout]}>
                <Text style={[styles.value11, styles.valueTypo]}>15</Text>
              </View>
              <View style={[styles.pickerCellmonth, styles.pickerLayout]}>
                <Text style={[styles.value2, styles.valueTypo]}>16</Text>
              </View>
              <View style={[styles.pickerCellmonth, styles.pickerLayout]}>
                <Text style={[styles.value2, styles.valueTypo]}>17</Text>
              </View>
            </View>
            <View style={[styles.tr1, styles.trFlexBox]}>
              <View style={[styles.pickerCellmonth, styles.pickerLayout]}>
                <Text style={[styles.value, styles.valuePosition]}>18</Text>
              </View>
              <View style={[styles.pickerCellmonth, styles.pickerLayout]}>
                <Text style={[styles.value2, styles.valueTypo]}>19</Text>
              </View>
              <View style={[styles.pickerCellmonth, styles.pickerLayout]}>
                <Text style={[styles.value2, styles.valueTypo]}>20</Text>
              </View>
              <View style={[styles.pickerCellmonth, styles.pickerLayout]}>
                <Text style={[styles.value2, styles.valueTypo]}>21</Text>
              </View>
              <View style={[styles.pickerCellmonth, styles.pickerLayout]}>
                <Text style={[styles.value2, styles.valueTypo]}>1</Text>
              </View>
              <View style={[styles.pickerCellmonth, styles.pickerLayout]}>
                <Text style={[styles.value, styles.valuePosition]}>27</Text>
              </View>
              <View style={[styles.pickerCellmonth, styles.pickerLayout]}>
                <Text style={[styles.value2, styles.valueTypo]}>24</Text>
              </View>
            </View>
            <View style={[styles.tr1, styles.trFlexBox]}>
              <View style={[styles.pickerCellmonth, styles.pickerLayout]}>
                <Text style={[styles.value, styles.valuePosition]}>25</Text>
              </View>
              <View style={[styles.pickerCellmonth, styles.pickerLayout]}>
                <Text style={[styles.value2, styles.valueTypo]}>26</Text>
              </View>
              <View style={[styles.pickerCellmonth, styles.pickerLayout]}>
                <Text style={[styles.value, styles.valuePosition]}>27</Text>
              </View>
              <View style={[styles.pickerCellmonth, styles.pickerLayout]}>
                <Text style={[styles.value2, styles.valueTypo]}>28</Text>
              </View>
              <View style={[styles.pickerCellmonth, styles.pickerLayout]}>
                <Text style={[styles.value, styles.valuePosition]}>29</Text>
              </View>
              <View style={[styles.pickerCellmonth, styles.pickerLayout]}>
                <Text style={[styles.value2, styles.valueTypo]}>30</Text>
              </View>
              <View style={[styles.pickerCellmonth, styles.pickerLayout]}>
                <Text style={[styles.value2, styles.valueTypo]}>31</Text>
              </View>
            </View>
            <View style={[styles.tr1, styles.trFlexBox]}>
              <View style={[styles.pickerCellmonth, styles.pickerLayout]}>
                <Text style={[styles.value, styles.valuePosition]}>1</Text>
              </View>
              <View style={[styles.pickerCellmonth, styles.pickerLayout]}>
                <Text style={[styles.value, styles.valuePosition]}>2</Text>
              </View>
              <View style={[styles.pickerCellmonth, styles.pickerLayout]}>
                <Text style={[styles.value2, styles.valueTypo]}>3</Text>
              </View>
              <View style={[styles.pickerCellmonth, styles.pickerLayout]}>
                <Text style={[styles.value2, styles.valueTypo]}>4</Text>
              </View>
              <View style={[styles.pickerCellmonth, styles.pickerLayout]}>
                <Text style={[styles.value2, styles.valueTypo]}>5</Text>
              </View>
              <View style={[styles.pickerCellmonth, styles.pickerLayout]}>
                <Text style={[styles.value2, styles.valueTypo]}>6</Text>
              </View>
              <View style={[styles.pickerCellmonth, styles.pickerLayout]}>
                <Text style={[styles.value, styles.valuePosition]}>7</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.footerExtra}>
          <View style={[styles.button, styles.buttonShadowBox]}>
            <Text style={[styles.ok, styles.okTypo]}>Ok</Text>
          </View>
        </View>
        <View style={styles.pickerPanelfooter}>
          <Text style={[styles.now, styles.mayTypo]}>Now</Text>
          <View style={[styles.buttons, styles.buttonShadowBox]}>
            <Text style={[styles.button1, styles.okTypo]}>OK</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    height: 13,
    width: 15,
    borderRadius: 4,
  },
  todayTypo: {
    marginLeft: 10,
    textAlign: "left",
    fontFamily: FontFamily.semiBoldH6,
    fontWeight: "600",
    fontSize: FontSize.boldP2_size,
  },
  headerIconPosition: {
    width: 22,
    top: "50%",
    marginTop: -20,
    height: 40,
    position: "absolute",
  },
  nowPosition: {
    marginTop: -9,
    top: "50%",
    position: "absolute",
  },
  mayTypo: {
    textAlign: "center",
    fontFamily: FontFamily.body,
    lineHeight: 18,
    fontSize: FontSize.boldP2_size,
  },
  trFlexBox: {
    justifyContent: "space-between",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  pickerLayout: {
    height: 24,
    width: 24,
  },
  valuePosition: {
    left: "0%",
    top: "0%",
    height: "100%",
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.body,
    lineHeight: 18,
    width: "100%",
    fontSize: FontSize.boldP2_size,
    alignItems: "center",
    position: "absolute",
  },
  valueTypo: {
    fontFamily: FontFamily.boldH5,
    fontWeight: "700",
    left: "0%",
    top: "0%",
    height: "100%",
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    width: "100%",
    fontSize: FontSize.boldP2_size,
    alignItems: "center",
    position: "absolute",
  },
  buttonShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    top: "50%",
    overflow: "hidden",
    alignItems: "center",
    position: "absolute",
  },
  okTypo: {
    color: Color.conditionalPopOver,
    textAlign: "center",
    fontSize: FontSize.boldP2_size,
  },
  frameChild: {
    backgroundColor: Color.colorForestgreen,
  },
  available: {
    color: Color.colorForestgreen,
  },
  rectangleParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameItem: {
    backgroundColor: Color.primaryNavy1,
  },
  today: {
    color: Color.primaryNavy1,
  },
  rectangleGroup: {
    marginLeft: 31,
    alignItems: "center",
    flexDirection: "row",
  },
  frameInner: {
    backgroundColor: Color.coolGreyCoolGrey500,
  },
  outOfOffice: {
    color: Color.coolGreyCoolGrey500,
  },
  frameGroup: {
    flexDirection: "row",
  },
  arrowIcon: {
    maxWidth: "100%",
    height: 7,
    display: "none",
    width: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  padding: {
    top: 0,
    right: 0,
    left: 0,
    borderTopLeftRadius: Border.br_5xs,
    borderTopRightRadius: Border.br_5xs,
    backgroundColor: Color.conditionalPopOver,
    height: 40,
    position: "absolute",
  },
  headerSuperPrevBtnIcon: {
    left: 8,
    display: "none",
  },
  headerPrevBtnIcon: {
    left: 30,
  },
  headerSuperNextBtnIcon: {
    right: 8,
  },
  headerNextBtnIcon: {
    right: 30,
  },
  may: {
    color: Color.coolGreyCoolGrey500,
  },
  text: {
    marginLeft: 8,
    color: Color.coolGreyCoolGrey500,
  },
  headerView: {
    marginLeft: -36.5,
    left: "50%",
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "row",
  },
  antPickerHeader: {
    height: 40,
    display: "none",
    alignSelf: "stretch",
  },
  mon: {
    width: 36,
    height: 30,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.body,
    lineHeight: 18,
    color: Color.coolGreyCoolGrey500,
    fontSize: FontSize.boldP2_size,
    alignItems: "center",
  },
  tr: {
    alignItems: "center",
    flexDirection: "row",
  },
  value: {
    color: Color.neutralColorCoolGrey300,
  },
  pickerCellmonth: {
    borderRadius: Border.br_11xs,
  },
  value1: {
    color: Color.coolGreyCoolGrey200,
  },
  pickerCellmonth1: {
    borderRadius: Border.br_11xs,
    backgroundColor: Color.primaryNavy1,
  },
  value2: {
    color: Color.colorForestgreen,
  },
  tr1: {
    paddingHorizontal: Padding.p_7xs,
    paddingVertical: Padding.p_10xs,
    flexDirection: "row",
  },
  pickerCellmonth11: {
    overflow: "hidden",
  },
  value11: {
    color: Color.coolGreyCoolGrey200,
  },
  pickerCellmonth18: {
    borderRadius: Border.br_11xs,
    backgroundColor: Color.colorForestgreen,
  },
  antPickerContent: {
    flex: 1,
    alignItems: "center",
  },
  antPickerBody: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_xs,
    flex: 1,
    backgroundColor: Color.conditionalPopOver,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  ok: {
    lineHeight: 22,
    fontFamily: FontFamily.body14Regular,
  },
  button: {
    marginTop: -12,
    left: 12,
    backgroundColor: Color.daybreakBlue6,
    shadowColor: "rgba(0, 0, 0, 0.04)",
    shadowRadius: 0,
    elevation: 0,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_12xs,
    borderRadius: Border.br_11xs,
    justifyContent: "center",
  },
  footerExtra: {
    height: 38,
    backgroundColor: Color.conditionalPopOver,
    display: "none",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  now: {
    left: 11,
    color: Color.primaryPrimary700,
    marginTop: -9,
    top: "50%",
    position: "absolute",
  },
  button1: {
    fontWeight: "500",
    fontFamily: FontFamily.buttonMedium,
    lineHeight: 18,
    color: Color.conditionalPopOver,
  },
  buttons: {
    marginTop: -16,
    right: 12,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.primaryPrimary600,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 2,
    elevation: 2,
    borderStyle: "solid",
    borderColor: Color.primaryPrimary600,
    borderWidth: 1,
    paddingVertical: Padding.p_6xs,
    paddingHorizontal: Padding.p_xs,
    flexDirection: "row",
  },
  pickerPanelfooter: {
    height: 44,
    backgroundColor: Color.conditionalPopOver,
    display: "none",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  pickerDropdowndatePanel: {
    borderRadius: Border.br_5xs,
    width: 343,
    height: 317,
    marginTop: 12,
    overflow: "hidden",
  },
  frameParent: {
    top: 210,
    left: 28,
    position: "absolute",
  },
});

export default ContainerOK;
