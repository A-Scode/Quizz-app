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
import { Button } from "react-native";
import { useNavigation } from '@react-navigation/native';

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


export default function Test({navigation , Score , handleScoreChange }){

    const {user} = useRoute().params;
    console.log(user)

    const {isLoading , data , error} = useQuery("questions" , ()=>fetch("https://opentdb.com/api.php?amount=10").then(res=>res.json()));
    
    // const {Score , handleScoreChange , user} = useRoute().params;

    useEffect( ()=>{console.log(data?.results)}, [data])

    const Stack = createStackNavigator();
    // const navigate = useNavigation();

    useEffect(()=>{console.log(Score)} , [Score])

    return (
        <ScrollView contentContainerStyle={styles.mainContainer}>
            <View ><Text style={{color:"black"}}>{JSON.stringify(Score,undefined,4)}</Text></View>
            <View style={styles.viewHeading}>
                <Text style={styles.textHeading}>{user==="user1"?"User 1":"User 2"}</Text>
            </View>
            <ScrollView  contentContainerStyle={{justifyContent: 'space-between',}} style={{gap:20 , flex:1}} >
            
            {
                !isLoading && data.results.map(
                    (item:any, index:any)=>(<Question key={index} Score={Score} handleScoreChange={handleScoreChange} user={user} question={item} />)
                    )
            }
            
            </ScrollView>
            <View>
                <Button 
                title="Submit and start User 2"
                onPress={()=>navigation.push("Test" , {
                    user:"user2"
                })}
                />
            </View>
        </ScrollView>
    )
}