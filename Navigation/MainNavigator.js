import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';



import ComputerQuiz from '../screens/ComputerQuiz';
import AnimeQuiz from '../screens/AnimeQuiz';
import VideoGameQuiz from '../screens/VideoGameQuiz';
import HomeScreen from '../screens/HomeScreen';
import Results from '../screens/Results';

const Stack = createStackNavigator();

function HomeScreenStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen name ="Home" component={HomeScreen} />
            <Stack.Screen name ="Computer Quiz" component={ComputerQuiz} />
            <Stack.Screen name = "Anime Quiz" component={AnimeQuiz}/>
            <Stack.Screen name = "Video Game Quiz" component = {VideoGameQuiz}/>
            <Stack.Screen name ="Results" component={Results} />
        </Stack.Navigator>
    );
}

export {HomeScreenStack};