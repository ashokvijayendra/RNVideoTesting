
import React, { useState, useRef } from 'react';
import { StyleSheet, View, Platform, Text, PixelRatio, Image, TouchableOpacity } from 'react-native';
import Video, { TextTrackType } from 'react-native-video';



const VideoPlayer = () => {
    const [showSubtitle, setShowSubtitle] = useState(false);
    // The video we will play on the player.
    const video = "https://n-www.walgreens.com/images/adaptive/video/ep/AMRAP-sesh.mp4";
   
    return (
      <View>
                <TouchableOpacity
            onPress={() =>  setShowSubtitle(!showSubtitle)}
          >
              <View style={{padding: 50}}>
                <Text> CC {showSubtitle ? ' ON ' : ' OFF '} </Text>
              </View>
        </TouchableOpacity>
        <Video
          key={`${showSubtitle ? 'showingSubTitle' : 'noSubTitle'}`}
          resizeMode={'cover'}
          source={{ uri: video }}
          style={styles.backgroundVideo}
          textTracks={ showSubtitle ?  [
              {
                title: 'abc',
                language: 'en',
                type: TextTrackType.VTT,
                uri: "https://walgreens-production.adobecqms.net/content/dam/images/adaptive/video/ep/vtt/AMRAP-sesh.vtt",
              },
          ] : undefined }
          selectedTextTrack={{
            type:  showSubtitle  ? 'title' : 'disabled',
            value: showSubtitle ? 'abc' : undefined
          }}
          />
        </View>
    );
};



const App = () => {
  const [isSelected, setSelection] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  return (
    <View style={styles.container}>

      <VideoPlayer />
   </View>
  );
};

const styles = StyleSheet.create({
   container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    backgroundColor: '#ecf0f1',
        padding: 100
    },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
      backgroundVideo: {
        height: 200,
        width: 400,
    },
    mediaControls: {
        height: '100%',
        flex: 1,
        alignSelf: 'center',
    },
});

export default App;