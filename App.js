
import React, { useState, useRef } from 'react';
import { StyleSheet, View, Platform, Text, PixelRatio, Image } from 'react-native';
import Video, { TextTrackType } from 'react-native-video';



const VideoPlayer = () => {
    
    // The video we will play on the player.
    const video = "https://playback.video.meredithcorp.io/*/4660693479001.mp4";
   
    return (
      <View>
          <Video
          resizeMode={'cover'}
          source={{ uri: video }}
          style={styles.backgroundVideo}
          fullscreen={true}
          textTracks={
            [
              {
                title: 'abc',
                language: 'en',
                type: TextTrackType.VTT,
                uri: "https://playback.video.meredithcorp.io/*/4660693479001.vtt",
              },
            ]}
          selectedTextTrack={{
             type: 'title',
             value: 'abc'
          }}
          />
        </View>
    );
};



const App = () => {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
      <Text> hii </Text>
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