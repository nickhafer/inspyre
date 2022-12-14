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
            exchangeDetails: 'Anytime around 6-8pm works for me!',
            distance: '1.2 miles',
            donated: '11',
            listings: '2',
            bio: 'Just a guy who\s trying to upcycle some of his goods!',
            rating: require('./assets/Icons/bigstars-yellow-37.png'),
            givingAway: [
                {
                    id: '1',
                    title: 'Worn Converse',
                    story: 'Some great converse that have certainly lasted me a while',
                    exchangeDetails: 'Anytime around 6-8pm works for me!',
                    image: 'https://images.unsplash.com/photo-1597405490028-282bac40f64c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1646&q=80',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    username: 'Max',
                    rating: require('./assets/Icons/bigstars-yellow-37.png'),
                    profilePic: 'https://static.wixstatic.com/media/557bf52ab26368a60e43a3f1bc2a05f1.jpg/v1/fill/w_640,h_558,fp_0.56_0.15,q_80,usm_0.66_1.00_0.01,enc_auto/557bf52ab26368a60e43a3f1bc2a05f1.jpg',

                },
                {
                    id: '2',
                    title: 'Wooden Folding Chair',
                    story: 'My grandmother\'s favorite folding chair',
                    exchangeDetails: 'Anytime around 6-8pm works for me!',
                    image: 'https://st2.depositphotos.com/4341251/12431/i/600/depositphotos_124319510-stock-photo-wooden-chairs-with-old-plaster.jpg',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    username: 'Max',
                    rating: require('./assets/Icons/bigstars-yellow-37.png'),
                    profilePic: 'https://static.wixstatic.com/media/557bf52ab26368a60e43a3f1bc2a05f1.jpg/v1/fill/w_640,h_558,fp_0.56_0.15,q_80,usm_0.66_1.00_0.01,enc_auto/557bf52ab26368a60e43a3f1bc2a05f1.jpg',
                },
                {
                    id: '3',
                    story: 'just some of my stuffed animals i shared with my sister growing up',
                    exchangeDetails: 'Anytime around 6-8pm works for me!',
                    title: 'Stuffed animals',
                    image: 'https://images.unsplash.com/photo-1597939318338-f712e0604c18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHRveXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=900&q=60',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    username: 'Max',
                    rating: require('./assets/Icons/bigstars-yellow-37.png'),
                    profilePic: 'https://static.wixstatic.com/media/557bf52ab26368a60e43a3f1bc2a05f1.jpg/v1/fill/w_640,h_558,fp_0.56_0.15,q_80,usm_0.66_1.00_0.01,enc_auto/557bf52ab26368a60e43a3f1bc2a05f1.jpg',
                },
            ],
            art: [
                {
                    id: '2',
                    title: 'Upcycled Dog',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ9wbz8m7gcp5917VaLJ5XKn5eJTA2LHcy9Q&usqp=CAU',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    username: 'Max',
                    story: 'Inspired by my own dog, found all the materials on this app over the past two years.',
                    exchangeDetails: 'Not for sale',
                    rating: require('./assets/Icons/bigstars-yellow-37.png'),
                    profilePic: 'https://static.wixstatic.com/media/557bf52ab26368a60e43a3f1bc2a05f1.jpg/v1/fill/w_640,h_558,fp_0.56_0.15,q_80,usm_0.66_1.00_0.01,enc_auto/557bf52ab26368a60e43a3f1bc2a05f1.jpg',
                },
                {
                    id: '1',
                    title: 'Tile Globe',
                    image: 'https://artincontext.org/wp-content/uploads/2022/02/Recycled-Art.jpg',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    username: 'Max',
                    rating: require('./assets/Icons/bigstars-yellow-37.png'),
                    story: 'Found all of these tiles over the past two years, but them together last month!',
                    exchangeDetails: 'Not for sale',
                    profilePic: 'https://static.wixstatic.com/media/557bf52ab26368a60e43a3f1bc2a05f1.jpg/v1/fill/w_640,h_558,fp_0.56_0.15,q_80,usm_0.66_1.00_0.01,enc_auto/557bf52ab26368a60e43a3f1bc2a05f1.jpg',
                },
                {
                    id: '3',
                    title: 'Dog from Buttons',
                    image: 'https://i.pinimg.com/originals/da/04/bc/da04bc50265538803e0157cf3f8173d8.jpg',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    username: 'Max',
                    rating: require('./assets/Icons/bigstars-yellow-37.png'),
                    story: 'I had been casually collecting buttons! Decided to make something inspired by my dog',
                    exchangeDetails: 'Not for sale',
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
            bio: 'Student studying @ Stanford',
            rating: require('./assets/Icons/bigstars-yellow-40.png'),
            givingAway: [
                {
                    id: '1',
                    title: 'Tea Kettle',
                    image: 'https://images.unsplash.com/photo-1614628408704-7a3b0bc768a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80',
                    location: 'Menlo Park, CA',
                    story: 'My great great grandmother made this and it has been in our family ever since!',
                    exchangeDetails: 'I am in Menlo Park. Ideally, you are willing to come meet me in the Menlo Park/Palo Alto area.',
                    distance: '1.6 miles',
                    donated: '11',
                    listings: '2',
                    username: 'Jen',
                    rating: require('./assets/Icons/bigstars-yellow-40.png'),
                    profilePic: 'https://www.birmingham.ac.uk/Images/College-EPS-only/college/undergraduate/international/yangyi-shi-ee-student-2-compressed-Cropped-293x228.jpg',
                },
                {
                    id: '2',
                    title: 'Spin-3000 Chair',
                    image: 'https://st4.depositphotos.com/6711826/27298/i/600/depositphotos_272982938-stock-photo-black-office-chair-old-damage.jpg',
                    location: 'Menlo Park, CA',
                    story: 'This chair was in an earthquake! It makes the wear and tear more exciting.',
                    exchangeDetails: 'I am in Menlo Park. Ideally, you are willing to come meet me in the Menlo Park/Palo Alto area.',
                    distance: '1.6 miles',
                    donated: '11',
                    listings: '2',
                    rating: require('./assets/Icons/bigstars-yellow-40.png'),
                    username: 'Jen',
                    profilePic: 'https://www.birmingham.ac.uk/Images/College-EPS-only/college/undergraduate/international/yangyi-shi-ee-student-2-compressed-Cropped-293x228.jpg',
                },
                {
                    id: '3',
                    title: 'Water bottle',
                    image: 'https://www.goodshomedesign.com/wp-content/uploads/2021/11/old-new-chair-2.jpg',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    rating: require('./assets/Icons/bigstars-yellow-40.png'),
                    username: 'Jen',
                    profilePic: 'https://www.birmingham.ac.uk/Images/College-EPS-only/college/undergraduate/international/yangyi-shi-ee-student-2-compressed-Cropped-293x228.jpg',
                },
            ],
            art: [
                {
                    id: '2',
                    title: 'Plastic Oceans',
                    image: 'https://causeartist.com/wp-content/uploads/2020/09/Tan-Zi-Xi-artivistPlastic-Ocean.jpg',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    username: 'Jen',
                    rating: require('./assets/Icons/bigstars-yellow-40.png'),
                    story: 'After scuba diving for two years, I started collecting trash on my trips and finally made a work of art from it all.',
                    exchangeDetails: 'Not for sale',
                    profilePic: 'https://www.birmingham.ac.uk/Images/College-EPS-only/college/undergraduate/international/yangyi-shi-ee-student-2-compressed-Cropped-293x228.jpg',
                },
                {
                    id: '1',
                    title: 'Plastic Garden',
                    image: 'https://www.upcyclethat.com/wp-content/uploads/2015/04/plastic_bottle_art2.jpg',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    rating: require('./assets/Icons/bigstars-yellow-40.png'),
                    username: 'Jen',
                    story: 'This is in my own living room to bring some artificial life. All materials found on this app!',
                    exchangeDetails: 'Not for sale',
                    profilePic: 'https://www.birmingham.ac.uk/Images/College-EPS-only/college/undergraduate/international/yangyi-shi-ee-student-2-compressed-Cropped-293x228.jpg',
                },
                {
                    id: '3',
                    title: 'Plastic Flower',
                    image: 'https://i.pinimg.com/originals/59/fb/78/59fb78f4f9ada334d4ece617d3f6a631.jpg',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    rating: require('./assets/Icons/bigstars-yellow-40.png'),
                    username: 'Jen',
                    story: 'I tried to take something stale and dull--and make it beautiful',
                    exchangeDetails: 'Not for sale',
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
                    title: 'Old Water Bottle',
                    rating: require('./assets/Icons/bigstars-yellow-25.png'),
                    image: 'https://i.etsystatic.com/13522559/r/il/ffa05d/3777517013/il_570xN.3777517013_6xjq.jpg',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    story: 'a rustic looking water bottle i found on a trip to Rome',
                    exchangeDetails: 'unemployed right now so pretty free whenever!',
                    username: 'Tia',
                    profilePic: 'https://www.highline.edu/wp-content/uploads/2014/11/tha-dah-hser-highline-college.jpg',
                },
                {
                    id: '2',
                    title: 'My favorite armchair',
                    image: 'https://st4.depositphotos.com/1734770/21308/i/600/depositphotos_213088602-stock-photo-old-tattered-red-armchair-wooden.jpg',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    story: 'i used this every day to read when i was little!',
                    exchangeDetails: 'unemployed right now so pretty free whenever!',
                    username: 'Tia',
                    rating: require('./assets/Icons/bigstars-yellow-25.png'),
                    profilePic: 'https://www.highline.edu/wp-content/uploads/2014/11/tha-dah-hser-highline-college.jpg',
                },
                {
                    id: '3',
                    title: 'Water bottle',
                    image: 'https://www.goodshomedesign.com/wp-content/uploads/2021/11/old-new-chair-2.jpg',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    username: 'Tia',
                    rating: require('./assets/Icons/bigstars-yellow-25.png'),
                    profilePic: 'https://www.highline.edu/wp-content/uploads/2014/11/tha-dah-hser-highline-college.jpg',
                },
            ],
            art: [
                {
                    id: '2',
                    title: 'Green Flower',
                    image: 'https://i.etsystatic.com/10018794/r/il/f3546d/3660780266/il_300x300.3660780266_oog2.jpg',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    rating: require('./assets/Icons/bigstars-yellow-25.png'),
                    username: 'Tia',
                    story: 'I have been collecting cardboard on this app for two months. Finally I made a cardboard flower collection!',
                    exchangeDetails: 'Not for sale',
                    profilePic: 'https://www.highline.edu/wp-content/uploads/2014/11/tha-dah-hser-highline-college.jpg',
                },
                {
                    id: '1',
                    title: 'Rainbow Flower',
                    image: 'https://i.etsystatic.com/10018794/r/il/dd5511/3660896296/il_570xN.3660896296_fzyr.jpg',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    rating: require('./assets/Icons/bigstars-yellow-25.png'),
                    username: 'Tia',
                    story: 'All cardboard from the Palo Alto area!',
                    exchangeDetails: 'Not for sale',
                    profilePic: 'https://www.highline.edu/wp-content/uploads/2014/11/tha-dah-hser-highline-college.jpg',
                },
                {
                    id: '3',
                    title: 'Yellow Flower',
                    image: 'https://i.etsystatic.com/10018794/r/il/7ce067/3671802060/il_340x270.3671802060_h63x.jpg',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    username: 'Tia',
                    rating: require('./assets/Icons/bigstars-yellow-25.png'),
                    story: 'Golden cardboard that shimmers. Materials from this app!',
                    exchangeDetails: 'Not for sale',
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
                    title: 'Paintbrushes',
                    image: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/old-paintbrushes-03-richard-nixon.jpg',
                    location: 'Stanford, CA',
                    distance: '0.7 miles',
                    username: 'Amy',
                    story: 'I used these paint brushes for my final capstone project for the Design major. I ended up getting an A+, must be good luck in them!',
                    exchangeDetails: 'I\'m usually free in the evenings after work!',
                    rating: require('./assets/Icons/bigstars-yellow-50.png'),
                    profilePic: 'https://images.squarespace-cdn.com/content/v1/58febac49f7456d3c6db76d2/1540838397271-DA3L16U7L6MLRG3XFGTV/KatherinexTA-16.jpg?format=1000w',
                },
                {
                    id: '2',
                    title: 'Beloved Stool',
                    image: 'https://images.unsplash.com/photo-1598300056393-4aac492f4344?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2268&q=80',
                    location: 'Stanford, CA',
                    distance: '0.7 miles',
                    username: 'Amy',
                    story: 'I got this stool at the flea market and did my homework on it every day in high school!',
                    exchangeDetails: 'I\'m usually free in the evenings after work!',
                    rating: require('./assets/Icons/bigstars-yellow-50.png'),
                    profilePic: 'https://images.squarespace-cdn.com/content/v1/58febac49f7456d3c6db76d2/1540838397271-DA3L16U7L6MLRG3XFGTV/KatherinexTA-16.jpg?format=1000w',
                },
                {
                    id: '3',
                    title: 'Water bottle',
                    image: 'https://www.goodshomedesign.com/wp-content/uploads/2021/11/old-new-chair-2.jpg',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    username: 'Amy',
                    rating: require('./assets/Icons/bigstars-yellow-50.png'),
                    profilePic: 'https://images.squarespace-cdn.com/content/v1/58febac49f7456d3c6db76d2/1540838397271-DA3L16U7L6MLRG3XFGTV/KatherinexTA-16.jpg?format=1000w',
                },
            ],
            art: [
                {
                    id: '2',
                    title: 'Posing Girl',
                    image: 'http://3.bp.blogspot.com/-R5blLZFrQ0Y/UvCboTnFDAI/AAAAAAAAZfE/iHWGWwsIOlE/s1600/golzad_art5.jpg',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    username: 'Amy',
                    rating: require('./assets/Icons/bigstars-yellow-50.png'),
                    story: 'Posing girl inspired by 1920s modeling. Cardboard from Stanford students post move-in',
                    exchangeDetails: 'Not for sale',
                    profilePic: 'https://images.squarespace-cdn.com/content/v1/58febac49f7456d3c6db76d2/1540838397271-DA3L16U7L6MLRG3XFGTV/KatherinexTA-16.jpg?format=1000w',
                },
                {
                    id: '1',
                    title: 'My Owl',
                    image: 'https://mir-s3-cdn-cf.behance.net/projects/404/163b3626577711.5564ef6ccf915.jpg',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    username: 'Amy',
                    rating: require('./assets/Icons/bigstars-yellow-50.png'),
                    story: 'Cardboard from Stanford students post move-in, made into an owl',
                    exchangeDetails: 'Not for sale',
                    profilePic: 'https://images.squarespace-cdn.com/content/v1/58febac49f7456d3c6db76d2/1540838397271-DA3L16U7L6MLRG3XFGTV/KatherinexTA-16.jpg?format=1000w',
                },
                {
                    id: '3',
                    title: 'Cardboard Fish',
                    image: 'http://webtoolfeed.files.wordpress.com/2012/11/goldfish021.jpg',
                    location: 'Palo Alto, CA',
                    distance: '1.2 miles',
                    username: 'Amy',
                    story: 'Fish made from cardboard from Stanford students post move-in',
                    exchangeDetails: 'Not for sale',
                    rating: require('./assets/Icons/bigstars-yellow-50.png'),
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