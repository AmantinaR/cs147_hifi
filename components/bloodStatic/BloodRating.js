import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, TouchableOpacity, Pressable, Image } from 'react-native';
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Blood from './Blood';
import HalfBlood from './HalfBlood';


export default function BloodRating({number, small}) {
  if (number == null) {
    return(
    <View style={styles.container}>
      <Blood color='#D3D3D3'small={small}/>
      <Blood color='#D3D3D3' small={small}/>
      <Blood color='#D3D3D3' small={small}/>
      <Blood color='#D3D3D3' small={small}/>
      <Blood color='#D3D3D3' small={small}/>
    </View> );
  } else if (number === 0.5) {
    return(
      <View style={styles.container}>
        <HalfBlood small={small}/>
        <Blood color='#D3D3D3' small={small}/>
        <Blood color='#D3D3D3'small={small}/>
        <Blood color='#D3D3D3'small={small}/>
        <Blood color='#D3D3D3'small={small}/>
      </View>
    );
  } else if (number === 1) {
    return(
      <View style={styles.container}>
        <Blood color='#DA4949'small={small}/>
        <Blood color='#D3D3D3' small={small}/>
        <Blood color='#D3D3D3' small={small}/>
        <Blood color='#D3D3D3' small={small}/>
        <Blood color='#D3D3D3' small={small}/>
      </View>
    );
  } else if (number === 1.5) {
    return(
      <View style={styles.container}>
        <Blood color='#DA4949'small={small}/>
        <HalfBlood small={small}/>
        <Blood color='#D3D3D3' small={small}/>
        <Blood color='#D3D3D3' small={small}/>
        <Blood color='#D3D3D3' small={small}/>
      </View>
    );
  } else if (number === 2) {
    return(
      <View style={styles.container}>
        <Blood color='#DA4949' small={small}/>
        <Blood color='#DA4949' small={small}/>
        <Blood color='#D3D3D3' small={small}/>
        <Blood color='#D3D3D3' small={small}/>
        <Blood color='#D3D3D3' small={small}/>
      </View>
    );
  } else if (number === 2.5) {
    return(
      <View style={styles.container}>
        <Blood color='#DA4949' small={small}/>
        <Blood color='#DA4949' small={small}/>
        <HalfBlood small={small}/>
        <Blood color='#D3D3D3' small={small}/>
        <Blood color='#D3D3D3' small={small}/>
      </View>
    );
  } else if (number === 3) {
    return(
      <View style={styles.container}>
        <Blood color='#DA4949' small={small}/>
        <Blood color='#DA4949' small={small}/>
        <Blood color='#DA4949' small={small}/>
        <Blood color='#D3D3D3' small={small}/>
        <Blood color='#D3D3D3' small={small}/>
      </View>
    );
  } else if (number === 3.5) {
    return(
      <View style={styles.container}>
        <Blood color='#DA4949' small={small}/>
        <Blood color='#DA4949' small={small}/>
        <Blood color='#DA4949' small={small}/>
        <HalfBlood small={small}/>
        <Blood color='#D3D3D3' small={small}/>
      </View>
    );
  } else if (number === 4) {
    return(
      <View style={styles.container}>
        <Blood color='#DA4949' small={small}/>
        <Blood color='#DA4949' small={small}/>
        <Blood color='#DA4949' small={small}/>
        <Blood color='#DA4949' small={small}/>
        <Blood color='#D3D3D3' small={small}/>
      </View>
    );
  } else if (number === 4.5) {
    return(
      <View style={styles.container}>
        <Blood color='#DA4949' small={small}/>
        <Blood color='#DA4949' small={small}/>
        <Blood color='#DA4949' small={small}/>
        <Blood color='#DA4949' small={small}/>
        <HalfBlood small={small}/>
      </View>
    );
  } else if (number === 5) {
    return(
      <View style={styles.container}>
        <Blood color='#DA4949' small={small}/>
        <Blood color='#DA4949' small={small}/>
        <Blood color='#DA4949' small={small}/>
        <Blood color='#DA4949' small={small}/>
        <Blood color='#DA4949' small={small}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

});
