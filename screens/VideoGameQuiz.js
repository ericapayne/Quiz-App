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
{"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"Who is the creator of the Super Smash Bros. Series?","correct_answer":"Masahiro Sakurai","incorrect_answers":["Reggie Fils-Aime","Bill Trinen","Hideo Kojima"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"Which Game Boy from the Game Boy series of portable video game consoles was released first?","correct_answer":"Game Boy Color","incorrect_answers":["Game Boy Advance","Game Boy Micro","Game Boy Advance SP"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"In the game Nuclear Throne, what character is only usable in a play through with Melting?","correct_answer":"Skeleton","incorrect_answers":["Frog","Horror","Plant"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"How many flagship monsters appear in Monster Hunter Gernerations?","correct_answer":"4","incorrect_answers":["1","2","3"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"Which Sonic the Hedgehog game was originally supposed to be packaged with Sonic 3, but was cut in half due to time constraints?","correct_answer":"Sonic & Knuckles","incorrect_answers":["Sonic 2","Sonic CD","Sonic 3D Blast"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"What is the homeworld of the Elites from Halo?","correct_answer":"Sanghelios","incorrect_answers":["Te","Doisac","Eayn"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"Valve Corporation is an American video game developer located in which city?","correct_answer":"Bellevue, Washington","incorrect_answers":["Austin, Texas","Seattle, Washington","San Francisco, California"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"What game was used to advertise Steam?","correct_answer":"Counter-Strike 1.6","incorrect_answers":["Half-Life","Half-Life 2","Team Fortress"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"Which Call Of Duty: Zombies map introduced the Staffs Of The Ancients?","correct_answer":"Origins","incorrect_answers":["Shangri-La","Revelations","Nuketown"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"Which of the following weapons in Counter-Strike: Global Offensive does not have a right-click function?","correct_answer":"XM1014","incorrect_answers":["SG553","R8 Revolver","USP-S"]}

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
                <ScrollView>
                    <View style={styles.questionView}>
                        <Text style={styles.questionText}>
                            {quizTest[count].question}
                        </Text>
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