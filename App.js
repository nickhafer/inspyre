/*  CS 147 Final Project: inspyre
 *  Authors: Andrew Franks, Nick Hafer, Luc Alvarez
 *  CS 147 Autumn 2022
 */


import { Text, View, FlatList, SafeAreaView, StyleSheet, StatusBar, Button, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MessageScreen from './MessageScreen';
<<<<<<< Updated upstream
import HomeScreen from './HomeScreen';
import CommunitiesScreen from './CommunitiesScreen';
import PostScreen from './PostScreen';
import ProfileScreen from './ProfileScreen';
=======


function HomeScreen() {
  const DATA = [
  {
    id: '1',
    title: 'First Item',
    item_name: 'broken chair',
    username: 'Nick',
    picture: 'image1',
    community: 'Stanford GSB',
    distance: '1.2 miles',
    rating: '5 stars',
    num_likes: 32,
    liked: false
  },
];

const Item = ({ title, username }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.username}>{username}</Text>
    <TouchableHighlight onPress={()=>{}}>
      <View>
        <Ionicons name="paper-plane-outline" size={24} color="black" />
        <Text>Message</Text>
      </View>
 </TouchableHighlight>
  </View>
);
  
  const renderItem = ({ item }) => (
    <Item 
    title={item.title} 
    username={item.username}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style = {styles.header}>
        <Text style = {styles.headerText}>Inspyre Header</Text>
      </View>
      <FlatList 
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

function CommunitiesScreen() {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <Text style={styles.screenText}>Communities!</Text>
    </SafeAreaView>
  );
}

function PostScreen() {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <Text style={styles.screenText}>Post!</Text>
    </SafeAreaView>
  );
}

function ProfileScreen() {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <Text style={styles.screenText}>Details!</Text>
    </SafeAreaView>
  );
}
>>>>>>> Stashed changes

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: { fontSize: 12 },
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
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
          }
        })}>
        <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Tab.Screen name="Community" component={CommunitiesScreen} options={{headerShown: false}}/>
        <Tab.Screen name="Post" component={PostScreen} options={{headerShown: false}}/> 
        <Tab.Screen name="Chat" component={MessageScreen} options={{headerShown: false}}/>
        <Tab.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
});
