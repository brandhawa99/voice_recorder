import React,{useState} from "react";
import {View, Text, StyleSheet, SafeAreaView, Button} from 'react-native';
import {Audio} from 'expo-av'

const VoiceRecord = () =>{
  const [recording, setRecording] = useState()
  const startRecording  = async() =>{
    try {
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS:true,
        playsInSilentModeIOS: true,
      })
      console.log("Starting recording...");
      const {recording} = await Audio.Recording.createAsync( Audio.RecordingOptionsPresets.HIGH_QUALITY);
      setRecording(recording); 
      console.log("Recording started");
    } catch (error) {
      console.error("Failed to start recording.", err);  
    }
  }

  const stopRecording = async() =>{
    console.log("Stopping recording..");
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    await Audio.setAudioModeAsync({
      allowsRecordingIOS:false,
    })
    const uri = recording.getURI();
    console.log("Recording stopped and stored at", uri);
  }

  return(
    <SafeAreaView style={styles.container}>
        <Text>Record</Text>
        <View style={styles.button}>
          <Button style={styles.recordButton} title={recording? "Stop Recording":"Start Recording"} onPress={recording?stopRecording:startRecording}/>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center"
  },
  recordButton:{
    color:"white"
  },
})

export default VoiceRecord; 