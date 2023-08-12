/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React, { useMemo, useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native';
import Test from './screens/Test';
import TieBreaker from './screens/TieBreaker';
import { QueryClientProvider, QueryClient, useQuery } from 'react-query';


const Stack = createNativeStackNavigator();
const queryClient = new QueryClient;

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';


  const [Score , setScore] = useState({
    user1:{
      complete:false,
      questions:[],
      correct:0,
      incorrect : 0,
      score : 0,
    },
    user2:{
      complete:false,
      questions:[],
      correct:0,
      incorrect : 0,
      score : 0,
    },
  })

  function handleScoreChange(score:any){
    setScore(score);
  }



  return (

    <QueryClientProvider client={queryClient}>
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerStyle:{
          backgroundColor:Colors.dark,
        }, headerTitleStyle:{color:Colors.white,}}} >
          <Stack.Screen name="Test"  component={Test} initialParams={{handleScoreChange , Score}} />
          <Stack.Screen name="Tie Breaker"  component={TieBreaker}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
    </QueryClientProvider>
  );
}



export default App;
