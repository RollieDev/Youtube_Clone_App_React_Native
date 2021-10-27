import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import * as React from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import VideoListItem from '../components/VideoListItem';
import VideoScreen from './VideoScreen';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});





