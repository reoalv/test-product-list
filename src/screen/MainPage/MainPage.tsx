import {SafeAreaView, StatusBar, View} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import Header from '../../component/Headers/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ms} from 'react-native-size-matters';
import {styles} from './MainPage.styles';
import {colors} from '../../constant/colors';
import {useDispatch} from 'react-redux';
import {getCategory, getProduct} from '../../redux/action';
import ListProduct from './ListProduct/ListProduct';

const MainPage = () => {
  const dispatch = useDispatch();

  const fetchingCategory = useCallback(() => {
    dispatch(getCategory());
  }, [dispatch]);
  const fetchingProduct = useCallback(() => {
    dispatch(getProduct());
  }, [dispatch]);

  useEffect(() => {
    fetchingCategory();
    fetchingProduct();
  }, [fetchingCategory, fetchingProduct]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.background} barStyle="dark-content" />
      <Header
        title="Category"
        leftIcon={
          <Ionicons name="arrow-back" size={ms(16)} color={colors.black} />
        }
        rightIcon={
          <Ionicons name="options" size={ms(16)} color={colors.black} />
        }
      />
      <View style={styles.containerContent}>
        <ListProduct />
      </View>
    </SafeAreaView>
  );
};

export default MainPage;
