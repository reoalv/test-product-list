import {Text, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import Header from '../../component/Headers/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ms} from 'react-native-size-matters';
import {styles} from './MainPage.styles';
import {colors} from '../../constant/colors';

const MainPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.lightGrey} barStyle="dark-content" />
      <Header
        title="Category"
        leftIcon={
          <Ionicons name="arrow-back" size={ms(16)} color={colors.black} />
        }
        rightIcon={
          <Ionicons name="options" size={ms(16)} color={colors.black} />
        }
      />
      <Text>MainPage</Text>
    </SafeAreaView>
  );
};

export default MainPage;
