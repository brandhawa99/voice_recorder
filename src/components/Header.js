import React from 'react'; 
import {View, StyleSheet,SafeAreaView, Text} from 'react-native'


const Header = () =>{

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTxt}>Leave your message for the couple</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    paddingTop: 25,
  },
  headerTxt:{
    fontSize: 30,
    textAlign:"center"
    
  }
})

export default Header