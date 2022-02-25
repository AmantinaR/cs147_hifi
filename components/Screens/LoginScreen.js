import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function LoginScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Login Screen</Text>
      <StatusBar style="auto" />
      <TextInput style={styles.textBox} placeholder='username' autoCorrect={false}/>
      <TextInput style={styles.textBox} placeholder='password' secureTextEntry={true}/>
      <TouchableOpacity onPress={() => navigation.navigate('Landing')}>
        <View>
        <Image source={require('../../assets/login-button.png')} style={styles.button}/>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <View>
          <Text> Register</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBox: {
    borderWidth: 1,
    borderColor: 'black',
    height: 40,
    padding: 10,
    margin: 12,
    width: 200
  },
  button: {
    marginTop: 10,
    marginBottom: 0,
  }
});
