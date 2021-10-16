import React from 'react'
import { View, Text, Image } from 'react-native'

interface VideoCommentProps {
    comment: {
        id: string;
        createAt: string;
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
            <Image style={{ width: 35, height: 35, borderRadius: 20 }} source={{ uri: 'https://yt3.ggpht.com/ytc/AKedOLSbEMQPyNa2c4Qrnis38l-hw4s6ROM4PCAYAQ_DgkQ=s88-c-k-c0x00ffffff-no-rj' }} />
            <Text style={{ color: 'white', marginLeft: 10 }}>Thanks everyone for the engaging conversations.</Text>
        </View>
    )
}

export default VideoComment