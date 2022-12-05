import { Text, View, StyleSheet, SafeAreaView, FlatList, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { useFonts } from 'expo-font';
import { useState } from 'react';


export default function ProfileScreen() {

    const [tab, setTab] = useState('givingAway')

    const [loaded] = useFonts({
        InterBlack: require('./assets/Fonts/Inter-Black.ttf'),
        InterExtraBold: require('./assets/Fonts/Inter-ExtraBold.ttf'),
        InterBold: require('./assets/Fonts/Inter-Bold.ttf'),
        InterMedium: require('./assets/Fonts/Inter-Medium.ttf'),
        InterSemiBold: require('./assets/Fonts/Inter-SemiBold.ttf'),
        InterRegular: require('./assets/Fonts/Inter-Regular.ttf'),
        InterLight: require('./assets/Fonts/Inter-Light.ttf'),
      });    

    const GIVING_AWAY_DATA = [
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

    const YOUR_ART_DATA = [
        {
            id: '2',
            title: 'Used Towel',
            image: 'https://www.myfrugalhome.com/wp-content/uploads/2015/07/redyedtowels590.jpg',
            location: 'Palo Alto, CA',
            distance: '1.2 miles',
        },
        {
            id: '1',
            title: 'Broken Chair',
            image: 'https://www.goodshomedesign.com/wp-content/uploads/2021/11/old-new-chair-2.jpg',
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

    const LIKED_ITEMS_DATA = [
        {
            id: '3',
            title: 'Water bottle',
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
            id: '1',
            title: 'Broken Chair',
            image: 'https://www.goodshomedesign.com/wp-content/uploads/2021/11/old-new-chair-2.jpg',
            location: 'Palo Alto, CA',
            distance: '1.2 miles',
        },
    ]

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Image
                source={{ uri: item.image, }}
                style={styles.objectImage}
            />
            <View style={styles.bottomContainer}>
                <View style={styles.textHalf}>
                    <Text style={styles.title}>{item.title}</Text>
                    <View style={styles.locationLine}>
                    <Image
                        style={styles.pin}
                        source={require('./assets/Icons/pin.png')}
                    />
                    <Text style={styles.location}>{item.location}  </Text>  
                    </View>
                    <Text style={styles.distance}>{item.distance}</Text>
                </View>
            </View>
        </View>
    );

    // Determine which flatlist to show:
    // givingAway, yourArt, likedItems
    let flatlist;
    if (tab === "givingAway") {
        flatlist = <FlatList 
                data={GIVING_AWAY_DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                />
    } else if (tab === "yourArt") {
        flatlist = <FlatList 
                data={YOUR_ART_DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                />
    } else {
        flatlist = <FlatList 
                data={LIKED_ITEMS_DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                />
    }

    return (
        <SafeAreaView style={styles.screenContainer}>
            {/* Header */}
            <View style={styles.profileHeader}>
                <Image 
                    style={styles.profilePic}
                    source={require('./assets/Images/luc-profile-pic.jpeg')}
                />
                <View style={styles.profileInfo}> 
                    <Text style={styles.username}>Luc</Text>
                    <Text style={styles.userLocation}>Stanford, CA</Text>
                    <View style={styles.exchangeInfo}>
                        <Text style={styles.number}>22 </Text>
                        <Text style={styles.word}>Donated    </Text>
                        <Text style={styles.number}>4 </Text>
                        <Text style={styles.word}>Listings</Text>
                    </View>
                    <Image 
                        style={styles.rating}
                        source={require('./assets/Images/rating-green.png')} 
                    />
                </View>
            </View>

            {/* Bio */}
            <View style={styles.bioSection}> 
                <Text style={styles.bio}>Stanford undegrad clearing out my dorm room hoping to help out some artists</Text>
                <Pressable>
                    <Text>Edit Profile</Text>
                    <Image 
                        // Edit Profile Pic
                        style={styles.editProfile}
                        // source={require()}
                    />
                </Pressable>
            </View>

            {/* Tabs */}
            <View>
                <Pressable
                    onPress={()=>setTab("givingAway")}
                >
                    <Text>Giving Away</Text>
                    <Image 
                        style={styles.givingAway}
                        source={require('./assets/Icons/giving-away-gray.png')}
                    />
                </Pressable>
                <Pressable
                    onPress={()=>setTab("yourArt")}
                >
                    <Text>Your Art</Text>
                    <Image 
                        // Your Art Pic
                        style={styles.yourArt}
                        // source={require()}
                    />
                </Pressable>
                <Pressable
                    onPress={()=>setTab("likedItems")}
                >
                    <Text>Liked Items</Text>
                    <Image 
                        // Your Art Pic
                        style={styles.likedItems}
                        // source={require()}
                    />
                </Pressable>
            </View>

            {/* Conditional Flatlist */}
            <View style={styles.bottomContainer}>
                {flatlist}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        width: '100%',
    },
    bottomContainer: {
        width: '100%',
        height: '60%',
    },
    screenText: {
        fontSize: 32,
    },
    profilePic: {
        width: 150,
        height: 150,
        borderRadius: 75,
    }, 
    profileHeader: {
        flexDirection: 'row', 
        justifyContent: 'space-between',   
        marginTop: 8,
    },
    profileInfo: {
        width: '50%',
        height: 150,
        marginHorizontal: '2%',
        justifyContent: 'space-between',
    },
    rating: {
        width: 200,
        resizeMode: 'contain',
    },
    username: {
        fontFamily: 'InterBlack',
        fontSize: 36,
    },
    userLocation: { 
        fontFamily: 'InterSemiBold',
        fontSize: 18,
    },
    exchangeInfo: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
    },
    number: {
        fontFamily: 'InterSemiBold',
        fontSize: 24,
    },
    word: {
        fontFamily: 'InterLight',
        fontSize: 16,
    },
    bioSection: {
        width: '90%',
        height: '10%',
        margin: 8,
    },
    bio: {
        fontFamily: 'InterRegular',
        fontSize: 16,
    },
    editProfile: {

    },
    givingAway: {

    },
    yourArt: {

    },
    likedItems: {

    },
    objectImage: {
        width: '100%',
        aspectRatio: 1,
    },
    title: {
        fontSize: 25,
        fontFamily: 'InterBlack',
        textAlign: 'left',
    },
    location: {
        fontSize: 20,
        fontFamily: 'InterSemiBold',
    },
    locationLine: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    pin: {
        height: 20,
        width: 20,
        marginRight: 4,
    },
    textHalf: {
        margin: '4%',
    },
});