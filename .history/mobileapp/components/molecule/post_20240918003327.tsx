import React from 'react';
import { View } from 'react-native';
import Image from '../atoms/Image';
import Name from '../atoms/Name';
import Message from '../atoms/Message';

const Post = ({ name, uri, message }: { name: string; uri: string; message: string }) => {
  return (
    <View style={{ flexDirection: 'row', padding: 10 }}>
      <Image uri={uri} />
      <View style={{ marginLeft: 10 }}>
        <Name name={name} />
        <Message message={message} />
      </View>
    </View>
  ); 
};

export default Post;