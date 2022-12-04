import { Text, View, StyleSheet, SafeAreaView, FlatList, StatusBar, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export default function PostScreen() {
    
    return (
        <SafeAreaView style={styles.screenContainer}>
            <Text style={styles.screenText}>Post!</Text>
        </SafeAreaView>
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