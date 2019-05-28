import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Platform
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as appActions from "../../actions";
import Constants from "../../constants";
import SafeView from "../../components/common/SafeView";
import { moderateScale } from "../../helpers/ResponsiveFonts";

class SideMenu extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}
  /*
    closes the toggle
    */
  closeToggle() {
    this.props.appActions.mergeOptions(this.props.componentId, false);
  }

  onHomePress = () => {
    this.closeToggle();
  };
  onMyHistoryPress = () => {
    this.closeToggle();
    alert("Under Development");
  };

  onRewardPress = () => {
    this.closeToggle();
    alert("Under Development");
  };
  onMyTripPress = () => {
    this.closeToggle();
    alert("Under Development");
  };
  onFAQPress = () => {
    this.closeToggle();
    alert("Under Development");
  };
  onFeedbackPress = () => {
    this.closeToggle();
    alert("Under Development");
  };
  onProfilePress = () => {
    this.closeToggle();
    alert("Under Development");
  };
  onLogoutPress() {
    this.closeToggle();
    this.props.appActions.logout();
  }
  onRateUsPress = () => {
    this.closeToggle();
    alert("Under Development");
  };
  onSupportPress = () => {
    this.closeToggle();
    alert("Under Development");
  };
  onTermPress = () => {
    this.closeToggle();
    alert("Under Development");
  };

  render() {
    let user = {
      name: "John Deo",
      email: "johndeo07@yopmail.com"
    };
    let menu = [
      {
        title: "Home",
        onPress: this.onHomePress,
        icon: "home"
      },
      {
        title: "Audio",
        onPress: this.onMyTripPress,
        icon: "music"
      },
      {
        title: "Bookmarks",
        onPress: this.onProfilePress,
        icon: "bookmark"
      },
      {
        title: "Become a member",
        onPress: this.onRateUsPress,
        icon: "user-plus"
      },
      {
        title: "New Story",
        onPress: this.onFAQPress,
        icon: "newspaper-o"
      },
      {
        title: "State",
        onPress: this.onSupportPress,
        icon: "flag"
      },
      {
        title: "Stories",
        onPress: this.onTermPress,
        icon: "globe"
      },
      {
        title: "Help",
        onPress: this.onTermPress,
        icon: "question"
      }
    ];
    return (
      <ScrollView style={Styles.sideMenuContainer} scrollEnabled>
        <SafeView />
        <View style={Styles.sideMenuImageContainer}>
          <View style={Styles.profileImg}>
            <Image
              source={require("../../assets/img/profile.png")}
              style={Styles.imgAvatar}
              resizeMode={"contain"}
            />
          </View>
          <View style={Styles.userInfo}>
            <Text style={Styles.userName}>{user.name || ""}</Text>
            <Text style={Styles.userEmail}>{user.email || ""}</Text>
          </View>
        </View>
        <Text style={Styles.menuText}>MENU</Text>
        <View style={Styles.sideMenuSubContainer}>
          {menu.map(item => {
            return (
              <TouchableOpacity
                style={[
                  Styles.menuBtn,
                  {
                    borderTopColor: Constants.Colors.fadeBorder,
                    borderTopWidth: item.title == "Logout" ? 1 : 0,
                    marginTop: item.title == "Logout" ? 20 : 0,
                    paddingVertical: 10
                  }
                ]}
                onPress={() => item.onPress()}
                key={item.title}
              >
                <Icon name={item.icon} size={15} />
                <Text style={[Styles.menuText]}>{item.title}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <TouchableOpacity
          style={[
            Styles.menuBtn,
            {
              borderTopColor: Constants.Colors.fadeBorder,
              borderTopWidth: 1,
              marginTop: 20,
              paddingVertical: 10,
              paddingHorizontal: 30
            }
          ]}
          onPress={() => this.onLogoutPress()}
        >
          <Icon name={"sign-out"} size={15} />
          <Text style={[Styles.menuText]}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  appActions: bindActionCreators(appActions, dispatch)
});
function mapStateToProps(state) {
  return {
    user: state.user
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideMenu);

const Styles = StyleSheet.create({
  // Side menu Component
  sideMenuContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: Constants.Colors.White
  },
  sideMenuImageContainer: {
    marginTop: Platform.OS == "ios" ? moderateScale(20) : 0,
    paddingHorizontal: moderateScale(30),
    paddingVertical: moderateScale(10),
    justifyContent: "flex-end",
    alignItems: "flex-start"
  },
  profileImg: {
    height: Constants.BaseStyle.DEVICE_WIDTH * 0.3,
    width: Constants.BaseStyle.DEVICE_WIDTH * 0.3,
    borderColor: Constants.Colors.Primary,
    //borderWidth: 1,
    borderRadius: moderateScale(100),
    backgroundColor: Constants.Colors.White,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden"
  },
  imgAvatar: {
    height: Constants.BaseStyle.DEVICE_WIDTH * 0.3,
    width: Constants.BaseStyle.DEVICE_WIDTH * 0.3
  },
  userInfo: {
    padding: moderateScale(5)
  },
  userName: {
    // ...Constants.Fonts.TitilliumWebBold,
    fontSize: moderateScale(22),
    color: Constants.Colors.Primary
  },
  userEmail: {
    // ...Constants.Fonts.TitilliumWebRegular,
    fontSize: moderateScale(17),
    color: Constants.Colors.gray
  },
  sideMenuSubContainer: {
    paddingHorizontal: moderateScale(30),
    // paddingVertical: moderateScale(10),
    backgroundColor: Constants.Colors.White
  },
  menuBtn: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  menuText: {
    // ...Constants.Fonts.TitilliumWebRegular,
    fontSize: moderateScale(18),
    color: Constants.Colors.menuItemTxt,
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(8)
  },
  buttonStyle: {},
  gradientStyle: { borderRadius: 0 },
  activeStatus: {
    borderColor: Constants.Colors.placehoder,
    borderWidth: 0.4,
    paddingHorizontal: moderateScale(30)
  },
  shuttleName: {
    // ...Constants.Fonts.TitilliumWebSemiBold,
    fontSize: moderateScale(21),
    color: Constants.Colors.Primary
  },
  shuttleProvider: {
    // ...Constants.Fonts.TitilliumWebRegular,
    fontSize: moderateScale(17),
    color: Constants.Colors.placehoder
  },
  suttleStatusBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: moderateScale(15)
  },
  activeBtn: {
    width: moderateScale(100),
    backgroundColor: Constants.Colors.Yellow,
    height: moderateScale(36),
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: moderateScale(3)
  },
  checkBtn: {
    backgroundColor: Constants.Colors.White,
    justifyContent: "center",
    alignItems: "center",
    padding: moderateScale(6),
    margin: moderateScale(3),
    borderRadius: moderateScale(3)
  },
  activeText: {
    // ...Constants.Fonts.SemiBold,
    fontSize: moderateScale(18),
    color: Constants.Colors.White,
    marginHorizontal: moderateScale(5)
  }
});
