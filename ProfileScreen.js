import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



export default function ProfileScreen() {
    return (
      <View style={styles.screenContainer}>
        <Text style={styles.screenText}>Details!</Text>
      </View>
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