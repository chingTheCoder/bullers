import React , { useEffect , useState } from "react"
import { View , FlatList ,SafeAreaView , Platform  } from 'react-native'
import Card from "../components/Card"
import { collection, query , getDocs , where } from 'firebase/firestore'
import { db } from '../config/firebase.js'
import Loading from "../components/Loading"
import Error from "../components/Error"
import GoToRules from "../components/GoToRules"




export default function HomeScreen ({ route , navigation }) {

    const [ tips , setTips ] = useState([])
    const [ loading , setLoading ] = useState(true)
    const [ error , setError ] = useState(false)

    useEffect(() => {

        let hoursPassed = new Date().getHours()
        let hoursPassedInSeconds = 3600000 * hoursPassed
        let midnight = Date.now() - hoursPassedInSeconds

        async function fetchTips () {

            try {
                let q = query(collection(db, 'tips'), where('createdAt', '>=', new Date(midnight)))
                const data = await getDocs(q)
                data.docs.map(doc => setTips( arr => [...arr, {id : doc.id , tip : doc.data()}]))
                setLoading(false)
            } catch (e) {
                console.log(e)
                setError(true)
            }
        }

        fetchTips()

    }, [])

    const renderItem = ( item ) => (
        <Card tip={item.item.tip}/>
    )

    return(
        <SafeAreaView style={{ paddingTop : Platform.OS === 'android' ? 25 : 0 }}>
                    {
                        loading ? <Loading/> :

                            <>
                            
                                {
                                
                                error ? <Error/> : 

                                    <>

                                        {

                                            tips.length === 0 ? <GoToRules navigation={navigation}/> :

                                            <FlatList
                                            style={{
                                                backgroundColor : '#131A21',
                                                height : '100%'
                                            }}

                                            data={tips}
                                            keyExtractor={ item => item.id }
                                            renderItem={renderItem}
                                            /> 

                                        }
                                    
                                    </>

                                }
                            </>

                    }
        </SafeAreaView>
    )
}



