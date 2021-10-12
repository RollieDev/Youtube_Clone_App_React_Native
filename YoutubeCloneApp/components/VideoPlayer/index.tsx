import React, { useRef } from "react";
import { View, Text } from "react-native";
import { Video } from 'expo-av';

interface VideoPlayerProps {
    videoURI: string;
    thumbnailURI: string;
};

const VideoPlayer = (props: VideoPlayerProps) => {
    const { videoURI, thumbnailURI } = props;
    console.log(thumbnailURI);


    // const onRefAssign = (videoElement: Video) => {
    //     console.warn('video is mounted')
    //     const playbackObject = videoElement;


    //     const souurce = { uri: videoURI };
    //     const initialStatus = {}
    //     playbackObject.loadAsync();
    // }

    return (
        <View>
            <Video
                source={{ uri: videoURI }}
                style={{ width: '100%', aspectRatio: 16 / 9 }}
                posterSource={{
                    uri: thumbnailURI,
                }}
                posterStyle={{
                    resizeMode: 'cover',
                }}
                usePoster={false}
                useNativeControls
                resizeMode="contain"

            />
        </View>
    )
}

export default VideoPlayer