import React from 'react';
import { Image } from 'react-native';

const ImageAtom = ({ uri }: { uri: string }) => {
  return <Image source={{ uri }} style={{ width: 150, height: 150 }} />;
};

export default ImageAtom;