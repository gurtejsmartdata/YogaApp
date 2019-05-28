import React from "react";
import { TouchableOpacity, View, Image, Text, StyleSheet } from "react-native";
import { moderateScale } from "../../helpers/ResponsiveFonts";
import Constants from "../../constants";
import SafeView from "./SafeView";
import FormTextInput from "./FormTextInput";
import Icon from "react-native-vector-icons/FontAwesome";

const Header = props => {
  let {
    hideBack,
    hideDrawer,
    color,
    title,
    rightIcon,
    onRightPress,
    rightText,
    navigator,
    headerText,
    onBackPress,
    searchBox,
    onChangeSearchText,
    searchText,
    searchPlaceHolder,
    onDrawerPress
  } = props;

  return (
    <View style={{ backgroundColor: color || Constants.Colors.transparent }}>
      <SafeView />
      <View
        style={[
          Styles.container,
          {
            backgroundColor: color,
            flexDirection: !hideDrawer ? "row-reverse" : "row"
          }
        ]}
      >
        {!hideDrawer ? (
          <TouchableOpacity style={Styles.iconBtn} onPress={onDrawerPress}>
            <Icon name="bars" color={Constants.Colors.Secondary} size={25} />
          </TouchableOpacity>
        ) : !hideBack ? (
          <TouchableOpacity
            style={Styles.iconBtn}
            onPress={() => {
              onBackPress ? onBackPress() : navigator.pop();
            }}
          >
            <Icon name="chevron-left" size={20} />
          </TouchableOpacity>
        ) : null}
        <View
          style={[
            Styles.header,
            {
              justifyContent: searchBox ? "flex-start" : "center",
              alignItems: searchBox ? "flex-start" : "center"
            }
          ]}
        >
          {searchBox ? (
            <FormTextInput
              onChangeText={text => onChangeSearchText(text)}
              value={searchText}
              placeHolderText={searchPlaceHolder}
              style={Styles.searchBox}
              inputStyle={Styles.inputStyle}
            />
          ) : null}
          {title ? (
            <Text style={[Styles.headerText, headerText]}>{title}</Text>
          ) : null}
        </View>
        {rightIcon ? (
          <TouchableOpacity
            style={Styles.iconBtn}
            onPress={() => {
              onRightPress ? onRightPress() : false;
            }}
          >
            <Image source={rightIcon} resizeMode={"contain"} />
          </TouchableOpacity>
        ) : rightText ? (
          <TouchableOpacity
            style={Styles.iconBtn}
            onPress={() => {
              onRightPress ? onRightPress() : false;
            }}
          >
            <Text style={Styles.skip}>{rightText}</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default Header;

const Styles = StyleSheet.create({
  container: {
    padding: moderateScale(10),
    flexDirection: "row-reverse",
    backgroundColor: Constants.Colors.transparent
  },
  iconBtn: {
    height: moderateScale(40),
    width: moderateScale(40),
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    height: moderateScale(40),
    width: Constants.BaseStyle.DEVICE_WIDTH - moderateScale(110)
  },
  headerText: {
    ...Constants.Fonts.TitilliumWebSemiBold,
    color: Constants.Colors.Black,
    fontSize: moderateScale(21),
    textAlign: "center",
    textAlignVertical: "center"
  },
  searchBox: {
    borderColor: Constants.Colors.transparent,
    borderRadius: 0,
    marginTop: moderateScale(0),
    marginHorizontal: moderateScale(0),
    justifyContent: "flex-start",
    alignItems: "center",
    height: moderateScale(40),
    flexDirection: "row",
    width: Constants.BaseStyle.DEVICE_WIDTH / 1.4
  },
  inputStyle: {
    color: Constants.Colors.Primary,
    flex: 1,
    paddingHorizontal: moderateScale(5),
    ...Constants.Fonts.TitilliumWebRegular,
    fontSize: moderateScale(17)
  },
  skip: {
    color: Constants.Colors.gray,
    paddingHorizontal: moderateScale(5),
    ...Constants.Fonts.TitilliumWebRegular,
    fontSize: moderateScale(16),
    textAlign: "right"
  }
});
