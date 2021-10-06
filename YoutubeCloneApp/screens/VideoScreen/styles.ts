import { StyleSheet } from 'react-native'; 

const styles = StyleSheet.create({
    videoPlayer: {
        width: '100%',
        aspectRatio: 16/9,
    },
    videoInfoContainer: {
        margin: 10,
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
        marginVertical: 10,
    },
    subtitle: {
        color: 'grey',
        fontSize: 15,
        fontWeight: '500',
    },

    //Action List
    actionListContainer: {
        flexDirection: 'row',
    },
    actionListItem: {
        width: 70,
        height: 60,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'red',
    },

    actionText: {
        color: 'white', 
    }
});

export default styles;