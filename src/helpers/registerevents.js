/* eslint-disable */
import { NetInfo } from "react-native";

let Events = {
  RegisterNetEvents: () => {
    let handleFirstConnectivityChange = () => {
      NetInfo.isConnected.removeEventListener(
        "connectionChange",
        handleFirstConnectivityChange
      );
    };
    NetInfo.isConnected.addEventListener(
      "connectionChange",
      handleFirstConnectivityChange
    );
    NetInfo.isConnected.fetch().then(() => {});
  }
};
module.exports = Events;
