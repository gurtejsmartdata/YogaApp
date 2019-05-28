import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { View, StyleSheet,ActivityIndicator } from "react-native";
import * as AppAction from "../../actions";
import constants from "../../constants";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Input, Button,Image } from "react-native-elements";
import Common from "../../helpers/common";
import RestClient from "../../helpers/RestClient";
// import YouTube from 'react-native-youtube'
const errorMsg = "Please enter a valid youtube url.";
class SignIn extends React.Component {
  static options(passProps) {
    return {};
  }
  constructor(props) {
    super(props);
    this.state = {
      youtubeuri: "",
      loader: false,
      error: false,
      youtubeLink:null,
      thumbnails:null
    };
  }
  validateURI = () => {
    let YoutubeID = Common.YouTubeGetID(this.state.youtubeuri);
    let YoutubeURI =
      "https://www.googleapis.com/youtube/v3/videos?id=" +
      YoutubeID +
      "&key=" +
      constants.DevKeys.GoogleAPIKey +
      "&part=snippet";
    this.setState({ loader: true });
    
    RestClient.getCall(YoutubeURI)
      .then(res => {
        console.log(res);
        if (res.items && res.items.length > 0) {
          let item=res.items[0];
          let {snippet}=item;
          let {thumbnails}=snippet;
          let {high}=thumbnails;
          let {url}=high;
          this.setState({ loader: false, error: false,youtubeLink:YoutubeID,thumbnails:url});
        } else {
          this.setState({ loader: false, error: true ,thumbnails:null});
        }
      })
      .catch(() => {
        this.setState({ loader: false, error: true ,thumbnails:null});
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView
          contentContainerStyle={{
            flex: 1,
            width: constants.BaseStyle.DEVICE_WIDTH - 20,
            alignItems: "center"
          }}
          keyboardShouldPersistTaps="never"
          showsVerticalScrollIndicator={false}
        >
          <Input
            selectable
            shake={true}
            placeholder="Paste Youtube URL"
            errorStyle={{ color: "red" }}
            errorMessage={this.state.error ? errorMsg : ""}
            onChangeText={youtubeuri => {
              this.setState({ youtubeuri, error: false });
            }}
          />
          <Button
           containerStyle={{width:300,marginTop:40}}
            title="SUBMIT"
            loading={this.state.loader}
            onPress={this.validateURI}
          />

          {/* /**this code is to play youtube video */}
          {/* {this.state.youtubeLink&&
                  <YouTube
                  apiKey={constants.DevKeys.GoogleAPIKey }
          videoId={this.state.youtubeLink}   // The YouTube video ID
          play={true}             // control playback of video with true/false
          fullscreen={false}       // control whether the video should play in fullscreen or inline
          loop={false}             // control whether the video should loop when ended
          onReady={e => this.setState({ isReady: true })}
          onChangeState={e => this.setState({ status: e.state })}
          onChangeQuality={e => this.setState({ quality: e.quality })}
          onError={e => this.setState({ error: e.error })}
        
          style={{ alignSelf: 'stretch', height: 200,marginTop:40 }}
        />} */}
        {this.state.thumbnails && <Image
  source={{ uri: this.state.thumbnails }}
  style={{ width:300, height:200,marginTop:30 }}
  PlaceholderContent={<ActivityIndicator />}
/>}
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  app: state.app
});
const mapDispatchToProps = dispatch => ({
  AppAction: bindActionCreators(AppAction, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  }
});
