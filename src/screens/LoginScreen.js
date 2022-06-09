import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState,useContext} from 'react';
  
import { AuthContext } from '../context/AuthContext';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
const {login,isLoading} =useContext(AuthContext)

  return (
    <View style={styles.constainer}>
      {isLoading? <Text>Loading</Text> :null}

      <View style={styles.wrapper}>
{/* <Text>kk</Text> */}
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          placeholder="Enter Password"
          secureTextEntry
        />
        <Button title="Login" onPress={()=>{login(email,password)}} />
      </View>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <Text>Don,t have an account?</Text>
        <TouchableOpacity onPress={()=>{navigation.navigate('Register')}}>
          <Text style={styles.link}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    width: '80%',
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 5,
    paddingHorizontal: 14,
  },
  link: {
    color: 'blue',
  },
});
