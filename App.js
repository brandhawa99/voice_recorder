import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header'
import VoiceRecord from './src/components/VoiceRecord';
import CameraView from './src/components/Camera';
export default function App() {
  return (
    <View style={styles.container}>
        <Header />
        <VoiceRecord />
        <CameraView />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#FABC76"
  },
});
