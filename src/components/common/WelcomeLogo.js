import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

import Constants from "../../constants";

const WelcomeLogo = props => {
  let {
    heading,
    message,
    headingStyle,
    messageStyle,
    containerStyle,
    logo,
    logoStyle
  } = props;
  return (
    <View style={[Styles.welcomeLogoContainer, containerStyle]}>
      <View style={[Styles.logoStyle, logoStyle]}>
        <Image source={logo || Constants.Images.Common.Logo} />
      </View>
      {heading ? (
        <Text style={[Styles.welcomeText, headingStyle]}>{heading}</Text>
      ) : null}
      {message ? (
        <Text style={[Styles.screenText, messageStyle]}>{message} </Text>
      ) : null}
    </View>
  );
};

export default WelcomeLogo;

const Styles = StyleSheet.create({
  welcomeLogoContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  logoStyle: { paddingBottom: 0 },
  welcomeText: {
    ...Constants.Fonts.TitilliumWebSemiBold,
    fontSize: moderateScale(28),
    color: Constants.Colors.Primary
  },
  screenText: {
    ...Constants.Fonts.TitilliumWebRegular,
    fontSize: moderateScale(18),
    color: Constants.Colors.Primary
  }
});
