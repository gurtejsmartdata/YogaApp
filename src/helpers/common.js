/* eslint-disable */
"use strict";
import { Alert } from "react-native";
var Common = {
  Dialog: (msg, buttons) => {
    Alert.alert("", msg, buttons, { cancelable: true });
  },
  YouTubeGetID(url) {
    var ID = "";
    url = url
      .replace(/(>|<)/gi, "")
      .split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    if (url[2] !== undefined) {
      ID = url[2].split(/[^0-9a-z_\-]/i);
      ID = ID[0];
    } else {
      ID = url;
    }
    return ID;
  }
};

module.exports = Common;
