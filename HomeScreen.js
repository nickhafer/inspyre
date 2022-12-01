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
            image: 'https://www.goodshomedesign.com/wp-content/uploads/2021/11/old-new-chair-2.jpg',
            profilePic: 'https://images.squarespace-cdn.com/content/v1/58febac49f7456d3c6db76d2/1540838397271-DA3L16U7L6MLRG3XFGTV/KatherinexTA-16.jpg?format=1000w',
            location: 'Palo Alto, CA',
            distance: '1.2 miles',
            // rating: '5 stars',
            // num_likes: 32,
            // liked: false
        },
        {
            id: '2',
            title: 'Used Towel',
            username: 'Andrew',
            image: 'https://www.myfrugalhome.com/wp-content/uploads/2015/07/redyedtowels590.jpg',
            profilePic: 'https://images.squarespace-cdn.com/content/v1/58febac49f7456d3c6db76d2/1540838397271-DA3L16U7L6MLRG3XFGTV/KatherinexTA-16.jpg?format=1000w',
            location: 'Palo Alto, CA',
            distance: '1.6 miles',
            // rating: '5 stars',
            // num_likes: 32,
            // liked: false
        },
        {
            id: '3',
            title: 'Old Water Bottle',
            username: 'Luc',
            image: 'https://www.outfit4events.com/runtime/cache/images/redesignProductFull/mh-mi0801-001.jpg',
            profilePic: 'https://images.squarespace-cdn.com/content/v1/58febac49f7456d3c6db76d2/1540838397271-DA3L16U7L6MLRG3XFGTV/KatherinexTA-16.jpg?format=1000w',
            location: 'Palo Alto, CA',
            distance: '1.2 miles',
            // rating: '5 stars',
            // num_likes: 32,
            // liked: false
        },
        {
            id: '4',
            title: 'Old paintbrushes',
            username: 'Amy',
            image: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/old-paintbrushes-03-richard-nixon.jpg',
            profilePic: 'https://images.squarespace-cdn.com/content/v1/58febac49f7456d3c6db76d2/1540838397271-DA3L16U7L6MLRG3XFGTV/KatherinexTA-16.jpg?format=1000w',
            location: 'Stanford, CA',
            distance: '0.7 miles',
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
            distance={item.distance}
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