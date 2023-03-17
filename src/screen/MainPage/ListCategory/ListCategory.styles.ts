import {StyleSheet} from 'react-native';
import {ms} from 'react-native-size-matters';
import {colors} from '../../../constant/colors';

export const styles = StyleSheet.create({
  text: {
    color: colors.black,
    fontSize: ms(12),
    fontWeight: '600',
  },
  containerCard: {
    paddingHorizontal: ms(12),
    paddingVertical: ms(8),
    marginHorizontal: ms(6),
    marginVertical: ms(4),
  },
  flatlist: {
    padding: ms(4),
  },
});
