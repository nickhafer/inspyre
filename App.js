import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MessageScreen from './MessageScreen';
import PostScreen from './PostScreen';
import CommunitiesScreen from './CommunitiesScreen';
import ProfileScreen from './ProfileScreen';
import HomeScreen from './HomeScreen';

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
        <Tab.Screen name="Community" component={CommunitiesScreen} options={{headerShown: false}} />
        <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Tab.Screen name="Post" component={PostScreen} options={{headerShown: false}}/> 
        <Tab.Screen name="Message" component={MessageScreen} options={{headerShown: false}}/>
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
});
