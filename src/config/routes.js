import React from "react";
import { Navigation } from "react-native-navigation";
import { View } from "react-native";
import { Provider } from "react-redux";
import Auth from "../container/auth/authenticate";
import { Header } from "react-native-elements";
/* eslint-disable */
const WrapScreen = (ReduxScreen, store, headerProps) => props => (
  <Provider store={store}>
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, zIndex: 99 }}>
        <Header
          centerComponent={{ text: "", style: { color: "#fff" } }}
        />
        <ReduxScreen {...props} />
      </View>
    </View>
  </Provider>
);
/* eslint-enable */

export const registerScreens = (store, Provider) => {
  // Loader Stack
  Navigation.registerComponentWithRedux(
    "Loader",
    () => require("../container/AppContainer").default,
    Provider,
    store
  );
  // Auth stack
  Navigation.registerComponent(
    "Auth",
    () => WrapScreen(Auth, store, { disableHeader: true }),
    () => Auth
  );
};
