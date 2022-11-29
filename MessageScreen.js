import { Text, View, StyleSheet, SafeAreaView, FlatList, StatusBar, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';




export default function MessageScreen() {

  const DATA = [
    {
      message: 'Hey, how is it going?',
      name: 'Lucas',
      imageUrl: 'https://us.123rf.com/450wm/kateen2528/kateen25282003/kateen2528200300007/141661994-realistic-fresh-blueberry-with-leaves.jpg?ver=6',

    },
    {
      message: 'How are you doing?',
      name: 'Nichole',
      imageUrl: 'https://www.nicepng.com/png/detail/70-701585_cucumber-clipart-cucumber-clip-art-free.png',
    },
    {
      message: 'Yes!',
      name: 'Tia',
      imageUrl: 'https://us.123rf.com/450wm/kateen2528/kateen25282003/kateen2528200300007/141661994-realistic-fresh-blueberry-with-leaves.jpg?ver=6',

    },

    {
      message: 'Wonderful, that works for me.',
      name: 'Lola',
      imageUrl: 'https://us.123rf.com/450wm/kateen2528/kateen25282003/kateen2528200300007/141661994-realistic-fresh-blueberry-with-leaves.jpg?ver=6',

    },

    {
      message: 'Very nice!!!',
      name: 'Terrance',
      imageUrl: 'https://us.123rf.com/450wm/kateen2528/kateen25282003/kateen2528200300007/141661994-realistic-fresh-blueberry-with-leaves.jpg?ver=6',

    },

    {
      message: 'Wow',
      name: 'Julia',
      imageUrl: 'https://us.123rf.com/450wm/kateen2528/kateen25282003/kateen2528200300007/141661994-realistic-fresh-blueberry-with-leaves.jpg?ver=6',

    },
  ];



  const Item = ({ name, message, imageUrl }) => (
    <View style={styles.item}>
      <View style={styles.itemTop}>
      <Image source = {{uri: imageUrl}} style={styles.image}></Image>
      <Text style={styles.name}>{name}</Text>
      </View>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
    
    const renderItem = ({ item }) => (
      <Item 
      name={item.name} 
      message={item.message}
      imageUrl={item.imageUrl}
      
      />
    );
  
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.titleRow}>
         <Text style={styles.titleText}>Messages</Text>
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
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    item: {
      backgroundColor: 'white',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    name: {
      fontSize: 32,
    },
    message: {
      fontSize: 20,
    },
    titleRow: {
      flexDirection: 'row',
      padding: 20,
      backgroundColor: 'lightblue',
      justifyContent: 'center',
    },
    titleText: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    image: {
      width: 35,
      height: 30,
      margin: 10,
      resizeMode: 'contain'
    },
});