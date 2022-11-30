import { Text, View, StyleSheet, SafeAreaView, FlatList, StatusBar, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export default function HomeScreen() {
    const DATA = [
        {
            id: '1',
            title: 'First Item',
            item_name: 'broken chair',
            username: 'Nick',
            picture: 'image1',
            community: 'Stanford GSB',
            distance: '1.2 miles',
            rating: '5 stars',
            num_likes: 32,
            liked: false
        },
    ];

    const Item = ({ title, username }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.username}>{username}</Text>
            <TouchableHighlight onPress={()=>{}}>
                <View>
                    <Ionicons name="paper-plane-outline" size={24} color="black" />
                    <Text>Message</Text>
                </View>
            </TouchableHighlight>
        </View>
    );
    
    const renderItem = ({ item }) => (
        <Item
            title={item.title} 
            username={item.username}
        />
    );
  
    return (
      <SafeAreaView style={styles.container}>
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
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    username: {
        fontSize: 16,
    },
});