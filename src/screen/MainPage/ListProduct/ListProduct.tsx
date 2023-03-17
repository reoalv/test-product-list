import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {dataProductType, RootState} from '../../../redux/types';
import {styles} from './ListProduct.styles';
import CardWithShadow from '../../../component/CardWithShadow/CardWithShadow';
import {colors} from '../../../constant/colors';
import FastImage from 'react-native-fast-image';
import {ms} from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ListCategory from '../ListCategory/ListCategory';

const ListProduct = () => {
  const {dataProduct} = useSelector((state: RootState) => state.reducers);

  const _renderItem = (item?: dataProductType) => {
    const positiveNumber = Math.floor(item?.rating || 0);
    const decimal = (item?.rating || 0) - positiveNumber;
    return (
      <CardWithShadow containerStyle={styles.containerCard}>
        <View style={styles.headerCardContent}>
          {item?.new ? (
            <Text style={styles.textNew}>New</Text>
          ) : item?.out_of_stock ? (
            <CardWithShadow
              cardColor={colors.orangeRed}
              containerStyle={styles.cardOutStock}
              borderRadius={ms(4)}>
              <Text style={styles.textOutStock}>Out of Stock</Text>
            </CardWithShadow>
          ) : (
            <View />
          )}
          <CardWithShadow
            containerStyle={styles.containerHeart}
            borderRadius={99}>
            <Ionicons name="heart-outline" size={ms(16)} color={colors.black} />
          </CardWithShadow>
        </View>
        <FastImage
          source={{
            uri: item?.image,
            priority: FastImage.priority.normal,
            cache: FastImage.cacheControl.web,
            headers: {
              'Content-Type': 'image/jpeg',
            },
          }}
          style={{height: ms(120)}}
          resizeMode={FastImage.resizeMode.contain}
        />
        <View style={styles.ratingContainer}>
          {[...Array(5)].map(_ => (
            <FontAwesome name="star-o" size={12} color={colors.lightGrey} />
          ))}
          <View style={styles.ratingFilled}>
            {[...Array(positiveNumber)].map(_ => (
              <FontAwesome name="star" size={12} color={colors.yellow} />
            ))}
            {decimal > 0 && (
              <FontAwesome name="star-half" size={12} color={colors.yellow} />
            )}
          </View>
        </View>
        <Text style={styles.textName}>{item?.name}</Text>
        <View style={styles.headerCardContent}>
          <Text style={styles.textPrice}>{item?.price}</Text>
          <Text style={styles.textDiscount}>{item?.off}</Text>
        </View>
      </CardWithShadow>
    );
  };

  return (
    <View>
      <FlatList
        ListHeaderComponent={<ListCategory />}
        style={styles.flatlist}
        columnWrapperStyle={styles.columnFlatlist}
        alwaysBounceVertical={false}
        keyExtractor={item => item?.id || ''}
        numColumns={2}
        data={dataProduct}
        renderItem={({item}) => _renderItem(item)}
      />
    </View>
  );
};

export default ListProduct;
