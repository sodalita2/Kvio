import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Button,
  Text,
  useColorScheme,
  View,
  Pressable,
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScheduleScreen from '../screens/ScheduleScreen';
import HomeStyle from '../styles/HomeStyle';



const HomeScreen = ({navigation}): Node => {

    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };


    

    return(
        <SafeAreaView>
            <ScrollView>
                <Pressable style={HomeStyle.ScheduleSection} onPress={() => {
                    navigation.navigate('Schedule')
                }}>
                    <Text style={HomeStyle.ScheduleButtonTopText}>Your Schedule</Text>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    );

};

export default HomeScreen;
