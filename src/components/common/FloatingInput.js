import React, { Component } from "react";
import {
  View,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet
} from "react-native";

import Constants from "../../constants";
import { moderateScale } from "../../helpers/ResponsiveFonts";

class FloatingInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
      value: this.props.value
    };
  }

  handleFocus = () => this.setState({ isFocused: true });
  handleBlur = () => this.setState({ isFocused: false });
  focus() {
    this.inputBox.focus();
  }
  render() {
    const {
      label,
      value,
      value1,
      editable,
      onCancel,
      onUpdate,
      loading,
      ...props
    } = this.props;
    const { isFocused } = this.state;
    const labelStyle = {
      ...Constants.Fonts.TitilliumWebRegular,
      position: "absolute",
      left: 0,
      top: !isFocused && !value ? moderateScale(20) : moderateScale(0),
      fontSize: !isFocused && !value ? moderateScale(20) : moderateScale(18),
      color: Constants.Colors.Primary
    };
    return (
      <View style={Styles.container}>
        <Text style={labelStyle}>{label}</Text>
        <View style={Styles.inputWrapper}>
          <View style={{ flex: 1 }}>
            <TextInput
              ref={ref => (this.inputBox = ref || "inputbox")}
              style={Styles.inputStyle}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              value={value}
              editable={editable}
              {...props}
            />
          </View>
          {value1 !== value && editable ? (
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity style={Styles.pad5} onPress={onCancel}>
                <View style={Styles.cancelImg}>
                  <Image
                    source={Constants.Images.Common.Cancel}
                    resizeMode={"contain"}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={Styles.pad5} onPress={onUpdate}>
                <View style={Styles.submitImg}>
                  {loading ? (
                    <ActivityIndicator color="#fff" />
                  ) : (
                    <Image
                      source={Constants.Images.Common.Accept}
                      resizeMode={"contain"}
                    />
                  )}
                </View>
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
      </View>
    );
  }
}

export default FloatingInput;

const Styles = StyleSheet.create({
  container: {
    paddingVertical: moderateScale(15)
  },
  inputStyle: {
    ...Constants.Fonts.TitilliumWebRegular,
    height: moderateScale(50),
    fontSize: moderateScale(18),
    color: Constants.Colors.Black
    //backgroundColor:'red',
    // width:Constants.BaseStyle.DEVICE_WIDTH*0.5
  },
  inputWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: Constants.Colors.Secondary
    //backgroundColor: "#aabbcc"
  },
  cancelImg: {
    backgroundColor: "#A9AFAF",
    width: 30,
    height: 30,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  submitImg: {
    backgroundColor: "#F6CF65",
    width: 30,
    height: 30,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  pad5: { padding: 5 }
});
