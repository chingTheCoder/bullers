import React  from "react"
import { View , Text , SafeAreaView , StyleSheet} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function RulesScreen () {
    return(
       
        <SafeAreaView style={{ paddingTop : Platform.OS === 'android' ? 25 : 0 }}>
                 <View style={{
                    backgroundColor : '#131A21', height : '100%', padding : 10
                  }}>
                   
                        <View style={{ flexDirection : 'row' , borderBottomWidth : 1 , borderColor : 'rgba(110, 110, 110, .2)', paddingBottom : 10}}>
                            <Text
                                style={{
                                    color : 'gray',
                                    fontSize : 30
                                }}
                            >RULES TO </Text>
                            <MaterialIcons 
                                style={{ paddingTop : 6}}
                            name='attach-money' color='green' size={30}/>
                        </View>

                        <View style={{ padding : 10 }}>
                            <View style={styles.listContainer}>
                                <FontAwesome name={'money'} size={20} color={'green'}/>
                                <Text style={styles.listText}>Have a Budget Don't exceed</Text>
                            </View>
                            <View style={styles.listContainer}>
                                <FontAwesome name={'money'} size={20} color={'green'}/>
                                <Text style={styles.listText}>Have a Betting Strategy</Text>
                            </View>
                            <View style={styles.listContainer}>
                                <FontAwesome name={'money'} size={20} color={'green'}/>
                                <Text style={styles.listText}>Discpline, Be Patient</Text>
                            </View>
                            <View style={styles.listContainer}>
                                <FontAwesome name={'money'} size={20} color={'green'}/>
                                <Text style={styles.listText}>Low Bets low Risk </Text>
                            </View>
                            <View style={styles.listContainer}>
                                <FontAwesome name={'money'} size={20} color={'green'}/>
                                <Text style={styles.listText}>Bet On Value Bets Odds Over 2.0</Text>
                            </View>
                        </View>
                    </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    listContainer : {
        flexDirection : 'row',
        marginBottom : 10
    },
    list : {},
    listText : {
        color : 'gray',
        marginLeft : 10,
        fontSize : 16
    }
})