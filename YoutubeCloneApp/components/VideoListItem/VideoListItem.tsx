import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import styles from './styles';


type VideoListItemProps = {
    video: {
        id: string;
        createdAt: string;
        title: string;
        thumbnail: string;
        videoUrl: string;
        duration: number;
        views: number;
        user: {
            name: string;
            image?: string;
        }
    }
}

const VideoListItem = (props: VideoListItemProps) => {
    const { video } = props;

    const minutes = Math.floor(video.duration / 60);
    const seconds = video.duration % 60   

   
    return (
        <View style={styles.videoCard}>
            {/*Thumbnail*/}
            <View >
                <Image style={styles.thumbnail} source={{ uri: video.thumbnail }} />
                <View style={styles.timeContainer}>
                    <Text style={styles.time}>{minutes}:{seconds < 10 ? '0' : ''}{seconds}</Text>
                </View>
            </View>

            {/* Title Row */}
            <View style={styles.titleRow}>

                {/* Avatar */}
                <Image style={styles.avatar} source={{ uri: video.user.image }} />

                {/* Middle container w/ title, subtitle, etc. */}
                <View style={styles.middleContainer}>
                    <Text style={styles.title}>{video.title}
                    </Text>
                    <Text style={styles.subtitle}>{video.user.name} {video.views} {video.createdAt} </Text>
                </View>

                {/* Icon */}
                <Entypo name="dots-three-vertical" size={20} color="white" />
            </View>
        </View>
    )
}

export default VideoListItem;