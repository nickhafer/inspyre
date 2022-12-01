import { Text, View, StyleSheet, SafeAreaView, FlatList, StatusBar, Pressable, Image} from 'react-native';
 import { NavigationContainer, useNavigation } from '@react-navigation/native';
 import { Ionicons } from '@expo/vector-icons';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import MessageScreen from './MessageScreen';
 import CommunitiesScreen from './CommunitiesScreen';
 import { useFonts } from 'expo-font';


 export default function RenderFeedItem ({ title, username, image, profilePic, location, distance }) {
    const navigation = useNavigation();

    const [loaded] = useFonts({
        InterBlack: require('./assets/Fonts/Inter-Black.ttf'),
        InterBold: require('./assets/Fonts/Inter-Bold.ttf'),
        InterMedium: require('./assets/Fonts/Inter-Medium.ttf'),
        InterSemiBold: require('./assets/Fonts/Inter-SemiBold.ttf'),
        InterRegular: require('./assets/Fonts/Inter-Regular.ttf'),
        InterLight: require('./assets/Fonts/Inter-Light.ttf'),
      });
    
      if (!loaded) {
        return null;
      }

     return(
        <View style={styles.item}>
            <View style={styles.postHeader}>
                <Image 
                    source={{
                        uri: profilePic,
                    }}
                    style={styles.profilePic}
                />
                <View style={styles.nameRating}>
                <Text style={styles.username}> {username} </Text>
                <Image 
                    source={require('./assets/Images/rating-green.png')}
                    style={styles.rating}
                />
                </View>
            </View>
            <Image
                source={{
                    uri: image,
                }}
                style={styles.objectImage}
            />
            <View style={styles.bottomContainer}>
                <View style={styles.textHalf}>
                    <Text style={styles.title}>{title}</Text>
                    <View style={styles.locationLine}>
                        <Image
                            style={styles.pin}
                            source={require('./assets/Icons/pin.png')}
                        />
                        <Text style={styles.location}>{location}</Text>
                    </View>
                    <Text style={styles.distance}>{distance}</Text>
                </View>


                <View style={styles.iconsHalf}>
                    
                    <Pressable 
                        //INSERT LIKE FUNCTIONALITY
                        >
                        <View style={styles.iconContainer}>
                            <Image
                                source={require('./assets/Icons/like-gray.png')}
                                style={styles.like} 
                            />
                        </View>
                    </Pressable>
                    <Pressable 
                        onPress={() => navigation.navigate('Chat')}
                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed
                                ? 'rgb(210, 230, 255)'
                                : 'white'
                            },
                            styles.wrapperCustom
                        ]}>
                        <View style={styles.iconContainer}>
                            <Image
                                source={require('./assets/Icons/chat-gray.png')}
                                style={styles.chat} 
                            />
                        </View>
                    </Pressable>
                </View>
                </View>
        </View>
     );
 };

   const styles = StyleSheet.create({
    screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    },
    screenText: {
        fontSize: 32,
    },
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: 'white',
    },
    title: {
        fontSize: 32,
        fontFamily: 'InterBlack',
        textAlign: 'left',
    },
    location: {
        fontSize: 24,
        fontFamily: 'InterSemiBold',
    },
    distance: {
        fontSize: 16,
        fontFamily: 'InterRegular',
    },
    username: {
        fontSize: 24,
        padding: 8,
        fontFamily: 'InterBlack',
    },
    inpsyreHeader: {
        width: '100%',
        height: '50%',
    },
    wrapperCustom: {
        borderRadius: 8,
        padding: 6
    },
    inspyreIcon: {
        width: '50%',
        height:'100%',
        resizeMode: 'contain',
        alignContent: 'center',
        justifyContent: 'space-between',
      },
      HeaderView: {
        backgroundColor: 'white',
        height: '8%',
        borderRadius:7,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 5,
        paddingLeft: 5,
        paddingTop: 0,
        marginBottom:10,
      },
      SearchIcon: {
        
      },
      SearchIconImage: {
        width: 50,
        height: '100%',
      },
    profilePic: {
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    rating: {
        width: 150,
        resizeMode: 'contain',
    },
    nameRating: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
    },
    objectImage: {
        width: '100%',
        resizeMode: 'stretch',
        height: 400,
    },
    postHeader: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 8,
        height: '10%',
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 8,
    },
    chat: {
        width: 64,
        height: 64,
    },
    like: {
        width: 64,
        height: 64,
    },
    textHalf: {
        margin: '2%',
        width: '60%',
    },
    iconsHalf: {
        margin: '2%',
        width: '32%',
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    iconContainer: {
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    pin: {
        height: 24,
        width: 24,
        marginRight: 4,
    },
    locationLine: {
        flexDirection: 'row',
    },
});