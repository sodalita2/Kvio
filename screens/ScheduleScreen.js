import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
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
import ScheduleStyle from '../styles/ScheduleStyle';



const ScheduleScreen = ({navigation}): Node => {

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return(
    <SafeAreaView>
      <ScrollView>
        <View style={ScheduleStyle.CalendarSection}>
          <Text style={ScheduleStyle.SectionTop}> Your Calendar </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );

};

export default ScheduleScreen;