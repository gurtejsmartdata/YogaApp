import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import Constants from "../../constants";
import { moderateScale } from "../../helpers/ResponsiveFonts";
import AuthButton from "./AuthButton";

const CancelView = props => {
  let { sureMessage, cancelMessage, onCancelPress, onConfirmPress } = props;
  return (
    <KeyboardAwareScrollView>
      <View style={Styles.container}>
        <View style={Styles.modalView}>
          <View
            style={{
              flex: 0.4,
              marginVertical: moderateScale(20),
              justifyContent: "center",
              alignItems: "center",
              borderRadius: moderateScale(100)
            }}
          >
            <Image
              source={Constants.Images.RideInfo.InActiveShuttle}
              resizeMode={"contain"}
            />
          </View>
          <View
            style={{
              flex: 0.6,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={Styles.text}>
              {sureMessage || Constants.Strings.CancelRide.AreYouSureYouWantTo}
            </Text>
            <Text style={Styles.text}>{cancelMessage}</Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: Constants.Colors.Primary,
            justifyContent: "space-between",
            flexDirection: "row",
            borderColor: Constants.Colors.placehoder,
            borderWidth: 0.4
          }}
        >
          <AuthButton
            buttonStyle={Styles.buttonStyle}
            gradientStyle={Styles.gradientStyle}
            buttonName={Constants.Strings.CancelRide.No}
            gradientColors={["#FFFFFF", "#FFFFFF"]}
            textStyle={{ color: Constants.Colors.Primary }}
            onPress={onCancelPress}
            loading={false}
          />
          <AuthButton
            buttonStyle={Styles.buttonStyle}
            gradientStyle={Styles.gradientStyle}
            gradientColors={["#FFFFFF", "#FFFFFF"]}
            buttonName={Constants.Strings.CancelRide.Yes}
            onPress={onConfirmPress}
            textStyle={{ color: Constants.Colors.Primary }}
            loading={false}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default CancelView;

const Styles = StyleSheet.create({
  container: {
    height: Constants.BaseStyle.DEVICE_HEIGHT,
    backgroundColor: Constants.Colors.transparent,
    justifyContent: "flex-end"
  },
  modalView: {
    backgroundColor: Constants.Colors.White,
    flex: 0.25,
    //width: Constants.BaseStyle.DEVICE_WIDTH,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    paddingHorizontal: moderateScale(10)
  },
  PickerBtn: {
    height: moderateScale(40),
    width: moderateScale(40),
    borderRadius: moderateScale(100),
    backgroundColor: Constants.Colors.Yellow,
    justifyContent: "center",
    alignItems: "center"
  },
  modalTitle: {
    ...Constants.Fonts.TitilliumWebSemiBold,
    fontSize: moderateScale(19),
    color: Constants.Colors.Primary,
    paddingHorizontal: moderateScale(20)
  },
  headingText: {
    ...Constants.Fonts.TitilliumWebSemiBold,
    fontSize: moderateScale(19),
    color: Constants.Colors.Primary
  },
  okText: {
    ...Constants.Fonts.TitilliumWebSemiBold,
    fontSize: moderateScale(18),
    color: Constants.Colors.placehoder
  },
  text: {
    ...Constants.Fonts.TitilliumWebRegular,
    fontSize: moderateScale(17),
    color: Constants.Colors.placehoder
  },
  buttonStyle: {
    flex: 0.5,
    borderWidth: 0.4,
    borderColor: Constants.Colors.placehoder
  },
  gradientStyle: { borderRadius: 0 }
});
