import { Text, View, StyleSheet, SafeAreaView, FlatList, StatusBar, Pressable, Image} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MessageScreen from './MessageScreen';
import CommunitiesScreen from './CommunitiesScreen';
import { useFonts } from 'expo-font';
import InterBlack from './assets/Fonts/Inter-Black.ttf'
import RenderFeedItem from './HomeFeedRender';


export default function HomeScreen() {

    const navigation = useNavigation();

    const DATA = [
        {
            id: '1',
            title: 'Broken Chair',
            username: 'Nick',
            image: 'https://i0.wp.com/www.supportyourtech.com/wp-content/uploads/2021/01/how-add-link-picture-google-docs-1.jpg?w=441&ssl=1',
            profilePic: 'luc-profile-pic',
            location: 'Palo Alto, CA',

            // community: 'Stanford GSB',
            // distance: '1.2 miles',
            // rating: '5 stars',
            // num_likes: 32,
            // liked: false
        },
        {
            id: '2',
            title: 'Used Towel',
            username: 'Andrew',
            image: './assets/Images/image2.png',
            location: 'Palo Alto, CA',
            // community: 'Stanford GSB',
            // distance: '1.2 miles',
            // rating: '5 stars',
            // num_likes: 32,
            // liked: false
        },
        {
            id: '3',
            title: 'Old Water Bottle',
            username: 'Luc',
            image: './assets/Images/image3.png',
            location: 'Palo Alto, CA',
            // community: 'Stanford GSB',
            // distance: '1.2 miles',
            // rating: '5 stars',
            // num_likes: 32,
            // liked: false
        },
    ];

    
    
    const renderItem = ({ item }) => (
        <RenderFeedItem
            title={item.title} 
            username={item.username}
            image={item.image}

            profilePic={item.profilePic}
            rating={item.rating}
            location={item.location}
        />
    );
  
    return (
      <SafeAreaView style={styles.container}>
        <View style = {styles.HeaderView}>
          <Image
            style = {styles.inspyreIcon}
            source = {require('./FigmaIcons/Logo.png')}
          />
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
                    <Image
                    style = {styles.SearchIconImage}
                    source={require('./FigmaIcons/SearchButton.png')}>
                    </Image>
                
            </Pressable>
          </View>
        <FlatList 
          data={DATA}
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
        backgroundColor: 'white',
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
    },
    locationLine: {
        flexDirection: 'row',
    },
});