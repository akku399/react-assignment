import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, } from 'react-native';
import EdiText from 'react-editext'

export default function App() {
  state = {
    number: 'Enter Mobile Number',
    editable:true
 }
 handleNumber = (text) => {
    this.setState({ number: text })
 }
 handleEditable = () => {
  this.setState({ editable: true })
}
 send = (number) => {
  alert('Phone Number: ' + number)
}

  return (
    
    <View style={styles.container}>
      <Image style={styles.imgStyle} source = {require('./Images/logo.png')} />
      <Text style={styles.textStyle}>Welcome to HealthNest</Text>
      <View style={{ flexDirection: 'row'}}>
        <Image style={styles.imgStyle2} source = {require('./Images/IN.png')} />
        <TextInput style = {styles.SectionStyle}
               underlineColorAndroid = "transparent"
               placeholder = "Enter Mobile Number"
               autoCapitalize = "none"
               onChangeText = {handleNumber}
               onPress = {handleEditable}/>
          
        <Image style={styles.imgStyle3} source = {require('./Images/phone.png')} />
        <View
          style={{
            position: 'absolute',
            height: 0,
            left: 70,
            right: 20,
            top: 380,
            borderBottomColor: '#A5B1C2',
            borderBottomWidth: 1,
          }}
        />
      </View>
      <Text style={styles.textStyle1}>We never compromise on security!
      </Text>
      <Text style={styles.textStyle2}>
      Help us create a safe place by providing your mobile number
      to maintain authenticity.</Text>
      <TouchableOpacity
               style = {styles.sendButton}
               onPress = {
                  () => this.send(this.state.number)
               }>
               <Text style = {styles.sendButtonText}> Send OTP </Text>
            </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#E5E5E5',
    
  },
  imgStyle: {
    position: 'absolute',
    left: 10,
    right: 27.34,
    top: 100,
    bottom: 21,
    
  },
  textStyle: {
    position: 'absolute',
    width: 320,
    height: 73,
    left: 20,
    top: 189,
    /*fontFamily: 'Inter',*/
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight: 36,
    display: 'flex',
    alignItems: 'flex-end',
    color: '#545B63',
  },
  imgStyle2: {
    position: 'absolute',
    left: 47.62,
    right: 47.62,
    top: 46.67,
    bottom: 46.67,
    backgroundColor: '#181A93',
  },
  textStyle1: {
    position: 'absolute',
    top: 450,
    left: 20, 
    //font-family: Inter;
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 17,
    lineHeight: 17,
    display: 'flex',
    alignItems: 'center',
    color: '#A5B1C2',
  },
  textStyle2: {
    position: 'absolute',
    top: 466,
    right:20,
    left: 20, 

    //font-family: Inter;
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 17,
    lineHeight: 18,
    display: 'flex',
    alignItems: 'center',
    color: '#A5B1C2',
  },
  imgStyle2: {
    position: 'absolute',
    left: 25,
    right: 42.86,
    top: 360,
    bottom: 40,

    
  },
  
  SectionStyle: {
   
    
    position: 'absolute',
    height: 21,
    left: 70,
    top: 360,
    //font-family: Inter;
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 18,
    lineHeight: 150,
    display: 'flex',
    alignItems: 'flex-end',
    color: '#A5B1C2',
  },
  imgStyle3: {
    position: 'absolute',
    left: 350,
    right: 0,
    top: 360,
    bottom: 22.47,
    
  },
  sendButton: {
    
    position: 'absolute',
    alignItems: 'center',
    textAlign: 'center',
    top: 600,
    bottom:15,
    left: 130, 
    height: 60,
    width: 130,

    backgroundColor: '#E5E5E5',
    
 },
 sendButtonText: {
  color: '#A5B1C2',
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: 19,
  marginTop: 15,
  textAlign: 'center',
 }
 
  
});
