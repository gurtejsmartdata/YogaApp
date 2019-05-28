import { Platform } from "react-native";
import firebase from "react-native-firebase";

import type { Notification, NotificationOpen } from "react-native-firebase";

/*
Get the Fcm token of the device
*/
const getToken = async () => {
  const fcmToken = await firebase.messaging().getToken();
  if (fcmToken) {
  } else {
    // user doesn't have a device token yet
  }
};

/*
All Listeners related to Firebase
*/
export const listeners = () => {
  this.notificationDisplayedListener = firebase
    .notifications()
    .onNotificationDisplayed(notification => {});
  this.notificationListener = firebase
    .notifications()
    .onNotification(notification => {
      // When app is in forground  and push come immedialtely show (Without Touch)
    });
  this.notificationOpenedListener = firebase
    .notifications()
    .onNotificationOpened((notificationOpen: NotificationOpen) => {
      //when app is in background (not killed ) tapping on the push notification call that
    });
};
/*
when app is killed or not in memory push noptification come then cick on the push notification will call that function
*/
const getInitialNotification = async () => {
  const notificationOpen: NotificationOpen = await firebase
    .notifications()
    .getInitialNotification();
  if (notificationOpen) {
    //When the app is killed and tapping on the push will call this function
    console.log("getInitialNotification", notificationOpen);
  }
};
/**
 * Checking the app has permission for using firebase in ios
 */
const checkPermision = async () => {
  const enabled = await firebase.messaging().hasPermission();
  if (enabled) {
    trigerAllEvents();
  } else {
    requestpermission();
  }
};
/**
 * Requesting the app permission for firebase in ios
 */
const requestpermission = async () => {
  try {
    const enabled = await firebase.messaging().requestPermission();
    if (enabled) {
      trigerAllEvents();
    } else {
      requestpermission();
    }
  } catch (error) {
    // User has rejected permissions
  }
};

const trigerAllEvents = () => {
  getToken();
  getInitialNotification();
  listeners();
};
/*
Remove All Listeners
*/
export const removeListeners = () => {
  this.notificationDisplayedListener();
  this.notificationListener();
  this.notificationOpenedListener();
};
/**
 It loads the fcm
 */
export const pushNotifificationInit = async () => {
  if (Platform.OS === "ios") {
    checkPermision();
  } else {
    trigerAllEvents();
  }
};
