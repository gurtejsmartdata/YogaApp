import { Navigation } from "react-native-navigation";
import { registerScreens } from "./src/config/routes";
import { addListeners } from "./src/utilities/listeners";
import { Provider } from "react-redux";
import setup from "./src/store/setup";

Navigation.events().registerAppLaunchedListener(() => {
  const store = setup();
  registerScreens(store, Provider);
  addListeners();
  Navigation.setDefaultOptions({
    topBar: {
      visible: false,
      drawBehind: true
    },
    bottomTabs: {
      visible: true,
      drawBehind: true
    }
  });
  Navigation.setRoot({
    root: {
      component: {
        name: "Loader"
      }
    }
  });
});
