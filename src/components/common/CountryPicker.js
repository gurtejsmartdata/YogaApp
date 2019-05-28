import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import Constants from "../../constants";
import { getCountry } from "../../helpers/country";
import CountryPicker from "react-native-country-picker-modal";
import PickerTheme from "../../styles/component/Common/CountryPicker";

const CountryPickerModal = props => {
  let {
    onChange,
    isdCode,
    SubmitEditing,
    filterable,
    closeable,
    cca2,
    animationType,
    translation,
    disabled
  } = props;
  return (
    <TouchableOpacity
      style={PickerTheme.picker}
      onPress={() => this.callingCode.openModal()}
    >
      <View style={PickerTheme.flagStyle}>
        <CountryPicker
          ref={ref => (this.callingCode = ref)}
          countryList={getCountry()}
          disabled={disabled}
          onChange={onChange}
          SubmitEditing={SubmitEditing}
          filterable={filterable}
          closeable={closeable}
          cca2={cca2}
          animationType={animationType}
          translation={translation}
          styles={PickerTheme}
          closeButtonImage={Constants.Images.Common.Cancel}
          filterPlaceholderTextColor={Constants.Colors.Primary}
        />
        <Text style={PickerTheme.TextStyle}>+{isdCode}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CountryPickerModal;
