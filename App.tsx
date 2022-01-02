import React from 'react';
import {PlatformColor, Text, useColorScheme, View} from 'react-native';

export default function App() {
  const colorScheme = useColorScheme();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: PlatformColor('@color/background'),
      }}>
      <Text
        style={{
          fontSize: 35,
          color: PlatformColor('@color/text'),
        }}>
        Hello world zft ( {colorScheme})
      </Text>
    </View>
  );
}
