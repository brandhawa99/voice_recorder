import React, {useState}from 'react'; 
import {View, SafeAreaView, TouchableOpacity, Text} from 'react-native';
import {Camera, CameraType} from 'expo-camera';


const CameraView = () =>{

  const [type, setType] = useState(CameraType.front);
  const [permission, requestPermission] = Camera.useCameraPermissions();




    return(
      <SafeAreaView>
        <Camera>
          <TouchableOpacity>
            <Text>
              rCLICK
              </Text>
              </TouchableOpacity>
        </Camera>
      </SafeAreaView>
    )

}

export default CameraView

