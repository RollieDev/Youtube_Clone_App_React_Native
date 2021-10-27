import React, { useRef } from 'react'
import { View, Text, Image, SafeAreaView, ScrollView, FlatList, Pressable } from 'react-native'
import BottomSheet, { BottomSheetModalProvider, BottomSheetModal } from '@gorhom/bottom-sheet';
import styles from './styles';
import { AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import VideoListItem from '../../components/VideoListItem';
import VideoPlayer from '../../components/VideoPlayer';

import video from '../../assets/data/video.json';
import videos from '../../assets/data/videos.json'
import VideoComments from '../../components/VideoComments';



const VideoScreen = () => {

    const commentsSheetRef = useRef<BottomSheetModal>(null);

    const openComments = () => {
        commentsSheetRef.current?.present();
    }


    return (
        <View style={{ backgroundColor: '#141414', flex: 1 }}>
            {/* Video Player */}
            <VideoPlayer videoURI={video.videoUrl} thumbnailURI={video.thumbnail} />

            <View style={{ flex: 1 }}>
                {/* Video Info */}
                <View style={styles.videoInfoContainer}>
                    <Text style={styles.title}>{video.title}</Text>
                    <Text style={styles.subtitle}>{video.user.name} {video.views} views {video.createdAt} </Text>
                </View>

                {/* Action List */}
                <View style={styles.actionListContainer}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                        <View style={styles.actionListItem}>
                            <AntDesign name="like1" size={20} color="lightgrey" />
                            <Text style={styles.actionText}>{video.likes}</Text>
                        </View>

                        <View style={styles.actionListItem}>
                            <AntDesign name="dislike2" size={22} color="lightgrey" />
                            <Text style={styles.actionText}>{video.dislikes}</Text>
                        </View>

                        <View style={styles.actionListItem}>
                            <AntDesign name="export" size={22} color="lightgrey" />
                            <Text style={styles.actionText}>{video.export}</Text>
                        </View>

                        <View style={styles.actionListItem}>
                            <AntDesign name="download" size={22} color="lightgrey" />
                            <Text style={styles.actionText}>{video.download}</Text>
                        </View>

                        <View style={styles.actionListItem}>
                            <MaterialCommunityIcons name="playlist-plus" size={22} color="lightgrey" />
                            <Text style={styles.actionText}>{video.saveTo}</Text>
                        </View>

                    </ScrollView>
                </View>

                {/* User Info */}
                <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, borderColor: '#3d3d3d', borderTopWidth: 1, borderWidth: 1 }}>
                    <Image style={styles.avatar} source={{ uri: video.user.image }} />

                    <View style={{ marginHorizontal: 10, flex: 1 }}>
                        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>{video.user.name}</Text>
                        <Text style={{ color: 'lightgrey', fontSize: 16 }}>{video.user.subscribers} subscribers</Text>
                    </View>

                    <Text style={{ color: 'red', fontSize: 18, fontWeight: 'bold', padding: 10 }}>Subscribe</Text>
                </View>


                {/* Comments */}
                <Pressable onPress={openComments} style={{ padding: 10, marginVertical: 10 }}>
                    <Text style={{ color: 'white' }}>Comments 5</Text>
                </Pressable>

                {/*All Comments*/}
                <BottomSheetModal ref={commentsSheetRef} snapPoints={['60']}
                    enablePanDownToClose={true}
                    backgroundComponent={({ style }) =>
                        <View style={[style, { backgroundColor: '#4d4d4d' }]} />} >
                    <VideoComments />
                </BottomSheetModal>

            </View>
        </View>
    )
};

const VideoScreenWithRecommendations = () => {
    return (
        <SafeAreaView style={{backgroundColor: '#141414', flex: 1 }}>
            <BottomSheetModalProvider><FlatList
                data={videos}
                renderItem={({ item }) => <VideoListItem video={item} />}
                ListHeaderComponent={VideoScreen} />
            </BottomSheetModalProvider>
        </SafeAreaView>
    )
}

export default VideoScreenWithRecommendations;