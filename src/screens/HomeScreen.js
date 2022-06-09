import {View, Text, StyleSheet,Button} from 'react-native';
import React,{useContext} from 'react';
import { AuthContext } from '../context/AuthContext';

const HomeScreen = () => {
  const {userInfo,logout, isLoading}= useContext(AuthContext)
  return (
    <View style={styles.container}>
      {isLoading? <Text>Loading</Text>:null}
      <Text style={styles.welcome}>Welcome {userInfo.token}</Text>
      <Button title='Logout' color='red'  onPress={ logout}/>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {fontsize: 18, marginBottom: 8},
});
