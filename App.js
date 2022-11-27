
// import { StyleSheet, Text, View, StatusBar } from 'react-native';
// import { useFonts } from 'expo-font';
// import { Themes } from './assets/Themes';

// export default function App() {
//   let [fontsLoaded] = useFonts({
//     Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
//     SydneyBold: require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
//   });
//   if (!fontsLoaded) return <AppLoading />;
//   /* ^Don't mind/edit the code above, it's there to load the font for you! */
//   StatusBar.setBarStyle(Themes.light.statusBar);
//   /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

//   /* insert your code here */

//   return (
//     <View style={styles.container}>
//       <Text
//         style={{
//           fontFamily: 'Sydney', // test to see if the font is loaded, feel free to remove this
//         }}>
//         This is the Insypre app. Check Plus Plus
//       </Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

import HomeStack from '__tests__/components';

export default function App() {
  const Tab = createBottomTabNavigator();

  const PinnedTab = () => (
    <View style={styles.container}>
      <Text>Pinned!</Text>
    </View>
  );

  const ProfileTab = () => (
    <View style={styles.container}>
      <Text>Profile!</Text>
    </View>
  );

  return (
<<<<<<< HEAD
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'safari'
            } else if (route.name === 'Pinned') {
              iconName = 'map-pin'
            } else if (route.name === 'Profile') {
              iconName = 'user'
            }

            // You can return any component that you like here!
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Pinned" component={PinnedTab} />
        <Tab.Screen name="Profile" component={ProfileTab} />
      </Tab.Navigator>
    </NavigationContainer>
=======
    <View style={styles.container}>
      <Text
        style={{
          fontFamily: 'Sydney', // test to see if the font is loaded, feel free to remove this
        }}>
        This is the Insypre app. Check Plus
      </Text>
    </View>
>>>>>>> parent of c39c561a (Update App.js)
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});