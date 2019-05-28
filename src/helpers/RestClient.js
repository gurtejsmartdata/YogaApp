/* eslint-disable */

"use strict";
import { NetInfo } from "react-native";
class RestClient {
  static isConnected() {
    let context = this;
    return new Promise(function(fulfill, reject) {
      NetInfo.isConnected.fetch().then(isConnected => {
        if (isConnected) fulfill(isConnected);
        else {
          reject(isConnected);
        }
      });
    });
  }
  static getCall(url) {
    let context = this;
    return new Promise(function(fulfill, reject) {
      context
        .isConnected()
        .then(() => {
          fetch(url, {
            method: "GET",
            timeout: 1000 * 1 * 60,
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Cache-Control": "no-cache"
            }
          })
            .then(response => {
              return response.text();
            })
            .then(responseText => {
              console.log(" get call responseText*****", responseText);
              fulfill(JSON.parse(responseText));
            })
            .catch(error => {
              fulfill({
                message:
                  "The server is not reachable right now, sorry for inconvenience."
              });
              console.warn("eroro", error);
            });
        })
        .catch(error => {
          console.log("eroro ********* ", error);
          fulfill({
            message: "Please check your internet connectivity."
          });
        });
    });
  }
}
export default RestClient;
