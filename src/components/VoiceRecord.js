import React,{useEffect, useState} from "react";
import {View, Text, StyleSheet, SafeAreaView, Button} from 'react-native';
import {Audio} from 'expo-av'

const VoiceRecord = () =>{
  const [sound, setSound] = useState(); 
  const [recording, setRecording] = useState()
  const [URI, setURI] = useState(null); 
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
    setURI(uri);
    console.log("Recording stopped and stored at", uri);
  }
  const playSound = async() =>{
    try{
      console.log("loading sound"); 
      const {sound} = await Audio.Sound.createAsync(require("./assets/music/1.mp4")); 
      setSound(sound); 
      await sound.playAsync(); 
    }catch(e){
      console.log(e);
    }
  } 

  useEffect(()=>{
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  },[sound])

  return(
    <SafeAreaView style={styles.container}>
        <Text>Record</Text>
        <View style={styles.button}>
          <Button style={styles.recordButton} title={recording? "Stop Recording":"Start Recording"} onPress={recording?stopRecording:startRecording}/>
        </View>
        <View>
          <Button title="Play Sound" onPress={playSound} />
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