/*
 * @file: i18n.js
 * @description: App i18n Localization
 * @auther Suraj Sanwal
 * */
import AppCosntants from "./AppConstants";
("use strict");

let Strings = {
  Common: {
    EmptyEmailMsg: "Please enter an email address.",
    ValidEmailAddress: "Please enter a valid email address.",
    EnterPassword: "Please enter a password.",
    VaildDigit: "No of persons must be between 1-20"
  },
  Error: {},
  PlaceHolder: {},
  Login: {
    Heading: "Welcome",
    LoginMsg: "Sign in to the account",
    UserName: "Email Address",
    Password: "Password",
    ForgotPassword: "Forgot Password?",
    NewUser: "New User?",
    Signup: " Sign Up"
  },
  Signup: {},
  ForgotPassword: {},
  Permissions: {
    Locations:
      "Location access permission is denied for " +
      AppCosntants.AppName +
      ",Please enable it from the settings",
    Camera:
      "Camera access permission is denied for " +
      AppCosntants.AppName +
      ",Please enable it from the settings",
    Gallery:
      "Gallery access permission is denied for " +
      AppCosntants.AppName +
      ",Please enable it from the settings"
  }
};

module.exports = Strings;
