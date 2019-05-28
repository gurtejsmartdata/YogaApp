/*Socket common file */
/* eslint-disable */
import { Alert } from "react-native";
import { Navigator } from "react-native-navigation";

import { storeObj } from "../store/setup";
import Connection from "../config/Connection";
import * as Types from "../actionTypes";
import { toastMessage, toastNotification } from "../config/navigators";
import Constants from "../constants";
// import { logOutUser } from "../actions/common/signin";
// import { setCurrentMap } from "../components/rider/rootMapView";
// import { socketDisconnected, syncDataAsync, nearByDriversList } from "../actions/rider/home";
// import { tripRequestUpdated, tripUpdated, driverLocationUpdated } from "../actions/rider/rideBooked";
// import "../UserAgent";

const io = require("socket.io-client");

let socket = null;
let navigator = null;

export function socketInit() {
  //console.log("Intializing socket");
  const { dispatch, getState } = storeObj.store;
  socket = io(Connection.getBaseUrl(), {
    jsonp: false,
    transports: ["websocket"],
    query: `token=${getState().user.accessToken}`
  });
  navigator = new Navigator();
  /****************************************************Soket Listining Events*********************************/

  /****************************************************Common*********************************/
  socket.on("connect", () => {
    console.log("Socket connected");
  });
  socket.on("disconnect", () => {
    console.log("Socket disconnected");
  });

  socket.on("unauthorizedToken", () => {
    //  dispatch(logOutUser());
  });
  socket.on("socketError", e => {
    Alert.alert(e);
  });

  socket.on("locationUpdated", res => {
    console.log("locationUpdated", res);
    if (res.success) {
      dispatch({ type: Types.UPDATE_GPS_LOCATION, payload: res.gpsLoc });
    } else {
      toastMessage(navigator, {
        type: Constants.AppCosntants.Notificaitons.Error,
        message: res.message
      });
    }
  });

  /****************************************************Rider*********************************/

  //handling no driver found on request ride
  socket.on("noDriverOnRequestRide", res => {
    console.log("noDriverOnRequestRide", res);
    toastMessage(navigator, {
      type: Constants.AppCosntants.Notificaitons.Error,
      message: res.message
    });
    navigator.showModal({
      screen: "RiderNoShuttle"
    });
  });

  // handling ride request sent successfully
  socket.on("rideRequestSentToDriver", res => {
    if (res.success) {
      dispatch({ type: Types.UPDATE_TRIP, payload: res.data });
      navigator.showModal({
        screen: "RideRequestConfrim"
      });
    } else {
      toastMessage(navigator, {
        type: Constants.AppCosntants.Notificaitons.Error,
        message: res.message
      });
    }
    console.log("rideRequestSentToDriver", res);
  });

  socket.on("requestCancelledRider,", res => {
    console.log("requestCancelledRider,", res);
  });

  socket.on("requestAcceptedRider,", res => {
    console.log("requestAcceptedRider,", res);
  });

  socket.on("requestRejectedRider,", res => {
    console.log("requestRejectedRider,", res);
  });
  /****************************************************driver*********************************/

  socket.on("requestDriver", res => {
    let { meta } = getState().trip;
    console.log("requestDriver", res);
    if (res.success) {
      toastNotification(navigator, {
        type: Constants.AppCosntants.Notificaitons.Success,
        message: res.message
      });
      dispatch({
        type: Types.UPDATE_RIDES_META,
        payload: meta && meta.newRequestsCount + 1
      });
      dispatch({ type: Types.UPDATE_RIDES, payload: res.data });
    } else {
      toastMessage(navigator, {
        type: Constants.AppCosntants.Notificaitons.Error,
        message: res.message
      });
    }
  });

  socket.on("requestCancelledDriver,", res => {
    console.log("requestCancelledDriver,", res);
  });

  socket.on("requestAcceptedDriver,", res => {
    console.log("requestAcceptedDriver,", res);
  });

  socket.on("requestRejectedDriver,", res => {
    console.log("requestRejectedDriver,", res);
  });
  /****************************************************Admin*********************************/
}
/****************************************************Emit Events*********************************/

/****************************************************Common*********************************/
export const updateLocation = payload => {
  const { getState } = storeObj.store;
  let { user } = getState();
  let { _id, userType } = user;
  let gpsLoc = [payload.longitude, payload.latitude];
  payload = {
    userType,
    _id,
    gpsLoc
  };
  socket.emit("updateLocation", payload);
};

/****************************************************Rider*********************************/

export const requestTrip = () => {
  const { getState } = storeObj.store;
  let { user, riderLocation } = getState();
  let { source, destination, time, person } = riderLocation;
  let { _id } = user;

  payload = {
    rider: {
      _id: _id
    },
    request: {
      sourceLoc: source._id,
      destLoc: destination._id,
      seats: person
      // time: time
    }
  };
  console.log("requestTrip", JSON.stringify(payload));
  socket.emit("requestTrip", payload);
};

export const riderCancelTripRequest = () => {
  const { getState } = storeObj.store;
  let { riderTrip } = getState();
  let { driverId, riderId, _id } = riderTrip;
  payload = {
    tripRequestID: _id,
    riderID: riderId
  };
  console.log("riderCancelTripRequest", JSON.stringify(payload));
  socket.emit("riderCancelTripRequest", payload);
};

/****************************************************driver*********************************/

export const driverAcceptTripRequest = () => {
  const { getState } = storeObj.store;
  payload = {
    tripRequestID: "5bceb8f9d6429823d22ffa0e",
    tripID: "5bd2fb50b6d652628b3554e7",
    driverID: "5baca3a407cec84eae4c4f03"
  };
  console.log("driverAcceptTripRequest", JSON.stringify(payload));
  socket.emit("driverAcceptTripRequest", payload);
};

export const driverRejectTripRequest = () => {
  const { getState } = storeObj.store;
  payload = {
    tripRequestID: "5bceb8f9d6429823d22ffa0e",
    tripID: "5bd2fb50b6d652628b3554e7",
    driverID: "5baca3a407cec84eae4c4f03"
  };
  console.log("driverRejectTripRequest", JSON.stringify(payload));
  socket.emit("driverRejectTripRequest", payload);
};

/****************************************************Admin*********************************/
