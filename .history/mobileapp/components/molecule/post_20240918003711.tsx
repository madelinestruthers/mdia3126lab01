import React from 'react';
import { View } from 'react-native';
import ImageAtom from '../atoms/ImageAtom';
import Name from '../atoms/NameAtom';
import Message from '../atoms/MessageAtom';

const Post = ({ name, uri, message }: { name: string; uri: string; message: string }) => {
  return (
    <View style={{ flexDirection: 'row', padding: 10 }}>
      <ImageAtom uri={uri} />
      <View style={{ marginLeft: 10 }}>
        <Name name={name} />
        <Message message={message} />
      </View>
    </View>
  ); 
};

export default Post;