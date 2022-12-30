import React  from "react"
import { View , Text, TouchableHighlight } from 'react-native'


export default function GoToRules ({ navigation }) {
    const goRules = () => {
        navigation.navigate('RulesScreen')
    }
    return(
        <View style={{
            backgroundColor : '#131A21',
            height : '100%',
            justifyContent : 'center',
            alignItems : 'center',
            padding : 10
        }}>
            <View>
                <Text style={{ color : 'gray', textAlign : 'center'}}>
                    Soon we are Uploading Tips . Read On how to succesed in Betting
                    Win After Win 
                </Text>
                <TouchableHighlight onPress={goRules} style={{ marginTop : 10 , padding : 10}}>
                                    <Text
                    style={{
                        color : 'green',
                        textDecoration : 'underline',
                        fontSize : 20,
                        textAlign : 'center'
                    }}
                    >Antidote</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}