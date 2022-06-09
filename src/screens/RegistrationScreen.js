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
  
 const RegistrationScreen= ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);

const {register,isLoading} =useContext(AuthContext)
//         <AwesomeLoading indicatorId={8} size={50} isActive={true} text="loading" />

  return (
    <View style={styles.constainer}>
      {isLoading? <Text>Loading</Text> :null}
      <View style={styles.wrapper}>
      <TextInput
          style={styles.input}
          placeholder="Enter Name"
          value={name}
          onChangeText={text => setName(text)}
        />
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
        <Button title="Register" onPress={()=>{register(name,email,password)}} />
      </View>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <Text>Don,t have an account?</Text>
        <TouchableOpacity onPress={()=>{navigation.navigate('Login')}}>
          <Text style={styles.link}> Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegistrationScreen







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
