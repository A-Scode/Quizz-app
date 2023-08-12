import { useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useQuery } from "react-query"
import { useRoute, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Question from "./question";

export const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        padding: 20,
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

    const Stack = createNativeStackNavigator();

    return (
        <ScrollView contentContainerStyle={styles.mainContainer}>
            <View style={styles.viewHeading}>
                <Text style={styles.textHeading}>User 1</Text>
            </View>
            <View style={{flex:1}}>
            
            {
                !isLoading && data.results.map((item, index)=>(<Question key={index} question={item} />))
            }
            
            </View>
        </ScrollView>
    )
}