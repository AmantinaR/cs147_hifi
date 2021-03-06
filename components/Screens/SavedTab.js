import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ResultsList from '../lists/ResultsList'
import Default from '../lists/data/Default';
import Location from '../Location';
import Images from '../../assets/LocationImages';
import SavedList from '../lists/SavedList';

export default function SavedTab({ navigation, route, bathrooms }) {
  function savedFilter(location) {
    if (location.saved === true) {
      return(true);
    }else {
      return(false);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <SavedList data = {bathrooms.filter(savedFilter)}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    marginBottom: '10%',
    marginTop: '-40%'

  }
});
