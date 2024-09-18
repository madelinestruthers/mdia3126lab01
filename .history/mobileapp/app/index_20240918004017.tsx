import { Text, View } from "react-native";
import React from 'react';
import Post from "@/components/molecule/post";

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
        name="John Doe" 
        uri="https://example.com/profile.jpg" 
        message="Hello, this is a sample post!" 
      />
    </View>
  );
}
