import { Image, Text, View, StyleSheet, SafeAreaView, FlatList, StatusBar, TouchableHighlight, Pressable, Button, navigation } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import CommunitiesScreen from './CommunitiesScreen';
import IndividualMessage from './IndividualMessage';
import DestinationScreen from './DestinationsScreen';
import DetailsScreen from './DetailsScreen';


export default function MessageScreen() {
  const navigation = useNavigation();
  const Stack = createStackNavigator();

  const DATA = [
    {
      message: 'Hey, how is it going?',
      name: 'Lucas',
      time: '5m ago',
      imageUrl: 'https://us.123rf.com/450wm/kateen2528/kateen25282003/kateen2528200300007/141661994-realistic-fresh-blueberry-with-leaves.jpg?ver=6',
      id: '1',
    },
    {
      message: 'How are you doing?',
      name: 'Nichole',
      time: '47m ago',
      imageUrl: 'https://www.nicepng.com/png/detail/70-701585_cucumber-clipart-cucumber-clip-art-free.png',
      id: '2',

    },
    {
      message: 'Yes!',
      name: 'Tia',
      time: '2h ago',
      imageUrl: 'https://us.123rf.com/450wm/kateen2528/kateen25282003/kateen2528200300007/141661994-realistic-fresh-blueberry-with-leaves.jpg?ver=6',
      id: '3',

    },

    {
      message: 'Wonderful, that works for me.',
      time: '8h ago',
      name: 'Lola',
      imageUrl: 'https://us.123rf.com/450wm/kateen2528/kateen25282003/kateen2528200300007/141661994-realistic-fresh-blueberry-with-leaves.jpg?ver=6',
      id: '4',

    },

    {
      message: 'Very nice!!!',
      name: 'Terrance',
      time: '9h ago',
      imageUrl: 'https://us.123rf.com/450wm/kateen2528/kateen25282003/kateen2528200300007/141661994-realistic-fresh-blueberry-with-leaves.jpg?ver=6',
      id: '5',

    },

    {
      message: 'Wow',
      name: 'Julia',
      time: '2d ago',
      imageUrl: 'https://us.123rf.com/450wm/kateen2528/kateen25282003/kateen2528200300007/141661994-realistic-fresh-blueberry-with-leaves.jpg?ver=6',
      id: '6',

    },
  ];



  const Item = ({ name, message, imageUrl, time }) => (
      <View style={styles.item}>
        <View style={styles.itemTop}>
        <Image source = {{uri: imageUrl}} style={styles.image}></Image>
        <Text style={styles.name}>{name}</Text>
          <View style = {styles.timeView}>
            <Text style = {styles.time}>{time}</Text>
          </View>
          <Button title="Go to details" onPress={() => navigation.navigate('DetailsScreen')}></Button>
        </View>
        <Text style={styles.message}>{message}</Text>
      </View>
  );
    
    const renderItem = ({ item }) => (
      <Item 
      name={item.name} 
      message={item.message}
      imageUrl={item.imageUrl}
      time = {item.time}
      
      />
    );
  
    return (
      <SafeAreaView style={styles.container}>
        <View style = {styles.header}>
        <Text style = {styles.headerText}>Inspyre Header</Text>
      </View>
        <View style={styles.titleRow}>
         <Text style={styles.titleText}>Conversations</Text>
        </View>
        <FlatList 
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
          <Stack.Navigator>
            <Stack.Screen name = 'MessagesScreen' component = {DestinationScreen} />
            <Stack.Screen name = 'DetailsScreen' component = {DetailsScreen}/>
          </Stack.Navigator>
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
    },

    itemTop: {
      backgroundColor: 'white',
      flexDirection: 'row',
    },
    item: {
      backgroundColor: 'white',
      padding: 10,
      marginVertical: 4,
      marginHorizontal: 0,
    },
    name: {
      fontSize: 20,
    },
    time: {
      fontSize: 12,
      color: 'grey',
      //paddingStart: 200,
    },
    timeView: {
      backgroundColor: 'red',
      paddingTop: 5,
    },
    message: {
      fontSize: 15,
      backgroundColor: 'white',
      paddingStart: 50,
      fontStyle: 'italic',
    },
    titleRow: {
      flexDirection: 'row',
      padding: 20,
      backgroundColor: 'white',
      justifyContent: 'center',
    },
    titleText: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    image: {
      width: 30,
      height: 30,
      margin: 10,
      resizeMode: 'contain',
      borderRadius: 100,

    },
    header: {
      backgroundColor: 'lightgreen',
      height: '7%',
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
    },
    headerText: {
      alignItems: 'center',
     
    },
});