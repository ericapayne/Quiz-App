import React, {useEffect, useState} from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View ,TouchableOpacity, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
} from "react-native-responsive-dimensions";

const Results = props => {
    


    return(
        <SafeAreaView style={styles.container}>
            <View>
                <View style={styles.resultsView}>
                    <Image
                        style={styles.quizLogo}
                        source={require('../assets/images/quiz-results.png')}
                    />
                    <Text style={styles.resultsText}> Quiz Results: {props.route.params.score} out of 10</Text>
                </View>

                <View style={styles.tryAgain}>
                    <TouchableOpacity style={styles.startbtn} onPress ={() => {props.navigation.navigate('Home')}} >
                        <Image
                            style={styles.againLogo}
                            source={require('../assets/images/try-again.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        height: responsiveScreenHeight(100), // 50% of Screen height
        width: responsiveScreenWidth(100), // 50% of Screen width
        alignItems: "center",
        backgroundColor: '#8491ad',
    },
    resultsView: {
        flex: 1,
        alignItems: "center",
        width: responsiveScreenWidth(100), // 50% of Screen width
    },
    resultsText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#3539AD',
        marginTop: 5,
    },
    tryAgain: {
        flex: 2,
        alignItems: "center",
        justifyContent: 'center',
    },
    quizLogo: {
        marginTop: 20,
        height: 150,
        width: 260,
    },
    againLogo: {
        height: 50,
        width: 200,
    },

});

export default Results;