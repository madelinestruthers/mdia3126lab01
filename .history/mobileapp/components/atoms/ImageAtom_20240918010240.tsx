import React from 'react';
import { Image } from 'react-native';

const ImageAtom = ({ uri }: { uri: string }) => {
  return <Image source={{ uri }} style={{ width: 300, height: 300 }} />;
};

export default ImageAtom;