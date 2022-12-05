/*  CS 147 Final Project: inspyre
 *  Authors: Andrew Franks, Nick Hafer, Luc Alvarez
 *  CS 147 Autumn 2022
 */


import { StyleSheet, StatusBar, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CommunitiesStack from './ComumunitiesStack'
import ProfileScreen from './ProfileScreen';
import MessageStack from './MessageStack';
import HomeStack from './HomeStack';
import PostStack from './PostStack';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator style={styles.screenContainer}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
              // // return <Ionicons name={iconName} size={24} color="black" />;
              // iconName = focused ? 'like-gray.png' : 'like-red.png'
              // console.log(iconName)
              // return <Image resizeMode='cover' source={{uri: iconName}} />;
            } 
            else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Profile') {
              iconName = focused
                ? "person-circle"
                : 'person-circle-outline';
            }
            else if (route.name === 'Community') {
              iconName = focused
                ? 'people'
                : 'people-outline';
            } 
            else if (route.name === 'Post') {
              iconName = focused
                ? 'add-circle'
                : 'add-circle-outline';
            } 
            else if (route.name === 'Chat') {
              iconName = focused
                ? 'paper-plane'
                : 'paper-plane-outline';
            }
            
            return <Ionicons name={iconName} size={24} color="black" />;
            // return <Image source={{ uri: iconName }}/>;
          }
        })}>
        <Tab.Screen name="Home" component={HomeStack} options={{headerShown: false, unmountOnBlur: true}}/>
        <Tab.Screen name="Community" component={CommunitiesStack} options={{headerShown: false, unmountOnBlur: true}}/>
        <Tab.Screen name="Post" component={PostStack} options={{headerShown: false, unmountOnBlur: true}}/> 
        <Tab.Screen name="Chat" component={MessageStack} options={{headerShown: false, unmountOnBlur: true}}/>
        <Tab.Screen name="Profile" component={ProfileScreen} options={{headerShown: false, unmountOnBlur: true}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  screenText: {
    fontSize: 32,
  },
  header: {
    backgroundColor: 'lightgreen',
    height: '7%',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  headerText: {
    alignItems: 'center',
   
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  username: {
    fontSize: 16,
  },
  SearchIconImage: {
    width: 64,
    height: '100%',
  },
});
