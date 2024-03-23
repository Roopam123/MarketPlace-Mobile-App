import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../Screens/Home/Home";
import Profile from "../../Screens/Profile/Profile";
import Explore from "../../Screens/Explore/Explore";
import AddPost from "../../Screens/AddPost/AddPost";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabNavigations = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle:{
          backgroundColor:"black",
          height:80,
          padding:10
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: () => (
            <Text
              style={{
                color: "white",
                fontSize: 14,
                fontWeight: "800",
                marginBottom: 5,
              }}
            >
              Home
            </Text>
          ),
          tabBarIcon: () => <AntDesign name="home" size={24} color="white" />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: () => (
            <Text
              style={{
                color: "white",
                fontSize: 14,
                fontWeight: "800",
                marginBottom: 5,
              }}
            >
              Profile
            </Text>
          ),
          tabBarIcon: () => (
            <Ionicons name="person-circle" size={24} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarLabel: () => (
            <Text
              style={{
                color: "white",
                fontSize: 14,
                fontWeight: "800",
                marginBottom: 5,
              }}
            >
              Explore
            </Text>
          ),
          tabBarIcon: () => (
            <AntDesign name="search1" size={24} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Addpost"
        component={AddPost}
        options={{
          tabBarLabel: () => (
            <Text
              style={{
                color: "white",
                fontSize: 14,
                fontWeight: "800",
                marginBottom: 5,
              }}
            >
              Add Post
            </Text>
          ),
          tabBarIcon: () => <AntDesign name="camera" size={24} color="white" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigations;
