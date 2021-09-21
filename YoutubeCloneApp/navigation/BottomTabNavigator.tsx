import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from 'react'

import Colors from '../constants/Colors'
import useColorScheme from "../hooks/useColorScheme";
import TabOneScreen from "../screens/TabOneScreen";
import HomeScreen from "../screens/HomeScreen";
// import [BottomtabParamList, TaboneParamList, TabTwoParamList} from '../types';