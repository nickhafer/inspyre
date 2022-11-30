import { Image, Text, View, StyleSheet, SafeAreaView, FlatList, StatusBar, TouchableHighlight, Pressable, Button, navigation } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import CommunitiesScreen from './CommunitiesScreen';
import IndividualMessage from './IndividualMessage';

export default function DetailsScreen() {
    return (
        <View>
            <Text>
                Details screen
            </Text>
        </View>
    )
}