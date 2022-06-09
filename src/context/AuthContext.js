import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {createContext, useState,useEffect} from 'react';
import {BASE_URL} from '../config';
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({});
const [splashLoading,setSplashLoading]= useState(false)
  const register = async (name, email, password) => {
    setIsLoading(true);
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    console.log(
      'sdkfjlksjdlkfjlksdjfk>>>>>>>>>>>>>>>>>>>??????????????',
      name,
      email,
      password,
    );
    const body = JSON.stringify({name, email, password});
    await fetch('http://10.0.2.2:5000/api/users/register', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body,
    })
      .then(response => response.json())
      .then(data => {
        let userInfoo = data;
        setUserInfo(userInfoo);
        AsyncStorage.setItem('unserInfo', JSON.stringify(userInfo));
        setIsLoading(false);
        console.log(data);
        setIsLoading(false);
      }).catch(err => {
        console.log('Register Error>>>>>', err);
        setIsLoading(false);
      });
  };
  const login = async (email, password) => {
    setIsLoading(true);
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    console.log(
      'sdkfjlksjdlkfjlksdjfk>>>>>>>>>>>>>>>>>>>??????????????',
      email,
      password,
    );
    const body = JSON.stringify({email, password});
    await fetch('http://10.0.2.2:5000/api/users/login', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body,
    })
      .then(response => response.json())
      .then(data => {
        let userInfoo = data;
        setUserInfo(userInfoo);
        AsyncStorage.setItem('unserInfo', JSON.stringify(userInfo));
        setIsLoading(false);
        console.log(data);
      })
      .catch(err => {
        console.log('Login Error>>>>>', err);
        setIsLoading(false);
      });
  };


  const logout=()=>{
    setIsLoading(true)
    AsyncStorage.removeItem('userInfo')
    setUserInfo({})
    setIsLoading(false)
  }
  const isLoggedIn=async()=>{
try {
  setSplashLoading(true)
  let userInfoo= await AsyncStorage.getItem('userInfo')
  userInfoo=JSON.parse(userInfoo)
  if(userInfoo){
    setUserInfo(userInfoo)
  }
  setSplashLoading(false)

} catch (e) {
  setSplashLoading(false)
  console.log('error loggedin', e)

}
  }
  useEffect(()=>{
    isLoggedIn()
  },[])
  return (
    <AuthContext.Provider value={{userInfo,splashLoading,logout, isLoading, register, login}}>
      {children}
    </AuthContext.Provider>
  );
};
