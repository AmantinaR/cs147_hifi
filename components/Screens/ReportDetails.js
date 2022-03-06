import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {useState} from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GenericButton from '../buttons/GenericButton';
import ReportStatusBar from '../ReportStatusBar';

export default function ReportDetails({ route, navigation }) {
  const [option, setOption] = useState(null);
  const params = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text style = {styles.thank_you}>You told us the issue and we worked with building managers to get a response</Text>
      <ReportStatusBar step={params.step} small={false}/>
      <StatusBar style="auto" />
      <View style={styles.summary_body}>
        <Text style = {{fontWeight: 'bold', fontSize: 18, marginBottom: '1%', fontFamily: 'Helvetica'}}>Summary of Report</Text>
        <View style={styles.summary_line}>
          <Text style = {{fontWeight: 'bold', fontFamily: 'Helvetica'}}>Building:  </Text>
          <Text style = {{fontWeight: 'normal', fontFamily: 'Helvetica'}}>{params.name}  </Text>
         </View>
       <View style={styles.summary_line}>
          <Text style = {{fontWeight: 'bold', fontFamily: 'Helvetica'}}>Bathroom #:  </Text>
          <Text style = {{fontWeight: 'normal', fontFamily: 'Helvetica'}}>{params.floor}  </Text>
       </View>
       <View style={styles.summary_line}>
          <Text style = {{fontWeight: 'bold', fontFamily: 'Helvetica'}}>Products Requested:  </Text>
          <Text style = {{fontWeight: 'normal', fontFamily: 'Helvetica'}}>{params.productlist}  </Text>
       </View>
       <View style={styles.summary_line}>
          <Text style = {{fontWeight: 'bold', fontFamily: 'Helvetica'}}>Disposal Options Missing:  </Text>
          <Text style = {{fontWeight: 'normal', fontFamily: 'Helvetica'}}> </Text>
       </View>
       <View style={styles.summary_line}>
          <Text style = {{fontWeight: 'bold', fontFamily: 'Helvetica'}}>Comments:  </Text>
          <Text style = {{fontWeight: 'normal', fontFamily: 'Helvetica'}}>{params.comments}  </Text>
       </View>
       <View style={styles.summary_line}>
          <Text style = {{fontWeight: 'bold', fontFamily: 'Helvetica'}}>Date Submitted:  </Text>
          <Text style = {{fontWeight: 'normal', fontFamily: 'Helvetica'}}>{params.date}  </Text>
       </View>
       <View style={styles.summary_line}>
          <Text style = {{fontWeight: 'bold', fontFamily: 'Helvetica'}}>Date Submitted:  </Text>
          <Text style = {{fontWeight: 'normal', fontFamily: 'Helvetica'}}>{params.date}  </Text>
       </View>
      </View>
        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  thank_you: {
    color: 'rgba(0, 0, 0, 0.5)',
    marginHorizontal: '5%',
    marginTop: '-20%',
    fontFamily: 'Helvetica',
    marginBottom: 16,
    textAlign: 'center'
  },
  summary_body:{
    margin: '10%',
    flexDirection: 'column',
    padding: '3%'
  },
  summary_line: {
    flexDirection: 'row',
    padding: '2%'
  },
  button: {
    color: '#ffffff',
    fontSize: 15,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#fcc181',
    height: '37%',
    width: '30%',
    borderRadius: 4,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 2,
    },
   shadowOpacity: 0.25,
   shadowRadius: 2,
 },
  text: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'Helvetica-Bold'

  },
  bottom_buttons: {
    padding: '3%'
  },
  another_report: {
    fontSize: 16,
    color: '#ff8984',
    textDecorationLine: 'underline',
    margin: '1%',
    fontFamily: 'Helvetica'
  },
});