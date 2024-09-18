import { Text, View,  } from "react-native";
import React from 'react';
import Post from "../components/molecule/post";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>MySpace</Text>
      <Post 
        name="Snookiiii" 
        uri="https://i.redd.it/old-snooki-selfies-v0-vcx3p2sdf2sb1.jpg?width=401&format=pjpg&auto=webp&s=ea8b7c00cd2ce8a6577abb51cee2c1149b4dad20" 
        message="Hello, this is a sample post!" 
      />
    </View>
  );
}
