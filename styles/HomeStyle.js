import React from 'react';
import type {Node} from 'react';
import {
  StyleSheet,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';






const HomeStyle = StyleSheet.create({
    ScheduleSection:{
        // BORDER DEBUG CONTAINER
        borderWidth: 10,
        marginTop: 40,
        paddingHorizontal: 100,
        paddingVertical: 100,
        fontWeight: 'bold',
        color: '#222',
    },
    PressableFillDiv:{
        borderWidth: 5,
        alignSelf: 'stretch',
        textAlign: 'center',
    },
    Button:{
        marginTop:-100,
        borderWidth:10,
        paddingHorizontal: 30,
        color: '#222',
    },
    ScheduleButtonTopText:{
        textAlign: 'center',
        marginTop:-100,
        color: '#222',
        fontWeight: 'bold',
    }
});

export default HomeStyle;


