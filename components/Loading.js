import React  from "react"
import { View , Text } from 'react-native'


export default function Loading () {
    return(
        <View style={{
            height : '100%',
            backgroundColor : '#131A21',
            justifyContent : 'center',
            alignItems : 'center'
        }}>
            <Text style={{ color : 'green'}}>...Loading...</Text>
        </View>
    )
}