import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddScreenInput from './AddScreenInput';
import AddScreenConfirm from './AddScreenConfirm';

const AddStack = createStackNavigator();

export default function AddTab({ navigation }) {
  return (
    <AddStack.Navigator>
      <AddStack.Screen name = "Input" component={AddScreenInput} options={{headerShown: false}}/>
      <AddStack.Screen name = "Confirm" component={AddScreenConfirm}/>
    </AddStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});