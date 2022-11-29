import { Text, View, StyleSheet, SafeAreaView, FlatList, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';




export default function MessageScreen() {

  const DATA = [
    {
      id: '1',
      name: 'Lucas',
    },
    {
      id: '2',
      name: 'Nichole',
    },
    {
      id: '3',
      name: 'Malcolm',
    },
  ];



  const Item = ({ name }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
    
    const renderItem = ({ item }) => (
      <Item name={item.name} />
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
    name: {
      fontSize: 32,
    },
});