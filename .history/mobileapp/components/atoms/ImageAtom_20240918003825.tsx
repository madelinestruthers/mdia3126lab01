import React from 'react';
import { Image } from 'react-native';

const ImageAtom = ({ uri }: { uri: string }) => {
  return <Image source={{ uri }} style={{ width: 50, height: 50 }} />;
};

export default ImageAtom;