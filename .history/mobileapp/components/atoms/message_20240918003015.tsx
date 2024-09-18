import React from 'react';
import { Text } from 'react-native';

const MessageAtom = ({ message }: { message: string }) => {
  return <Text>{message}</Text>;
};

export default MessageAtom;