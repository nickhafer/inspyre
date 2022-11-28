import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function SettingsScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenText}>Search!</Text>
    </View>
  );
}

function DetailsScreen() {
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
          labelStyle: { fontSize: 14 },
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            } else if (route.name === 'Details') {
              iconName = focused
                ? 'information-circle'
                : 'information-circle-outline';
            }

            return <Ionicons name={iconName} size={24} color="black" />;
          }
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Details" component={DetailsScreen} />
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
