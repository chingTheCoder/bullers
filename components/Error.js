import React  from "react"
import { View , Text } from 'react-native'


export default function Error () {
    return(
        <View style={{
            height : '100%',
            backgroundColor : '#131A21',
            justifyContent : 'center',
            alignItems : 'center'
        }}>
            <Text style={{ color : 'red'}}>Server Error!!!No internet Connection</Text>
        </View>
    )
}