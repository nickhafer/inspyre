import { Text, View, StyleSheet, SafeAreaView, FlatList, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { useFonts } from 'expo-font';


export default function ProfileScreen() {

    const [loaded] = useFonts({
        InterBlack: require('./assets/Fonts/Inter-Black.ttf'),
        InterExtraBold: require('./assets/Fonts/Inter-ExtraBold.ttf'),
        InterBold: require('./assets/Fonts/Inter-Bold.ttf'),
        InterMedium: require('./assets/Fonts/Inter-Medium.ttf'),
        InterSemiBold: require('./assets/Fonts/Inter-SemiBold.ttf'),
        InterRegular: require('./assets/Fonts/Inter-Regular.ttf'),
        InterLight: require('./assets/Fonts/Inter-Light.ttf'),
      });    

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
                source={{ uri: item.image, }}
                style={styles.objectImage}
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
            <View style={styles.bioSection}> 
                <Text style={styles.bio}>Stanford undegrad clearing out my dorm room hoping to help out some artists</Text>
                <Pressable>
                    <Image 
                        // Edit Profile Pic
                        style={styles.editProfile}
                        // source={require()}
                    />
                </Pressable>
            </View>
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
        width: 150,
        height: 150,
        borderRadius: 75,
    }, 
    profileHeader: {
        flexDirection: 'row', 
        justifyContent: 'space-between',   
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
        fontFamily: 'InterExtraBold',
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
    objectImage: {
        width: 200,
        height: 200,
    },
});