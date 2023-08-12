import { useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useQuery } from "react-query"
import { useRoute, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Question from "./Question";
import { createStackNavigator } from "@react-navigation/stack";
import {GestureHandlerRootView} from 'react-native-gesture-handler'

export const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        padding: 10,
        gap: 20,
    },
    text:{
        color:"black"
    },
    textHeading:{
        fontSize:30,
        color:"black",
        fontWeight:"600",
        textAlign:"center"
    },
    viewHeading:{
        justifyContent:"center",
    }
})


export default function Test(){

    const {isLoading , data , error} = useQuery("questions" , ()=>fetch("https://opentdb.com/api.php?amount=5").then(res=>res.json()));
    
    const {Score , handleScoreChange} = useRoute().params;

    const Stack = createStackNavigator();

    return (
        <ScrollView contentContainerStyle={styles.mainContainer}>
            <View style={styles.viewHeading}>
                <Text style={styles.textHeading}>User 1</Text>
            </View>
            <ScrollView style={{gap:20 , flex:1}} >
            
            {
                !isLoading && data.results.map((item, index)=>(<Question key={index} question={item} />))
            }
            
            </ScrollView>
        </ScrollView>
    )
}