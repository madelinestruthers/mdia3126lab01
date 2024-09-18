import React from 'react';
import { Image } from 'react-native';

const Image = ({ uri }: { uri: string }) => {
  return <Image source={{ uri }} style={{ width: 50, height: 50 }} />;
};

export default Image;