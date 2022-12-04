import { Text, View, StyleSheet, SafeAreaView, FlatList, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';


export default function ProfileScreen() {

    const PROFILE_SCREEN_DATA = [
        {
            id: '1',
            title: 'Broken Chair',
            image: 'https://www.goodshomedesign.com/wp-content/uploads/2021/11/old-new-chair-2.jpg',
            location: 'Palo Alto, CA',
            distance: '1.2 miles',
        },
        {
            id: '2',
            title: 'Used Towel',
            image: 'https://www.myfrugalhome.com/wp-content/uploads/2015/07/redyedtowels590.jpg',
            location: 'Palo Alto, CA',
            distance: '1.2 miles',
        },
        {
            id: '3',
            title: 'Water bottle',
            image: 'https://www.goodshomedesign.com/wp-content/uploads/2021/11/old-new-chair-2.jpg',
            location: 'Palo Alto, CA',
            distance: '1.2 miles',
        },
    ]

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            {console.log(item.image)}
            <Text>IMAGE NOT RENDERING PLZ FIX</Text>
            {/* I'm not sure why this image isn't rendering PLZ FIX */}
            <Image
                source={{ uri: item.image }}
                // style={styles.objectImage}
            />
            <View style={styles.bottomContainer}>
                <View style={styles.textHalf}>
                    <Text style={styles.title}>{item.title}</Text>
                    <View style={styles.locationLine}>
                        <Text style={styles.location}>{item.location}  </Text>
                        <Image
                            style={styles.pin}
                            source={require('./assets/Icons/pin.png')}
                        />
                    </View>
                    <Text style={styles.distance}>{item.distance}</Text>
                </View>
            </View>
        </View>
    );

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

            <FlatList 
                data={PROFILE_SCREEN_DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />

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