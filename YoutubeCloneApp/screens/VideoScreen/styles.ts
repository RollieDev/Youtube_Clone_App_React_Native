import { StyleSheet } from 'react-native'; 

const styles = StyleSheet.create({
    videoPlayer: {
        width: '100%',
        aspectRatio: 16/9,
        paddingTop: 15,
    },
    videoInfoContainer: {
        margin: 10,
    },
    title: {
        color: 'white',
        fontSize: 16,
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
        marginVertical: 10,
         
    },
    actionListItem: {
        width: 70,
        height: 60,
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    actionText: {
        color: 'white', 
    },

    //user
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    }
});

export default styles;