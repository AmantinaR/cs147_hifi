import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


export default function ReportStatusBar({step, small}) {
  const size = small===true ? 3 : 8;
  if(step == 1) {
    return(
      <View style={styles.container}>

        <View style={[styles.status, { marginHorizontal: size }]}>
          <FontAwesome name={'check-circle'} size={25} color={'#FCC181'}/>
          <Text style={styles.text}>Report</Text>
          <Text style={styles.text}>Submitted</Text>
        </View>
        <View style={[styles.status, { marginHorizontal: size }]}>
          <FontAwesome name={'circle-o'} size={25} color={'#E8A798'}/>
          <Text style={styles.textStep}>Manager</Text>
          <Text style={styles.textStep}>Review</Text>
        </View>
        <View style={[styles.status, { marginHorizontal: size }]}>
          <FontAwesome name={'circle-thin'} size={25} color={'rgba(0, 0, 0, 0.25)'}/>
          <Text style={styles.text}>Decision</Text>
          <Text style={styles.text}>Pending</Text>
        </View>

        <View style={[styles.status, { marginHorizontal: size }]}>
          <FontAwesome name={'circle-thin'} size={25} color={'rgba(0, 0, 0, 0.25)'}/>
          <Text style={styles.text}>Results</Text>
          <Text style={styles.text}>Posted</Text>
        </View>
      </View>
  );} else if(step == 2) {
    return(
      <View style={styles.container}>

        <View style={[styles.status, { marginHorizontal: size }]}>
          <FontAwesome name={'check-circle'} size={25} color={'#FCC181'}/>
          <Text style={styles.text}>Report</Text>
          <Text style={styles.text}>Submitted</Text>
        </View>
        <View style={[styles.status, { marginHorizontal: size }]}>
          <FontAwesome name={'check-circle'} size={25} color={'#FCC181'}/>
          <Text style={styles.text}>Manager</Text>
          <Text style={styles.text}>Review</Text>
        </View>
        <View style={[styles.status, { marginHorizontal: size }]}>
          <FontAwesome name={'circle-o'} size={25} color={'#E8A798'}/>
          <Text style={styles.textStep}>Decision</Text>
          <Text style={styles.textStep}>Pending</Text>
        </View>


        <View style={[styles.status, { marginHorizontal: size }]}>
          <FontAwesome name={'circle-thin'} size={25} color={'rgba(0, 0, 0, 0.25)'}/>
          <Text style={styles.text}>Results</Text>
          <Text style={styles.text}>Posted</Text>
        </View>
      </View>
  );} else if(step == 3) {
    return(
      <View style={styles.container}>

        <View style={[styles.status, { marginHorizontal: size }]}>
          <FontAwesome name={'check-circle'} size={25} color={'#FCC181'}/>
          <Text style={styles.text}>Report</Text>
          <Text style={styles.text}>Submitted</Text>
        </View>
        <View style={[styles.status, { marginHorizontal: size }]}>
          <FontAwesome name={'check-circle'} size={25} color={'#FCC181'}/>
          <Text style={styles.text}>Manager</Text>
          <Text style={styles.text}>Review</Text>
        </View>
        <View style={[styles.status, { marginHorizontal: size }]}>
          <FontAwesome name={'check-circle'} size={25} color={'#FCC181'}/>
          <Text style={styles.text}>Decision</Text>
          <Text style={styles.text}>Pending</Text>
        </View>
        <View style={[styles.status, { marginHorizontal: size }]}>
          <FontAwesome name={'circle-o'} size={25} color={'#E8A798'}/>
          <Text style={styles.textStep}>Results</Text>
          <Text style={styles.textStep}>Posted</Text>
        </View>
      </View>
  );} else if(step == 4) {
    return(
      <View style={styles.container}>

        <View style={[styles.status, { marginHorizontal: size }]}>
          <FontAwesome name={'check-circle'} size={25} color={'#FCC181'}/>
          <Text style={styles.text}>Report</Text>
          <Text style={styles.text}>Submitted</Text>
        </View>

        <View style={[styles.status, { marginHorizontal: size }]}>
          <FontAwesome name={'check-circle'} size={25} color={'#FCC181'}/>
          <Text style={styles.text}>Manager</Text>
          <Text style={styles.text}>Review</Text>
        </View>

        <View style={[styles.status, { marginHorizontal: size }]}>
          <FontAwesome name={'check-circle'} size={25} color={'#FCC181'}/>
          <Text style={styles.text}>Decision</Text>
          <Text style={styles.text}>Pending</Text>
        </View>
        

        <View style={[styles.status, { marginHorizontal: size }]}>
          <FontAwesome name={'check-circle'} size={25} color={'#FCC181'}/>
          <Text style={styles.text}>Results</Text>
          <Text style={styles.text}>Posted</Text>
        </View>
      </View>
  );}
}
const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  status: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 55,
  },
  text: {
    fontFamily: 'Helvetica',
    fontSize: 10,

  },
  textStep: {
    fontFamily: 'Helvetica',
    fontSize: 10,
    fontWeight: 'bold'

  }
});
