/**
 * Sample React Native App
 *
 * adapted from App.js generated by the following command:
 *
 * react-native init example
 *
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import {NfcCardModuleWrapper, NfcNativeModuleError, CardResponse, CardError} from 'ton-nfc-client';

let  nfcCardModuleWrapper = new NfcCardModuleWrapper();

export default class App extends Component<{}> {
  state = {
    status: 'starting',
    message: '--'
  };
  componentDidMount() {
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
              <Button onPress={() => {
                let p = nfcCardModuleWrapper.getRemainingPinTries();
           
                p.then((result) => {
                  console.log(result instanceof CardResponse)
                  alert("Remainig Pin tries : " + result.message)
                })
                .catch((e) => {
                  console.log(e instanceof CardError)
                  console.log(e instanceof NfcNativeModuleError)
                  console.log(e.status)
                  console.log(e.errorCode)
                  console.log(e.message)
                  alert(e.message)
                });
            }} title="getRemainingPinTries"/>
        </View>
        <View>
              <Button onPress={() => {
                nfcCardModuleWrapper.getAllSerialNumbers()
            .then((result) => alert("getAllSerialNumbers : " + result.message)).catch((e) => alert(e.message))
            }} title="getAllSerialNumbers"/>
        </View>
        <View>
              <Button onPress={() => nfcCardModuleWrapper.getKeyChainInfo()
            .then((result) => alert("getKeyChainInfo : " + result.message)).catch((e) => alert(e.message))} title="getKeyChainInfo"/>
        </View>
        <View>
              <Button onPress={() => nfcCardModuleWrapper.getPublicKeyForDefaultPath()
            .then((result) => alert("getPublicKeyForDefaultPath : " + result.message)).catch((e) => alert(e.message))} title="getPublicKeyForDefaultPath"/>
        </View>
        <View>
              <Button onPress={async () => {

                let result = await nfcCardModuleWrapper.getSerialNumber();
                alert("getSerialNumber 1 : " + result.message);
                await new Promise(r => setTimeout(r, 7000))

                result = await nfcCardModuleWrapper.getSerialNumber();
                alert("getSerialNumber 2 : " + result.message);

                await new Promise(r => setTimeout(r, 7000))

                result = await nfcCardModuleWrapper.getSerialNumber();
                alert("getSerialNumber 3 : " + result.message);

                await new Promise(r => setTimeout(r, 7000))

                result = await nfcCardModuleWrapper.getSault();
                alert("getSault : " + result.message);
                
                
                //nfcCardModuleWrapper.getSerialNumber()
           // .then((result) => alert("getSerialNumber : " + result.message)).catch((e) => alert(e.message))
            }} title="getSerialNumber"/>
        </View>
        <View>
              <Button onPress={() => nfcCardModuleWrapper.getMaxPinTriesWithoutDialog()
            .then((result) => alert("getMaxPinTries : " + result.message)).catch((e) => alert(e.message))} title="getMaxPinTries"/>
        </View>    
      
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
