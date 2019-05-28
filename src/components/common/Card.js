import React from "react";
import { View } from "react-native";
import { moderateScale } from "../../helpers/ResponsiveFonts";
const Card = props => {
  return (
    <View style={[styles.containerStyle, props.style]}>{props.children}</View>
  );
};

const styles = {
  containerStyle: {
    borderRadius: moderateScale(10),
    borderColor: "transparent",
    borderBottomWidth: moderateScale(0),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: moderateScale(1) },
    shadowOpacity: moderateScale(0.1),
    shadowRadius: moderateScale(2),
    elevation: moderateScale(3),
    marginTop: moderateScale(10),
    marginBottom: moderateScale(10),
    // padding: moderateScale(30),
    backgroundColor: "white"
    // minHeight:verticalScale(300),
    //alignSelf: "stretch",
    //justifyContent: "center"
  }
};

export default Card;
