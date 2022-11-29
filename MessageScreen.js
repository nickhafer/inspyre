import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';




export default function MessageScreen() {

  const messageListData = [
    {
      id: '1',
      name: 'Joe',
      //profile picture
    },
    {
      id: '3',
      name: 'Momma',
      //profile picture
    },

    {
      id: '2',
      name: 'Lisa',
      //profile picture
    },




  ]
    return (
      <View style={styles.screenContainer}>
        <Text style={styles.screenText}>Message!</Text>
      </View>
    );
  };


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