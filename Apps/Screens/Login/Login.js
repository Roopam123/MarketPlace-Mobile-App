import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./Login.Style";
import LoginImg from '../../../assets/AppImage/login.png'


const LoginScreen = () => {
  return (
    <View style={styles.login}>
      <Text style={styles.welcome}>Welcome to Our Marketplace</Text>
      <View style={styles.imgContainer}>
        <Image source={LoginImg} style={styles.loginImg} />
      </View>
        <Text style={styles.des}>
          Creating a Comprehensive Marketplace: Discover, Shop, and Buy Your
          Favorite Products Easily!💫
        </Text>
      <TouchableOpacity style={styles.btn} onPress={()=>{console.warn("Hello Roopam")}}>
        <Text style={styles.btnText}>Login With Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
