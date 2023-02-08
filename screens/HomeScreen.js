import React, {useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, View, Text, StyleSheet, Button, TextInput, TouchableOpacity, Image} from 'react-native';
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
  } from "react-native-responsive-dimensions";



const HomeScreen = props => {
    
    return(
        <SafeAreaView style={styles.container}>

            <View style={styles.imageView}>
                <Image
                style={styles.tinyLogo}
                source={require('../assets/images/title-quiz.png')}
                />
                <Text style={styles.startText}>Pick a Quiz Below</Text>

            </View>

            
            <View style={styles.quizzesView}>
                <TouchableOpacity style={styles.startbtn} onPress={() =>{                  
                    props.navigation.navigate('Computer Quiz');
                }}>
                    <Text style={styles.startText}>Computer Quiz</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.startbtn} onPress={() =>{                   
                    props.navigation.navigate('Anime Quiz');
                }}>
                    <Text style={styles.startText}>Anime Quiz</Text>
                    </TouchableOpacity>

                <TouchableOpacity style={styles.startbtn} onPress={() =>{     
                    props.navigation.navigate('Video Game Quiz');
                }}>
                    <Text style={styles.startText}>Video Game Quiz</Text>
                    </TouchableOpacity>
                
            </View>

       </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-evenly",
        height: responsiveScreenHeight(50), // 50% of Screen height
        width: responsiveScreenWidth(100), // 50% of Screen width
        alignItems: "center",
        backgroundColor: "#8491ad",
        padding: 16,
    },
    startbtn: {
        elevation: 9,
        marginTop: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#174bbd',
        width: 300,
    },
    startText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        
    },
    tinyLogo: {
        width: 350,
        height: 210,
        bottom: 0,
        marginTop: 10,
        opacity: 0.9,
    },
    imageView: {
        flex: 2,
        height: 150,
        width: responsiveScreenWidth(100),
        alignItems: 'center',
        marginBottom: 10,
    },
    quizzesView: {
        flex: 4,
        marginTop: 100,
        width: responsiveScreenWidth(100),
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 10,
    }
});

export default HomeScreen;