import {View, Text, FlatList} from 'react-native';
import React from 'react';
import CardWithShadow from '../../../component/CardWithShadow/CardWithShadow';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/types';
import {ms} from 'react-native-size-matters';
import {styles} from './ListCategory.styles';

const ListCategory = () => {
  const {dataCategory} = useSelector((state: RootState) => state.reducers);
  console.log('dataCategory', dataCategory);
  return (
    <View>
      <FlatList
        style={styles.flatlist}
        horizontal
        alwaysBounceHorizontal={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item?.id || ''}
        data={dataCategory}
        renderItem={({item}) => (
          <CardWithShadow
            borderRadius={ms(4)}
            containerStyle={styles.containerCard}>
            <Text style={styles.text}>{item?.name}</Text>
          </CardWithShadow>
        )}
      />
    </View>
  );
};

export default ListCategory;
