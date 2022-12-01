import { Text, View, StyleSheet, SafeAreaView, FlatList, StatusBar, Pressable, Image} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MessageScreen from './MessageScreen';
import CommunitiesScreen from './CommunitiesScreen';





export default function HomeScreen() {

    const navigation = useNavigation();

    const DATA = [
        {
            id: '1',
            title: 'Broken Chair',
            username: 'Nick',
            image: 'image1',
            profilePic: 'luc-profile-pic',

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
            image: 'image2',
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
            image: 'image3',
            // community: 'Stanford GSB',
            // distance: '1.2 miles',
            // rating: '5 stars',
            // num_likes: 32,
            // liked: false
        },
    ];

    const Item = ({ title, username, image }) => (
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
                source={require('./assets/Images/image1.png')}
                style={styles.objectImage}
            />
            <View style={styles.textHalf}>
                
            </View>
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
    );

    // const Item = ({ title, username, image }) => (
    //     <View style={styles.item}>
    //         <Text style={styles.title}>{title}</Text>
    //         <Text style={styles.username}>{username}</Text>
    //         <Image
    //             source={require('./assets/Images/image1.png')}
    //             style={{ width: 200, height: 200 }}
    //         />
    //         <Pressable 
    //             onPress={() => navigation.navigate('Chat')}
    //             style={({ pressed }) => [
    //                 {
    //                     backgroundColor: pressed
    //                     ? 'rgb(210, 230, 255)'
    //                     : 'white'
    //                 },
    //                 styles.wrapperCustom
    //             ]}>
    //             <View>
    //                 <Ionicons name="paper-plane-outline" size={24} color="black" />
    //                 <Text>Message</Text>
    //             </View>
    //         </Pressable>
    //         <Pressable 
    //             onPress={() => navigation.navigate('Chat')}
    //             style={({ pressed }) => [
    //                 {
    //                     backgroundColor: pressed
    //                     ? 'rgb(210, 230, 255)'
    //                     : 'white'
    //                 },
    //                 styles.wrapperCustom
    //             ]}>
    //             <View>
    //                 <Ionicons name="heart-outline" size={24} color="black" />
    //                 <Text>Like</Text>
    //             </View>
    //         </Pressable>
    //     </View>
    // );
    
    const renderItem = ({ item }) => (
        <Item
            title={item.title} 
            username={item.username}
            image={item.image}

            profilePic={item.profilePic}
            rating={item.rating}
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
        backgroundColor: '#f9c2ff',
    },
    title: {
        fontSize: 32,
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
<<<<<<< HEAD
    inspyreIcon: {
        width: '50%',
        height:'100%',
        resizeMode: 'contain',
        alignContent: 'center',
        justifyContent: 'space-between',
      },
      HeaderView: {
        backgroundColor: 'white',
        height: '7%',
        borderRadius:7,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 10,
      },
      SearchIcon: {
        
      },
      SearchIconImage: {
        width: 40,
        height: '100%',

      },
=======
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
        height: '70%',
        backgroundColor: 'red',
    },
    postHeader: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    }
>>>>>>> 996c77a307aa94e47092e8505243a2f44aa694bd
});