import React from 'react';
import {Text, Pressable, StyleProp, ViewStyle} from 'react-native';
import {styles} from './styles';

interface IProps {
  label: string;
  onPress: () => void;
  buttonStyle?: StyleProp<ViewStyle>;
}

const CommonButton: React.FC<IProps> = ({label, onPress, buttonStyle}) => {
  return (
    <Pressable style={[styles.mainContainer, buttonStyle]} onPress={onPress}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </Pressable>
  );
};

export default CommonButton;
