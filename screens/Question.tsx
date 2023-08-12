import { Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { styles } from './Test';
function Question({question}) {
  return (
    <View style={questionStyle.questionContainer}>
        <View >
            <Text style={questionStyle.questionText} >{question.question}</Text>
        </View>

    </View>
  )
}

const questionStyle = StyleSheet.create({
    questionContainer:{
        flex:1,
        gap:20,
        justifyContent:"center",
        backgroundColor:"yellow",
        padding:10
    },
    questionText:{
        fontSize:18,
        color:"black",
    }
})

export default Question
