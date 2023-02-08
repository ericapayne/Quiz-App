import React, {useEffect, useState} from "react";
import { FlatList, SafeAreaView, ScrollView, StatusBar, TouchableOpacity, View, Text, StyleSheet } from "react-native";

import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
  } from "react-native-responsive-dimensions";




const Quiz = props => {

    const [count, setCount] = useState(0);
    const [score, setScore] = useState(0);
    
    const [quizTest, setQuizTest] = useState([

        {"question":"In Dragon Ball Z, who was the first character to go Super Saiyan 2?","correct_answer":"Gohan","incorrect_answers":["Goku","Vegeta","Trunks"]},{"category":"Entertainment: Japanese Anime & Manga","type":"multiple","difficulty":"hard","question":"In Highschool of the Dead, where did Komuro and Saeko establish to meet after the bus explosion?","correct_answer":"Eastern Police Station","incorrect_answers":["The Center Mall","Komuro's House","On The Main Bridge"]},{"category":"Entertainment: Japanese Anime & Manga","type":"multiple","difficulty":"easy","question":"The name of Junko Enoshima's imposter at the beginning of Danganronpa: Trigger Happy Havoc is?","correct_answer":"Mukuro Ikusaba","incorrect_answers":["Ryota Mitarai","Ultimate Imposter","Komaru Naegi"]},{"category":"Entertainment: Japanese Anime & Manga","type":"multiple","difficulty":"easy","question":"In the anime Noragami who is one of the main protagonists?","correct_answer":"Yukine","incorrect_answers":["Karuha","Mineha","Mayu"]},{"category":"Entertainment: Japanese Anime & Manga","type":"multiple","difficulty":"medium","question":"What is the name of the final villain in the manga series Bleach?","correct_answer":"Yhwach","incorrect_answers":["Juha Bach","Yuhabah","Juhabach"]},{"category":"Entertainment: Japanese Anime & Manga","type":"multiple","difficulty":"medium","question":"Who voices the character Reigen  in the English dub of Mob Psycho 100?","correct_answer":"Chris Niosi","incorrect_answers":["Max Mittelman","Kyle McCarley","Casey Mongillo"]},{"category":"Entertainment: Japanese Anime & Manga","type":"multiple","difficulty":"hard","question":"Which animation studio produced Log Horizon","correct_answer":"Satelite","incorrect_answers":["Sunrise","Xebec","Production I.G"]},{"category":"Entertainment: Japanese Anime & Manga","type":"multiple","difficulty":"medium","question":"What studio animated Ouran High School Host Club?","correct_answer":"Bones","incorrect_answers":["Production I.G","Kyoto Animation","xebec"]},{"category":"Entertainment: Japanese Anime & Manga","type":"multiple","difficulty":"medium","question":"Which of the following films was NOT directed by Hayao Miyazaki?","correct_answer":"Wolf Children","incorrect_answers":["Princess Mononoke","Spirited Away","Kiki's Delivery Service"]},{"category":"Entertainment: Japanese Anime & Manga","type":"multiple","difficulty":"medium","question":"Which JoJo's Bizarre Adventure character possesses the Stand named Silver Chariot?","correct_answer":"Jean Pierre Polnareff","incorrect_answers":["Noriaki Kakyoin","Hol Horse","Hermes Costello"]}

    ]);

   
     //         const [questions, setQuestions] = useState();
   
    //     const getQuiz = async (category) => {
       
    //         const responceQuiz = await fetch('https://opentdb.com/api.php?amount=10&category='+ category +'&type=multiple');
    //         const search = await responceQuiz.json();
    //         setQuiz(category.results);
    //         setQuestions(search.results.question);          
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
            </ScrollView>
        </View>
{/* <FlatList
    data = {quiz}
    renderItem = {renderQuiz}
    keyExtractor={(item,index) => index.toString()}
    
    />
    {console.log.quiz} */}
    
{/* <View>
                <Text>hey</Text>
                {console.log("dsajdkas")}
              </View> */}

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