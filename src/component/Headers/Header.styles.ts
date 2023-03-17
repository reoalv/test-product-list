import {ms} from 'react-native-size-matters';
import {StyleSheet} from 'react-native';
import {colors} from '../../constant/colors';

export const styles = StyleSheet.create({
  container: {
    padding: ms(16),
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerLeft: {
    padding: ms(8),
    borderRadius: 99,
    marginRight: ms(8),
    backgroundColor: colors.white,
  },
  containerText: {
    fontSize: ms(24),
    fontWeight: '700',
    color: '#000000',
  },
  containerRight: {
    padding: ms(8),
    borderRadius: 99,
    backgroundColor: colors.white,
    position: 'absolute',
    right: ms(16),
  },
});
