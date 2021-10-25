import React from 'react'
import { View, Text, Image } from 'react-native'

interface VideoCommentProps {
    comment: {
        id: string;
        comment: string;
        likes: number;
        user: {
            name: string;
            image: string;
        }
    }
}

const VideoComment = ({ comment }: VideoCommentProps) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
            <Image style={{ width: 35, height: 35, borderRadius: 20 }} source={{ uri: 'https://yt3.ggpht.com/ytc/AKedOLR14vjVBR6TQ5p05QHfZyH0IywWFDeH0MZ2CaT1=s88-c-k-c0x00ffffff-no-rj' }} />
            <Text style={{ color: 'white', marginLeft: 10 }}>Thanks everyone!</Text>
        </View>
    )
}

export default VideoComment