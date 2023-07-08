import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header'
import VoiceRecord from './src/components/VoiceRecord';
export default function App() {
  return (
    <View style={styles.container}>
        <Header />
        <VoiceRecord />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#FABC76"
  },
});
