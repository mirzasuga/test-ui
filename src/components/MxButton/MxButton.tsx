import React from 'react';
import type { GestureResponderEvent } from 'react-native';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native';

type MxButtonProps = {
  text: string;
  onPress: (event: GestureResponderEvent) => void;
};

const MxButton = function (props: MxButtonProps) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text>{props.text} </Text>
    </TouchableOpacity>
  );
};

MxButton.defaultProps = {
  text: 'render',
  onPress: (event: GestureResponderEvent) => {
    console.log({ event });
  },
};

export default MxButton;
