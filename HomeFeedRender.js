import { Text, View, StyleSheet, SafeAreaView, FlatList, StatusBar, Pressable, Image} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MessageScreen from './MessageScreen';
import CommunitiesScreen from './CommunitiesScreen';


export default function RenderFeedItem ({ title, username, image }) {
    console.log(image)
    return(
    <View style={styles.item}>
        <View style={styles.postHeader}>
            <Image 
                source={require('./assets/Images/luc-profile-pic.jpeg')}
                style={styles.profilePic}
            />
            <Text style={styles.username}> {username} </Text>
            <Image 
                source={require('./assets/Images/rating-green.png')}
                style={styles.rating}
            />
        </View>
        <Image
            //source={require('./assets/Images/image1.png')}
            //source = {{uri: image}}
            source={{
                uri: image,
              }}
            //source = {require('image')}
            style={styles.objectImage}
        />
        <View style={styles.bottomContainer}>
        <View style={styles.textHalf}>
            <Text style={styles.title}> {title} </Text>
            <Text style={styles.location}> Palo Alto, CA </Text>
            <Text style={styles.distance}> 0.7mi away </Text>

        </View>
        <View style={styles.iconsHalf}>
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
            <View>
                <Ionicons name="paper-plane-outline" size={24} color="black" />
                <Text>Message</Text>
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
            <View>
                <Ionicons name="heart-outline" size={24} color="black" />
                <Text>Like</Text>
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
    //backgroundColor: 'black',
    },
    screenText: {
        fontSize: 32,
    },
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    location: {
        fontSize: 24,
    },
    distance: {
        fontSize: 16,
    },
    username: {
        fontSize: 24,
        padding: 8,
    },
    inpsyreHeader: {
        width: '100%',
        height: '50%',
        //backgroundColor: 'blue',

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
        marginLeft: 60,

    },
    objectImage: {
        width: '100%',
        resizeMode: 'stretch',
        height: 400,
        backgroundColor: 'red',
    },
    postHeader: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 12,
        height: '10%',
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    message: {

    },
    like: {

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
    }
});