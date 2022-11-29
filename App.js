import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenText}>Home!</Text>
    </View>
  );
}

function MessageScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenText}>Message!</Text>
    </View>
  );
}

function CommunitiesScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenText}>Communities!</Text>
    </View>
  );
}

function PostScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenText}>Post!</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenText}>Details!</Text>
    </View>
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
            else if (route.name === 'Communities') {
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
        <Tab.Screen name="Post" component={PostScreen} /> 
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Message" component={MessageScreen}/>
        <Tab.Screen name="Communities" component={CommunitiesScreen} />
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
