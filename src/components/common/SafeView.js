import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Platform } from "react-native";

import { moderateScale } from "../../helpers/ResponsiveFonts";
import Constants from "../../constants";

const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

export default class SafeView extends Component {
  render() {
    return (
      <MyStatusBar
        backgroundColor={Constants.Colors.transparent}
        barStyle="light-content"
      />
    );
  }
}

const STATUSBAR_HEIGHT =
  Platform.OS === "ios"
    ? Constants.BaseStyle.isIphoneX()
      ? moderateScale(40)
      : moderateScale(20)
    : StatusBar.currentHeight;
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  statusBar: {
    height: STATUSBAR_HEIGHT
  }
});
