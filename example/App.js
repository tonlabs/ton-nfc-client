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
import {NfcCardModuleWrapper, NfcNativeModuleError, CardResponse, CardError, NfcCardSigningBox} from 'ton-nfc-client';

const { 
  TonClient, 
  messageSourceEncoded, 
  messageSourceEncodingParams, 
  signerSigningBox, 
  abiContract, 
  signerNone 
} = require("@tonclient/core");

let  nfcCardModuleWrapper = new NfcCardModuleWrapper();

let signingBox  = new NfcCardSigningBox();

export default class App extends Component{
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
                signingBox.sign({unsigned: "1100"})
            .then((result) => alert("getSignatureFromSigningBox : " + result.signature)).catch((e) => alert(e.message))
            }} title="getSignatureFromSigningBox"/>
        </View>
        <View>
              <Button onPress={() => {
                signingBox.get_public_key()
            .then((result) => alert("getPublicKeyFromSigningBox : " + result.public_key)).catch((e) => alert(e.message))
            }} title="getPublicKeyFromSigningBox"/>
        </View>
        <View>
              <Button onPress={() => {
                nfcCardModuleWrapper.getAllSerialNumbers()
            .then((result) => alert("getAllSerialNumbers : " + result.message)).catch((e) => alert(e.message))
            }} title="getAllSerialNumbers"/>
        </View>
        <View>
              <Button onPress={() => nfcCardModuleWrapper.getKeyChainInfo()
            .then((result) => alert("getKeyChainInfo : " + result.numberOfKeys)).catch((e) => alert(e.message))} title="getKeyChainInfo"/>
        </View>
        <View>
              <Button onPress={() => nfcCardModuleWrapper.getHmac("0")
            .then((result) => alert("getHmac : " + result.hmac)).catch((e) => alert(e.message))} title="getHmac"/>
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
              <Button onPress={() => nfcCardModuleWrapper.getHashes()
            .then((result) => alert("getHashes : " + result.ecsHash)).catch((e) => alert(e.message))} title="getHashes"/>
        </View>
        <View>
              <Button onPress={() => nfcCardModuleWrapper.getMaxPinTriesWithoutDialog()
            .then((result) => alert("getMaxPinTries : " + result.message)).catch((e) => alert(e.message))} title="getMaxPinTries"/>
        </View>   

        <View>
              <Button onPress={() => nfcCardModuleWrapper.createKeyForHmac(
                "F4B072E1DF2DB7CF6CD0CD681EC5CD2D071458D278E6546763CBB4860F8082FE14418C8A8A55E2106CBC6CB1174F4BA6D827A26A2D205F99B7E00401DA4C15ACC943274B92258114B5E11C16DA64484034F93771547FBE60DA70E273E6BD64F8A4201A9913B386BCA55B6678CFD7E7E68A646A7543E9E439DD5B60B9615079FE",
                "7256EFE7A77AFC7E9088266EF27A93CB01CD9432E0DB66D600745D506EE04AC4",
                "504394802433901126813236"
              )
            .then((result) => alert("createKeyForHmac : " + result.message)).catch((e) => alert(e.message))} title="createKeyForHmac"/>
        </View>

        <View>
              <Button onPress={() => nfcCardModuleWrapper.turnOnWallet("F4B072E1DF2DB7CF6CD0CD681EC5CD2D071458D278E6546763CBB4860F8082FE14418C8A8A55E2106CBC6CB1174F4BA6D827A26A2D205F99B7E00401DA4C15ACC943274B92258114B5E11C16DA64484034F93771547FBE60DA70E273E6BD64F8A4201A9913B386BCA55B6678CFD7E7E68A646A7543E9E439DD5B60B9615079FE",
              "7256EFE7A77AFC7E9088266EF27A93CB01CD9432E0DB66D600745D506EE04AC4",
              "1A550F4B413D0E971C28293F9183EA8A")
            .then((result) => alert("turnOnWallet : " + result.message)).catch((e) => alert(e.message))} title="turnOnWallet"/>
        </View>

        <View>
              <Button onPress={() => nfcCardModuleWrapper.turnOnWalletWithPin(
              "5555",
              "F4B072E1DF2DB7CF6CD0CD681EC5CD2D071458D278E6546763CBB4860F8082FE14418C8A8A55E2106CBC6CB1174F4BA6D827A26A2D205F99B7E00401DA4C15ACC943274B92258114B5E11C16DA64484034F93771547FBE60DA70E273E6BD64F8A4201A9913B386BCA55B6678CFD7E7E68A646A7543E9E439DD5B60B9615079FE",
              "7256EFE7A77AFC7E9088266EF27A93CB01CD9432E0DB66D600745D506EE04AC4",
              "1A550F4B413D0E971C28293F9183EA8A")
            .then((result) => alert("turnOnWalletWithPin : " + result.message)).catch((e) => alert(e.message))} title="turnOnWalletWithPin"/>
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
