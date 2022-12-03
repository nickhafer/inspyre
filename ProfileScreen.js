import { Text, View, StyleSheet, SafeAreaView, FlatList, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';


export default function ProfileScreen() {
    return (
        <SafeAreaView style={styles.screenContainer}>
            <Image 
                style={styles.profilePic}
                source={require('./assets/Images/luc-profile-pic.jpeg')}
            />
            <Text>Username</Text>
            <Text>Location</Text>
            <Text>Num Donated</Text>
            <Text>Num Listings</Text>
            <Image 
                style={styles.rating}
                source={require('./assets/Images/rating-green.png')} 
            />
            <Text>BioDescription</Text>
            <Pressable>
                <Image 
                    // Edit Profile Pic
                    style={styles.editProfile}
                    // source={require()}
                />
            </Pressable>
            <Pressable>
                <Image 
                    // Giving Away Pic
                    style={styles.givingAway}
                    // source={require()}
                />
            </Pressable>
            <Pressable>
                <Image 
                    // Your Art Pic
                    style={styles.yourArt}
                    // source={require()}
                />
            </Pressable>

            {/* Conditional Flatlists will be here */}

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
    profilePic: {

    }, 
    rating: {

    },
    editProfile: {

    },
    givingAway: {

    },
    yourArt: {

    },
});