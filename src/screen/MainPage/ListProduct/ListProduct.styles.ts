import {StyleSheet} from 'react-native';
import {ms} from 'react-native-size-matters';
import {colors} from '../../../constant/colors';

export const styles = StyleSheet.create({
  containerCard: {
    flex: 1,
    marginHorizontal: ms(4),
    paddingVertical: ms(6),
    paddingHorizontal: ms(8),
    marginBottom: ms(12),
  },
  flatlist: {
    paddingBottom: ms(12),
    flexGrow: 1,
  },
  columnFlatlist: {
    justifyContent: 'space-between',
    paddingHorizontal: ms(12),
  },
  headerCardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: ms(20),
  },
  listCategoryContainer: {
    padding: ms(4),
  },
  cardOutStock: {
    paddingHorizontal: ms(8),
    paddingVertical: ms(3),
    position: 'absolute',
  },
  containerHeart: {
    position: 'absolute',
    right: 0,
    padding: ms(4),
  },
  textNew: {
    color: colors.black,
    fontWeight: '600',
    fontSize: ms(12),
    position: 'absolute',
  },
  textOutStock: {
    color: colors.white,
    fontWeight: '600',
    fontSize: ms(10),
  },
  textName: {
    color: colors.grey,
    fontWeight: '600',
    marginTop: ms(6),
  },
  textPrice: {
    color: colors.black,
    fontWeight: '800',
    fontSize: ms(16),
  },
  textDiscount: {
    color: colors.darkGrey,
    fontSize: ms(12),
    fontWeight: '800',
  },
});
