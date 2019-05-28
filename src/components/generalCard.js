import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import Card from "./common/Card";
import Icon from "react-native-vector-icons/FontAwesome";
import constants from "../constants";
import { moderateScale } from "../helpers/ResponsiveFonts";
const GeneralCard = props => {
  return (
    <Card>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity
          disabled={props.detailedMessage}
          onPress={() => props.onCardPress(props.data)}
          style={{
            justifyContent: "space-between",
            padding: moderateScale(15)
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: moderateScale(15)
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  height: moderateScale(50),
                  width: moderateScale(50),
                  backgroundColor: "black",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Image
                  source={constants.Images.Common.Logo}
                  resizeMethod="resize"
                  resizeMode="contain"
                  style={{
                    height: moderateScale(40),
                    width: moderateScale(40),
                    backgroundColor: "black"
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: "column",
                  marginHorizontal: moderateScale(5)
                }}
              >
                <Text
                  style={{
                    color: constants.Colors.Secondary,
                    fontSize: moderateScale(20),
                    fontWeight: "bold"
                  }}
                >
                  {props.data && props.data.title}
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text
                    style={{
                      color: constants.Colors.ocen,
                      fontSize: moderateScale(12),
                      borderRightWidth: 1,
                      borderRightColor: constants.Colors.gray,
                      paddingRight: moderateScale(10)
                    }}
                  >
                    `By: ${props.data && props.data.by}`
                  </Text>
                  <Text
                    style={{
                      color: constants.Colors.ocen,
                      fontSize: moderateScale(12),
                      borderLeftWidth: 1,
                      borderLeftColor: constants.Colors.gray,
                      paddingLeft: moderateScale(10)
                    }}
                  >
                    {props.data && props.data.date}
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <Icon name="ellipsis-v" size={20} color={constants.Colors.gray} />
            </View>
          </View>
          <View
            style={{
              paddingVertical: moderateScale(20),
              marginBottom: moderateScale(20),
              borderBottomWidth: moderateScale(1),
              borderBottomColor: constants.Colors.gray
            }}
          >
            <Text
              style={{
                fontSize: moderateScale(16),
                fontWeight: "bold",
                color: constants.Colors.Black,
                textAlign: "justify"
              }}
            >
              {props.data && props.data.message}
            </Text>
            {props.detailedMessage ? (
              <View>
                <Text
                  style={{
                    paddingVertical: moderateScale(10),
                    fontSize: moderateScale(14),
                    textAlign: "justify"
                  }}
                >
                  {props.data && props.data.detailedMessage}
                </Text>
                <Text
                  style={{
                    paddingTop: moderateScale(10),
                    fontSize: moderateScale(14),
                    textAlign: "justify",
                    fontWeight: "bold"
                  }}
                >
                  About this confrence:
                </Text>
                <Text
                  style={{
                    paddingBottom: moderateScale(10),
                    fontSize: moderateScale(14),
                    textAlign: "justify"
                  }}
                >
                  {props.data && props.data.about}
                </Text>
              </View>
            ) : null}
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start"
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                borderRightColor: constants.Colors.Black,
                borderRightWidth: moderateScale(1),
                marginHorizontal: moderateScale(10),
                paddingRight: moderateScale(10)
              }}
            >
              <Icon
                name="bookmark"
                size={20}
                color={constants.Colors.Secondary}
              />
              <Text
                style={{
                  fontSize: moderateScale(16),
                  color: constants.Colors.Black,
                  textAlign: "justify",
                  paddingHorizontal: moderateScale(10)
                }}
              >
                Bookmark
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "flex-start"
              }}
            >
              <Icon name="share" size={20} color={constants.Colors.Secondary} />
              <Text
                style={{
                  fontSize: moderateScale(16),
                  color: constants.Colors.Black,
                  textAlign: "justify",
                  paddingHorizontal: moderateScale(10)
                }}
              >
                Share
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </Card>
  );
};

export default GeneralCard;
