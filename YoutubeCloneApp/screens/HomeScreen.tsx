import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const HomeScreen = () => {

    return (
        <View>

            {/* video component */}
            <View style={styles.videoCard}>
                {/*Thumbnail*/}
                <View >
                    <Image style={styles.thumbnail} source={{ uri: 'https://i.ytimg.com/an_webp/S1F4ihlSzqU/mqdefault_6s.webp?du=3000&sqp=CNqcpYoG&rs=AOn4CLCYg0ExIFtYR6ue77PA9IPV70forg' }} />
                    <View style={styles.timeContainer}>
                        <Text style={styles.time}>1:01:11</Text>
                    </View>
                </View>
                {/* Title Row */}
                <View style={styles.titleRow}>
                    {/* Avatar */}
                    <Image style={styles.avatar} source={{ uri: 'https://yt3.ggpht.com/ytc/AKedOLR14vjVBR6TQ5p05QHfZyH0IywWFDeH0MZ2CaT1=s176-c-k-c0x00ffffff-no-rj' }} />
                    {/* Middle container w/ title, subtitle, etc. */}
                    <View style={styles.middleContainer}>
                        <Text style={styles.title}>Virtual Job Fair #2 | Marina Nitze- Small Business and Entrepreneurship
                        </Text>
                        <Text style={styles.subtitle}> 80 views Streamed 6 days ago </Text>
                    </View>
                    {/* Icon */}
                    <Entypo name="dots-three-vertical" size={20} color="white" />
                </View>


            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    thumbnail: {
        width: '100%',
        aspectRatio: 16 / 9,
    },
    timeContainer: {
        backgroundColor: '#00000099',
        height: 25,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        position: 'absolute',
        right: 5,
        bottom: 5,
    },
    time: {
        color: 'white',
        fontWeight: 'bold',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    titleRow: {
        flexDirection: 'row',
        padding: 10,
    },
    middleContainer: {
        marginHorizontal: 10,
        flex: 1,
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
    },
    subtitle: {
        color: 'grey',
        fontSize: 15,
        fontWeight: '500',
    },
});


export default HomeScreen;