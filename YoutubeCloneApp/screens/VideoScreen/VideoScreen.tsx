import React from 'react'
import { View, Text, Image, SafeAreaView } from 'react-native'
import styles from './styles';
import { AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

import video from '../../assets/data/video.json';


const VideoScreen = () => {
    return (
        <SafeAreaView style={{backgroundColor: '#141414', flex: 1}}>
            {/* Video Player */}
            < Image style={styles.videoPlayer} source={{ uri: video.thumbnail }}/>

            {/* Video Info */}

             {/* video container w/ title, subtitle, etc. */}
             
             <View style={styles.videoInfoContainer}>
                    <Text style={styles.title}>{video.title}</Text>
                    <Text style={styles.subtitle}>{video.user.name} {video.views} {video.createdAt} </Text>
                </View>

            {/* Action List */}    
            <View style={styles.actionListContainer}>
                <View style={styles.actionListItem}>
                    <AntDesign name="like1" size={20} color="lightgrey" />
                    <Text style={styles.actionText}>{video.likes}</Text>
                </View>

                <View style={styles.actionListItem}>
                    <AntDesign name="dislike2" size={20} color="lightgrey" />
                    <Text style={styles.actionText}>{video.dislikes}</Text>
                </View>

                <View style={styles.actionListItem}>
                    <AntDesign name="export" size={20} color="lightgrey" />
                    <Text style={styles.actionText}>{video.dislikes}</Text>
                </View>

                <View style={styles.actionListItem}>
                    <AntDesign name="download" size={20} color="lightgrey" />
                    <Text style={styles.actionText}>{video.dislikes}</Text>
                </View>
                
                <View style={styles.actionListItem}>
                    <MaterialCommunityIcons name="playlist-plus" size={20} color="lightgrey" />
                    <Text style={styles.actionText}>{video.dislikes}</Text>
                </View>
            </View>


            {/* User Info */}

            {/* Comments */}

            {/* Recommended Videos */}

        </SafeAreaView>
    )
}

export default VideoScreen;