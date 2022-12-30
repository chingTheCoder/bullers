import React  from "react"
import { View , Text , StyleSheet } from 'react-native'

export default function card ({ tip }) {
    return(
        <View style={styles.card}>
                    <View>
                        <Text style={{ 
                            backgroundColor : '#131A21',
                            color : 'gray' , marginBottom : 2 }}>
                            { tip.leagueName }
                        </Text>
                    </View>
                    <View style={styles.cardContent}>
                        <View style={{ flexDirection : 'row'}}>
                            <Text style={styles.TeamTextColor}>{tip.homeTeam}</Text>
                            <Text style={{ paddingHorizontal : 10, color : 'gray'}}>vs</Text>
                            <Text style={styles.TeamTextColor}>{tip.awayTeam}</Text>
                        </View>
                    </View>
                    <View><Text style={styles.cardTip}>{tip.tip}</Text></View>
                    <View><Text style={{ color : 'gray', textAlign : 'right', position : 'absolute', right : 0, bottom : 0 }}>{tip.time}</Text></View>
        </View>
    )
}

const styles = StyleSheet.create({
    card : {
        margin : 10,
        padding : 10,
        borderWidth : 1,
        borderColor : 'rgba(112, 112 , 112, 0.2)',
    },
    cardTime : {
        flex : 1 , 
        justifyContent : 'center' , 
        alignItems : 'center',
        backgroundColor : '#131A21' 
    },
    cardContent : {
        flexDirection : 'row'
    },
    cardTip : {
        backgroundColor : '#131A21',
        color : 'green',
        paddingLeft : 0
    },
    TeamTextColor : {
        backgroundColor : '#131A21',
        color : 'gray',
        textAlign : 'center',
        marginVertical : 2
    }
})