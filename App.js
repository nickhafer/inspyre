/*  CS 147 Final Project: inspyre
 *  Authors: Andrew Franks, Nick Hafer, Luc Alvarez
 *  CS 147 Autumn 2022
 */


import { Text, View, FlatList, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MessageScreen from './MessageScreen';


function HomeScreen() {
  const DATA = [
  {
    id: '1',
    title: 'First Item',
    item: 'broken chair',
    user: 'Nick',
    picture: 'image1',
    community: 'Stanford GSB',
    distance: '1.2 miles',
    rating: '5 stars',
    num_likes: 32,
    liked: false
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
  
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <SafeAreaView style={styles.container}>
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
            else if (route.name === 'Message') {
              iconName = focused
                ? 'paper-plane'
                : 'paper-plane-outline';
            }

            return <Ionicons name={iconName} size={24} color="black" />;
          }
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Community" component={CommunitiesScreen} />
        <Tab.Screen name="Post" component={PostScreen} /> 
        <Tab.Screen name="Message" component={MessageScreen}/>
        <Tab.Screen name="Profile" component={ProfileScreen} />
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
});
