import React from 'react';
import { Image } from 'react-native';

const ImageAtom = ({ uri }: { uri: string }) => {
  return <Image source={{ uri }} style={{ width: 100, height: 100 }} />;
};

export default ImageAtom;