import {StyleProp, View, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';
import {styles} from './CardWithShadow.styles';
import {colors} from '../../constant/colors';
import {ms} from 'react-native-size-matters';

type Props = {
  cardColor?: string;
  borderRadius?: number;
  children?: ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
};

const CardWithShadow = ({
  cardColor,
  borderRadius,
  children,
  containerStyle,
}: Props) => {
  return (
    <View
      style={[
        {
          ...styles.container,
          backgroundColor: cardColor || colors.white,
          borderRadius: borderRadius || ms(8),
        },
        containerStyle,
      ]}>
      {children}
    </View>
  );
};

export default CardWithShadow;
