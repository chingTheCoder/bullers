import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen'
import HistoryScreen from './screens/HistoryScreen';
import RulesScreen from './screens/RulesScreen';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
      <NavigationContainer>
          <Tab.Navigator

                screenOptions={() => ({
                  tabBarActiveTintColor: 'green',
                  tabBarInactiveTintColor: 'gray',
                  tabBarStyle : {
                    backgroundColor : '#131A21'
                  },
                  tabBarShowLabel : false
                })}
          
          >
              <Tab.Screen  
                  name='HomeScreen' 
                  component={HomeScreen}
                  options= {{ 
                    headerShown : false,
                    tabBarIcon : ({ color , size }) => (
                      <MaterialCommunityIcons name='fire' color={color} size={size}/>
                    )
                  }} 
                  />
              <Tab.Screen  
                  name='history' 
                  component={HistoryScreen}
                  options= {{ 
                    headerShown : false,
                    tabBarIcon : ({ color , size }) => (
                      <MaterialCommunityIcons name='draw-pen' color={color} size={size}/>
                    )
                  }} 
                  />
              <Tab.Screen  
                name='RulesScreen' 
                component={RulesScreen}
                options= {{ 
                  headerShown : false ,
                  tabBarIcon : ({ color , size }) => (
                    <MaterialCommunityIcons name='book' color={color} size={size}/>
                  )
                }} 
                />
          </Tab.Navigator>
      </NavigationContainer>
  );
}

