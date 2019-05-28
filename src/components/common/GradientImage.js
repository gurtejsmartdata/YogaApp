import React from "react";
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";

import Constants from "../../constants";
import LinearGradient from "react-native-linear-gradient";

const GradientImage = props => {
  let { onPress, image, text } = props;

  return (
    <TouchableOpacity style={Styles.gradientContainer} onPress={onPress}>
      <View style={Styles.flex1Sec} />
      <LinearGradient
        colors={[Constants.Colors.Primary, Constants.Colors.Secondary]}
        style={Styles.gradient}
      >
        <View style={Styles.gradientDataContainer}>
          <View style={Styles.gradientImageContainer}>
            {image ? (
              <Image
                source={image}
                style={Styles.gradientImage}
                resizeMode="contain"
              />
            ) : null}
          </View>

          <View style={Styles.gradientTextContainer}>
            {text ? <Text style={Styles.gradientText}>{text}</Text> : null}
            <Image
              source={Constants.Images.Common.Arrow}
              style={Styles.arrow}
            />
          </View>
        </View>
      </LinearGradient>
      <View style={Styles.flex1Sec} />
    </TouchableOpacity>
  );
};

export default GradientImage;

const Styles = StyleSheet.create({
  gradientContainer: {
    backgroundColor: Constants.Colors.Yellow,
    flex: 0.25,
    flexDirection: "row"
  },
  gradient: {
    flex: 0.8,
    paddingLeft: moderateScale(5),
    paddingRight: moderateScale(10),
    borderRadius: moderateScale(50),
    justifyContent: "center"
  },
  flex1Sec: { flex: 0.1 },
  gradientDataContainer: {
    justifyContent: "space-between",
    flexDirection: "row"
  },
  gradientImageContainer: { flex: 0.25 },
  gradientImage: {
    height: Platform.OS == "ios" ? moderateScale(70) : moderateScale(60),
    width: Platform.OS == "ios" ? moderateScale(70) : moderateScale(60)
  },
  gradientTextContainer: {
    flex: 0.75,
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: moderateScale(15),
    flexDirection: "row"
  },
  gradientText: {
    ...Constants.Fonts.TitilliumWebSemiBold,
    color: Constants.Colors.White,
    fontSize: moderateScale(16),
    fontWeight: "400"
  },
  arrow: { marginRight: moderateScale(25.8) }
});
