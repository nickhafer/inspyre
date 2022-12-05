import { Text, View, StyleSheet, SafeAreaView, FlatList, StatusBar, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RenderFeedItem from './HomeFeedRender';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';



export default function HomeScreen() {

    const navigation = useNavigation();

    const HOME_SCREEN_DATA = [
        {
            id: '1',
            title: 'Broken Chair',
            username: 'Cody',
            image: 'https://www.goodshomedesign.com/wp-content/uploads/2021/11/old-new-chair-2.jpg',
            profilePic: 'https://static.wixstatic.com/media/557bf52ab26368a60e43a3f1bc2a05f1.jpg/v1/fill/w_640,h_558,fp_0.56_0.15,q_80,usm_0.66_1.00_0.01,enc_auto/557bf52ab26368a60e43a3f1bc2a05f1.jpg',
            location: 'Palo Alto, CA',
            distance: '1.2 miles',
            donated: '11',
            listings: '2',
            bio: 'this is a placeholder for a profile bio',
            givingAway: [
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
            ],
            art: [
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
            ],
        },
        {
            id: '2',
            title: 'Chair2',
            username: 'Jen',
            image: 'https://www.goodshomedesign.com/wp-content/uploads/2021/11/old-new-chair-2.jpg',
            profilePic: 'https://www.birmingham.ac.uk/Images/College-EPS-only/college/undergraduate/international/yangyi-shi-ee-student-2-compressed-Cropped-293x228.jpg',
            location: 'Menlo Park, CA',
            distance: '1.6 miles',
            donated: '11',
            listings: '2',
            bio: 'this is a placeholder for a profile bio',
            givingAway: [
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
            ],
            art: [
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
            ],
        },
        {
            id: '3',
            title: 'Old Water Bottle',
            username: 'Martina',
            image: 'https://www.goodshomedesign.com/wp-content/uploads/2021/11/old-new-chair-2.jpg',
            profilePic: 'https://www.highline.edu/wp-content/uploads/2014/11/tha-dah-hser-highline-college.jpg',
            location: 'Palo Alto, CA',
            distance: '1.2 miles',
            donated: '11',
            listings: '2',
            bio: 'this is a placeholder for a profile bio',
            givingAway: [
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
            ],
            art: [
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
            ],
        },
        {
            id: '4',
            title: 'Another Chair',
            username: 'Amy',
            image: 'https://www.goodshomedesign.com/wp-content/uploads/2021/11/old-new-chair-2.jpg',
            profilePic: 'https://images.squarespace-cdn.com/content/v1/58febac49f7456d3c6db76d2/1540838397271-DA3L16U7L6MLRG3XFGTV/KatherinexTA-16.jpg?format=1000w',
            location: 'Stanford, CA',
            distance: '0.7 miles',
            donated: '11',
            listings: '2',
            bio: 'this is a placeholder for a profile bio',
            givingAway: [
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
            ],
            art: [
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
            ],
        },
    ];

    const renderItem = ({ item }) => (
        <RenderFeedItem
            item={item}
        />
    );
  
    return (
        <SafeAreaView style={styles.container}>
            <View style = {styles.HeaderView}>
                <Pressable style={styles.back} onPress={() => navigation.goBack()}>
                        <Image style={styles.back} source={require('./assets/Icons/back-gray.png')}/>
                        <Text>Home Feed</Text>
                    </Pressable>
                <Image
                    style = {styles.inspyreIcon}
                    source = {require('./FigmaIcons/Logo.png')}
                />
                <Pressable onPress={() => navigation.navigate('HomeSearchScreen')}>
                <Image
                    style = {styles.SearchIconImage}
                    source={require('./FigmaIcons/SearchButton.png')}>
                </Image>
                </Pressable>
            </View>
            <FlatList 
                data={HOME_SCREEN_DATA}
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
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'white',
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
        width: 64,
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