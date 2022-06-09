/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
} from 'react-native';
import Navigation from './src/components/Navigation';
import { AuthProvider } from './src/context/AuthContext';



      
const App=() => {

 

  return( <AuthProvider> 
    <StatusBar backgroundColor='red' />
    <Navigation />
    </AuthProvider>)
};



export default App;
