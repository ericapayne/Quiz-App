import React, {useEffect, useState} from "react";
import { FlatList, SafeAreaView, ScrollView, StatusBar, TouchableOpacity, View, Text, StyleSheet } from "react-native";

import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
  } from "react-native-responsive-dimensions";




const Quiz = props => {
    const [quiz, setQuiz] = useState([]);
    const [number, setNumber] = useState('');
    const [question, setQuestion] = useState('');

    const [count, setCount] = useState(0);
    const [score, setScore] = useState(0);
    
    const [quizTest, setQuizTest] = useState([
        {"question":"What does the 'MP' stand for in MP3?","correct_answer":"Moving Picture","incorrect_answers":["Music Player","Multi Pass","Micro Point"]},
        
        {"question":"According to the International System of Units, how many bytes are in a kilobyte of RAM?","correct_answer":"1000","incorrect_answers":["512","1024","500"]},
        
        {"question":"HTML is what type of language?","correct_answer":"Markup Language","incorrect_answers":["Macro Language","Programming Language","Scripting Language"]},
        
        {"question":"What does the Prt Sc button do?","correct_answer":"Captures what&#039;s on the screen and copies it to your clipboard","incorrect_answers":["Nothing","Saves a .png file of what's on the screen in your screenshots folder in photos","Closes all windows"]},
        
        {"question":"What is the most preferred image format used for logos in the Wikimedia database?","correct_answer":".svg","incorrect_answers":[".png",".jpeg",".gif"]},
        
        {"question":"What is the code name for the mobile operating system Android 7.0?","correct_answer":"Nougat","incorrect_answers":["Ice Cream Sandwich","Jelly Bean","Marshmallow"]},
        
        {"question":"How many values can a single byte represent?","correct_answer":"256","incorrect_answers":["8","1","1024"]},
        
        {"question":"How long is an IPv6 address?","correct_answer":"128 bits","incorrect_answers":["32 bits","64 bits","128 bytes"]},
        
        {"question":"In computing, what does MIDI stand for?","correct_answer":"Musical Instrument Digital Interface","incorrect_answers":["Musical Interface of Digital Instruments","Modular Interface of Digital Instruments","Musical Instrument Data Interface"]},
        
        {"question":"In computing, what does LAN stand for?","correct_answer":"Local Area Network","incorrect_answers":["Long Antenna Node","Light Access Node","Land Address Navigation"]}

    ]);

    
    
   
    //     const getQuiz = async (category) => {
    //         const responceQuiz = await fetch('https://opentdb.com/api.php?amount=10&category='+ category +'&type=multiple');
    //         const search = await responceQuiz.json();
    //         setQuiz(search.results);
    //         setQuestion(search.results.question);           
    //         console.log(quiz);
    //      }
    //      useEffect(() => { 
    //         getQuiz(props.route.params.category);           
    //     }, []);
    //   const renderQuiz = listItem => {
    //       return(
    //           <View><div>
    //               {listItem.item.question}</div>                 
    //           </View>
    //       );
    //   }

    

    return(
        <SafeAreaView style={styles.container}>
            
            <View>
                <View style={styles.questionView}>
                    <Text style={styles.questionText}>
                        {quizTest[count].question}
                    </Text>
                </View>

                <View style={styles.divider}></View>

           <ScrollView>
                <View style={styles.column}>
                    <TouchableOpacity style={styles.answerBtn} onPress ={() =>{
                        if(count < 9){
                        setCount(count+1);
                        }
                        else{
                            props.navigation.navigate('Results', { score: score});
                        }
                    }}>
                        <Text style={styles.answerBtnText}>{quizTest[count].incorrect_answers[0]}</Text>           
                    </TouchableOpacity>
                </View>

                <View style={styles.column}>
                    <TouchableOpacity style={styles.answerBtn} onPress ={() =>{
                        if(count < 9){
                            setCount(count+1);
                        }
                        else{
                            props.navigation.navigate('Results', { score: score});
                        }          
                    }}>
                        <Text style={styles.answerBtnText}>{quizTest[count].incorrect_answers[1]}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.column}>
                    <TouchableOpacity style={styles.answerBtn} onPress ={() =>{
                        if(count < 9){
                            setCount(count+1);
                            setScore(score+1);
                        }
                        else{
                            props.navigation.navigate('Results', { score: score});
                        }               
                    }}>
                        <Text style={styles.answerBtnText}>{quizTest[count].correct_answer}</Text> 
                    </TouchableOpacity>
                </View>

                <View style={styles.column}>
                    <TouchableOpacity style={styles.answerBtn} onPress ={() =>{
                        if(count < 9){
                            setCount(count+1);
                        }
                        else{
                            props.navigation.navigate('Results', { score: score});   
                        }               
                    }}>
                        <Text style={styles.answerBtnText}>{quizTest[count].incorrect_answers[2]}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
{/* <FlatList
    data = {quiz}
    renderItem = {renderQuiz}
    keyExtractor={(item,index) => index.toString()}
    
    />
    {console.log.quiz} */}
       </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        height: responsiveScreenHeight(80), // 50% of Screen height
        width: responsiveScreenWidth(100), // 50% of Screen width
        alignItems: "center",
        backgroundColor: '#8491ad',
    },
    questionView: {
        flex: 1,
        marginBottom: 150,
    },
    questionText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 15,
        marginRight: 15,
    },
    column: {
        alignItems: 'center',
        flexDirection: 'column',
        margin: 10,
    },
    answerBtn: {
        elevation: 8,
        marginTop: 20,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#174bbd',
        width: 300,
        flex: 2,
    },
    answerBtnText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    divider: {
        height: 30,
        backgroundColor: '#174bbd',
        opacity: 0.1,
    }
});

export default Quiz;