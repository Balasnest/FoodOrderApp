import React from 'react';
import { View, Text, Image, TouchableOpacity, Animated, Easing, StyleSheet, Platform } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

import images from '../config/images';
import { menuSize, colors } from '../config/styles';

import HomeContainer from '../components/HomeContainer';
import MenuListContainer from '../components/MenuListContainer';


const PrimaryNav = StackNavigator({
	Home: { screen: HomeContainer },
	MenuList: { screen: MenuListContainer }
});

export default PrimaryNav;

