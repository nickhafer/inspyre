import { View, StyleSheet, SafeAreaView, FlatList, StatusBar, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RenderFeedItem from './HomeFeedRender';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import HomeSearchScreen from './HomeSearchScreen';


export default function HomeScreen() {

    const navigation = useNavigation();

    const HOME_SCREEN_DATA = [
        {
            id: '1',
            title: 'Worn Converse',
            username: 'Max',
            image: 'https://images.unsplash.com/photo-1597405490028-282bac40f64c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1646&q=80',
            profilePic: 'https://static.wixstatic.com/media/557bf52ab26368a60e43a3f1bc2a05f1.jpg/v1/fill/w_640,h_558,fp_0.56_0.15,q_80,usm_0.66_1.00_0.01,enc_auto/557bf52ab26368a60e43a3f1bc2a05f1.jpg',
            location: 'Palo Alto, CA',
            story: 'Some great converse that have certainly lasted me a while',
            exchangeDetails: 'Anyime around 6-8pm works for me!',
            distance: '1.2 miles',
            donated: '11',
            listings: '2',
            bio: 'Just a guy who\s trying to upcycle some of his goods!',
            rating: require('./assets/Icons/bigstars-yellow-37.png'),
            givingAway: [
                {
                    id: '1',
                    title: 'Worn Converse',
                    image: 'https://images.unsplash.com/photo-1597405490028-282bac40f64c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1646&q=80',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    username: 'Max',
                    profilePic: 'https://static.wixstatic.com/media/557bf52ab26368a60e43a3f1bc2a05f1.jpg/v1/fill/w_640,h_558,fp_0.56_0.15,q_80,usm_0.66_1.00_0.01,enc_auto/557bf52ab26368a60e43a3f1bc2a05f1.jpg',

                },
                {
                    id: '2',
                    title: 'Wooden Folding Chair',
                    image: 'https://st2.depositphotos.com/4341251/12431/i/600/depositphotos_124319510-stock-photo-wooden-chairs-with-old-plaster.jpg',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    username: 'Max',
                    profilePic: 'https://static.wixstatic.com/media/557bf52ab26368a60e43a3f1bc2a05f1.jpg/v1/fill/w_640,h_558,fp_0.56_0.15,q_80,usm_0.66_1.00_0.01,enc_auto/557bf52ab26368a60e43a3f1bc2a05f1.jpg',
                },
                {
                    id: '3',
                    title: 'Water bottle',
                    image: 'https://www.goodshomedesign.com/wp-content/uploads/2021/11/old-new-chair-2.jpg',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    username: 'Max',
                    profilePic: 'https://static.wixstatic.com/media/557bf52ab26368a60e43a3f1bc2a05f1.jpg/v1/fill/w_640,h_558,fp_0.56_0.15,q_80,usm_0.66_1.00_0.01,enc_auto/557bf52ab26368a60e43a3f1bc2a05f1.jpg',
                },
            ],
            art: [
                {
                    id: '2',
                    title: 'Used Towel',
                    image: 'https://www.myfrugalhome.com/wp-content/uploads/2015/07/redyedtowels590.jpg',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    username: 'Max',
                    profilePic: 'https://static.wixstatic.com/media/557bf52ab26368a60e43a3f1bc2a05f1.jpg/v1/fill/w_640,h_558,fp_0.56_0.15,q_80,usm_0.66_1.00_0.01,enc_auto/557bf52ab26368a60e43a3f1bc2a05f1.jpg',
                },
                {
                    id: '1',
                    title: 'Broken Chair',
                    image: 'https://www.goodshomedesign.com/wp-content/uploads/2021/11/old-new-chair-2.jpg',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    username: 'Max',
                    profilePic: 'https://static.wixstatic.com/media/557bf52ab26368a60e43a3f1bc2a05f1.jpg/v1/fill/w_640,h_558,fp_0.56_0.15,q_80,usm_0.66_1.00_0.01,enc_auto/557bf52ab26368a60e43a3f1bc2a05f1.jpg',
                },
                {
                    id: '3',
                    title: 'Water bottle',
                    image: 'https://www.goodshomedesign.com/wp-content/uploads/2021/11/old-new-chair-2.jpg',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    username: 'Max',
                    profilePic: 'https://static.wixstatic.com/media/557bf52ab26368a60e43a3f1bc2a05f1.jpg/v1/fill/w_640,h_558,fp_0.56_0.15,q_80,usm_0.66_1.00_0.01,enc_auto/557bf52ab26368a60e43a3f1bc2a05f1.jpg',
                },
            ],
        },
        {
            id: '2',
            title: 'Tea Kettle',
            username: 'Jen',
            image: 'https://images.unsplash.com/photo-1614628408704-7a3b0bc768a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80',
            profilePic: 'https://www.birmingham.ac.uk/Images/College-EPS-only/college/undergraduate/international/yangyi-shi-ee-student-2-compressed-Cropped-293x228.jpg',
            location: 'Menlo Park, CA',
            story: 'My great great grandmother made this and it has been in our family ever since!',
            exchangeDetails: 'I am in Menlo Park. Ideally, you are willing to come meet me in the Menlo Park/Palo Alto area.',
            distance: '1.6 miles',
            donated: '11',
            listings: '2',
            bio: 'this is a placeholder for a profile bio',
            rating: require('./assets/Icons/bigstars-yellow-40.png'),
            givingAway: [
                {
                    id: '1',
                    title: 'Broken Chair',
                    image: 'https://www.goodshomedesign.com/wp-content/uploads/2021/11/old-new-chair-2.jpg',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    username: 'Jen',
                    profilePic: 'https://www.birmingham.ac.uk/Images/College-EPS-only/college/undergraduate/international/yangyi-shi-ee-student-2-compressed-Cropped-293x228.jpg',
                },
                {
                    id: '2',
                    title: 'Used Towel',
                    image: 'https://www.myfrugalhome.com/wp-content/uploads/2015/07/redyedtowels590.jpg',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    username: 'Jen',
                    profilePic: 'https://www.birmingham.ac.uk/Images/College-EPS-only/college/undergraduate/international/yangyi-shi-ee-student-2-compressed-Cropped-293x228.jpg',
                },
                {
                    id: '3',
                    title: 'Water bottle',
                    image: 'https://www.goodshomedesign.com/wp-content/uploads/2021/11/old-new-chair-2.jpg',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    username: 'Jen',
                    profilePic: 'https://www.birmingham.ac.uk/Images/College-EPS-only/college/undergraduate/international/yangyi-shi-ee-student-2-compressed-Cropped-293x228.jpg',
                },
            ],
            art: [
                {
                    id: '2',
                    title: 'Used Towel',
                    image: 'https://www.myfrugalhome.com/wp-content/uploads/2015/07/redyedtowels590.jpg',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    username: 'Jen',
                    profilePic: 'https://www.birmingham.ac.uk/Images/College-EPS-only/college/undergraduate/international/yangyi-shi-ee-student-2-compressed-Cropped-293x228.jpg',
                },
                {
                    id: '1',
                    title: 'Broken Chair',
                    image: 'https://www.goodshomedesign.com/wp-content/uploads/2021/11/old-new-chair-2.jpg',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    username: 'Jen',
                    profilePic: 'https://www.birmingham.ac.uk/Images/College-EPS-only/college/undergraduate/international/yangyi-shi-ee-student-2-compressed-Cropped-293x228.jpg',
                },
                {
                    id: '3',
                    title: 'Water bottle',
                    image: 'https://www.goodshomedesign.com/wp-content/uploads/2021/11/old-new-chair-2.jpg',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    username: 'Jen',
                    profilePic: 'https://www.birmingham.ac.uk/Images/College-EPS-only/college/undergraduate/international/yangyi-shi-ee-student-2-compressed-Cropped-293x228.jpg',
                },
            ],
        },
        {
            id: '3',
            title: 'Old Water Bottle',
            username: 'Tia',
            image: 'https://i.etsystatic.com/13522559/r/il/ffa05d/3777517013/il_570xN.3777517013_6xjq.jpg',
            profilePic: 'https://www.highline.edu/wp-content/uploads/2014/11/tha-dah-hser-highline-college.jpg',
            location: 'Palo Alto, CA',
            story: 'a rustic looking water bottle i found on a trip to Rome',
            exchangeDetails: 'unemployed right now so pretty free whenever!',
            distance: '1.2 miles',
            donated: '11',
            listings: '2',
            bio: 'I love travelling and sharing my memorabilia with others!',
            rating: require('./assets/Icons/bigstars-yellow-25.png'),
            givingAway: [
                {
                    id: '1',
                    title: 'Broken Chair',
                    image: 'https://www.goodshomedesign.com/wp-content/uploads/2021/11/old-new-chair-2.jpg',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    username: 'Tia',
                    profilePic: 'https://www.highline.edu/wp-content/uploads/2014/11/tha-dah-hser-highline-college.jpg',
                },
                {
                    id: '2',
                    title: 'Used Towel',
                    image: 'https://www.myfrugalhome.com/wp-content/uploads/2015/07/redyedtowels590.jpg',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    username: 'Tia',
                    profilePic: 'https://www.highline.edu/wp-content/uploads/2014/11/tha-dah-hser-highline-college.jpg',
                },
                {
                    id: '3',
                    title: 'Water bottle',
                    image: 'https://www.goodshomedesign.com/wp-content/uploads/2021/11/old-new-chair-2.jpg',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    username: 'Tia',
                    profilePic: 'https://www.highline.edu/wp-content/uploads/2014/11/tha-dah-hser-highline-college.jpg',
                },
            ],
            art: [
                {
                    id: '2',
                    title: 'Used Towel',
                    image: 'https://www.myfrugalhome.com/wp-content/uploads/2015/07/redyedtowels590.jpg',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    username: 'Tia',
                    profilePic: 'https://www.highline.edu/wp-content/uploads/2014/11/tha-dah-hser-highline-college.jpg',
                },
                {
                    id: '1',
                    title: 'Broken Chair',
                    image: 'https://www.goodshomedesign.com/wp-content/uploads/2021/11/old-new-chair-2.jpg',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    username: 'Tia',
                    profilePic: 'https://www.highline.edu/wp-content/uploads/2014/11/tha-dah-hser-highline-college.jpg',
                },
                {
                    id: '3',
                    title: 'Water bottle',
                    image: 'https://www.goodshomedesign.com/wp-content/uploads/2021/11/old-new-chair-2.jpg',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    username: 'Tia',
                    profilePic: 'https://www.highline.edu/wp-content/uploads/2014/11/tha-dah-hser-highline-college.jpg',
                },
            ],
        },
        {
            id: '4',
            title: 'Paintbrushes',
            username: 'Amy',
            image: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/old-paintbrushes-03-richard-nixon.jpg',
            profilePic: 'https://images.squarespace-cdn.com/content/v1/58febac49f7456d3c6db76d2/1540838397271-DA3L16U7L6MLRG3XFGTV/KatherinexTA-16.jpg?format=1000w',
            location: 'Stanford, CA',
            story: 'I used these paint brushes for my final capstone project for the Design major. I ended up getting an A+, must be good luck in them!',
            exchangeDetails: 'I\'m usually free in the evenings after work!',
            distance: '0.7 miles',
            donated: '11',
            listings: '2',
            bio: 'this is a placeholder for a profile bio',
            rating: require('./assets/Icons/bigstars-yellow-50.png'),
            givingAway: [
                {
                    id: '1',
                    title: 'Broken Chair',
                    image: 'https://www.goodshomedesign.com/wp-content/uploads/2021/11/old-new-chair-2.jpg',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    username: 'Amy',
                    profilePic: 'https://images.squarespace-cdn.com/content/v1/58febac49f7456d3c6db76d2/1540838397271-DA3L16U7L6MLRG3XFGTV/KatherinexTA-16.jpg?format=1000w',
                },
                {
                    id: '2',
                    title: 'Used Towel',
                    image: 'https://www.myfrugalhome.com/wp-content/uploads/2015/07/redyedtowels590.jpg',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    username: 'Amy',
                    profilePic: 'https://images.squarespace-cdn.com/content/v1/58febac49f7456d3c6db76d2/1540838397271-DA3L16U7L6MLRG3XFGTV/KatherinexTA-16.jpg?format=1000w',
                },
                {
                    id: '3',
                    title: 'Water bottle',
                    image: 'https://www.goodshomedesign.com/wp-content/uploads/2021/11/old-new-chair-2.jpg',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    username: 'Amy',
                    profilePic: 'https://images.squarespace-cdn.com/content/v1/58febac49f7456d3c6db76d2/1540838397271-DA3L16U7L6MLRG3XFGTV/KatherinexTA-16.jpg?format=1000w',
                },
            ],
            art: [
                {
                    id: '2',
                    title: 'Used Towel',
                    image: 'https://www.myfrugalhome.com/wp-content/uploads/2015/07/redyedtowels590.jpg',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    username: 'Amy',
                    profilePic: 'https://images.squarespace-cdn.com/content/v1/58febac49f7456d3c6db76d2/1540838397271-DA3L16U7L6MLRG3XFGTV/KatherinexTA-16.jpg?format=1000w',
                },
                {
                    id: '1',
                    title: 'Broken Chair',
                    image: 'https://www.goodshomedesign.com/wp-content/uploads/2021/11/old-new-chair-2.jpg',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    username: 'Amy',
                    profilePic: 'https://images.squarespace-cdn.com/content/v1/58febac49f7456d3c6db76d2/1540838397271-DA3L16U7L6MLRG3XFGTV/KatherinexTA-16.jpg?format=1000w',
                },
                {
                    id: '3',
                    title: 'Water bottle',
                    image: 'https://www.goodshomedesign.com/wp-content/uploads/2021/11/old-new-chair-2.jpg',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    username: 'Amy',
                    profilePic: 'https://images.squarespace-cdn.com/content/v1/58febac49f7456d3c6db76d2/1540838397271-DA3L16U7L6MLRG3XFGTV/KatherinexTA-16.jpg?format=1000w',
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
                <Image
                    style = {styles.inspyreIcon}
                    source = {require('./FigmaIcons/Logo.png')}
                />
                <Pressable onPress={() => navigation.navigate('HomeSearchScreen')}>
                <Image
                    style = {styles.SearchIconImage}
                    source={require('./assets/Icons/search-gray.png')}>
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
        marginRight: 8,
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