import { Image, Text, View, StyleSheet, SafeAreaView, FlatList, StatusBar, TouchableHighlight, Pressable, Button, navigation } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CommunitiesScreen from './CommunitiesScreen';
import App from './App';
import IndividualMessage from './IndividualMessage';
import { createStackNavigator } from '@react-navigation/stack';

export default function DestinationScreen() {
    return (
        <View>
            <Text>
                Desination screen
            </Text>
        </View>
    )
}