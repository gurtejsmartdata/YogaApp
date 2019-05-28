import React from "react";
import { TouchableOpacity, View, Image, Text } from "react-native";

import Constants from "../../constants";
import Styles from "../../styles/component/Common/AuthHeader";
import SafeView from "./SafeView";
import { moderateScale } from "../../helpers/ResponsiveFonts";
const Header = props => {
  let { heading, disableBack, navigator } = props;

  return (
    <View>
      <SafeView />
      <View style={[Styles.mainAuthContainer]}>
        {!disableBack ? (
          <View>
            <TouchableOpacity
              style={Styles.backButtonContainer}
              onPress={() => {
                navigator.pop();
              }}
            >
              <Image source={Constants.Images.Common.Back} />
            </TouchableOpacity>
            <View style={Styles.headingContainer}>
              {heading ? <Text>{heading}</Text> : null}
            </View>
            <View style={Styles.rightButton} />
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default Header;
