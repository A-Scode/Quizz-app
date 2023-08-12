import { Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';
function Question({question}) {
  return (
    <View style={questionStyle.questionContainer}>
        <View style={{ backgroundColor:"green"}}>
            <Text style={{color:"black"}} >{question.question}</Text>
        </View>

    </View>
  )
}

const questionStyle = StyleSheet.create({
    questionContainer:{
        flex:1,
        backgroundColor:"yellow",
    }
})

export default Question
