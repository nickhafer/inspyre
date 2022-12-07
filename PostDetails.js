import { Image, Text, View, StyleSheet, SafeAreaView, FlatList, Pressable, Modal, Alert, TextInput, Keyboard } from 'react-native';
import React, { useState } from "react";

export default function PostDetails ({ route: { params }, navigation }) {
  const { image } = params;

  const [c1, setC1] = useState(false);
  const [c2, setC2] = useState(false);
  const [c3, setC3] = useState(false);
  const [c4, setC4] = useState(false);
  const [c5, setC5] = useState(false);
  const [c6, setC6] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  const COMMUNITIES_TO_JOIN = [
    {
      id: '1',
      // Add images to these two vars for all data using require(url)
      // Then uncommment image stuff below
      not_selected: "community not selected",
      selected: "community selected",
    },
    {
      id: '2',
      not_selected: "community not selected",
      selected: "community selected",
    },
    {
      id: '3',
      not_selected: "community not selected",
      selected: "community selected",
    },
    {
      id: '4',
      not_selected: "community not selected",
      selected: "community selected",
    },
    {
      id: '5',
      not_selected: "community not selected",
      selected: "community selected",
    },
    {
      id: '6',
      not_selected: "community not selected",
      selected: "community selected",
    },
  ]

  const renderCommunities = ({ item }) => (
    <View>
      { item.id === "1" ?
        <Pressable onPress={() => {setC1(!c1)}}>
          <Text>{c1 ? item.selected : item.not_selected}</Text>
          {/* <Image source={c1 ? item.selected : item.not_selected}/> */}
        </Pressable>
      : <></> }
      { item.id === "2" ?
        <Pressable onPress={() => {setC2(!c2)}}>
          <Text>{c2 ? item.selected : item.not_selected}</Text>
          {/* <Image source={c2 ? item.selected : item.not_selected}/> */}
        </Pressable>
      : <></> }
      { item.id === "3" ?
        <Pressable onPress={() => {setC3(!c3)}}>
          <Text>{c3 ? item.selected : item.not_selected}</Text>
          {/* <Image source={c3 ? item.selected : item.not_selected}/> */}
        </Pressable>
      : <></> }
      { item.id === "4" ?
        <Pressable onPress={() => {setC4(!c4)}}>
          <Text>{c4 ? item.selected : item.not_selected}</Text>
          {/* <Image source={c4 ? item.selected : item.not_selected}/> */}
        </Pressable>
      : <></> }
      { item.id === "5" ?
        <Pressable onPress={() => {setC5(!c5)}}>
          <Text>{c5 ? item.selected : item.not_selected}</Text>
          {/* <Image source={c5 ? item.selected : item.not_selected}/> */}
        </Pressable>
      : <></> }
      { item.id === "6" ?
        <Pressable onPress={() => {setC6(!c6)}}>
          <Text>{c6 ? item.selected : item.not_selected}</Text>
          {/* <Image source={c6 ? item.selected : item.not_selected}/> */}
        </Pressable>
      : <></> }
    </View>
  );

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.header}>
        <Pressable style={styles.clickable} onPress={() => navigation.goBack()}>
          <Image style={styles.backButton} source={require('./assets/Icons/back-gray.png')} />
          <Text style={styles.details}> Post Details</Text>
        </Pressable>
      </View>
      
      <View>
        <Image
          style={styles.image}
          source={{ uri: image }}
        />
      </View>

      <View style={styles.textInputs}>
        <TextInput style={styles.addTitle}
          placeholder='add title...                               '
          onSubmitEditing={Keyboard.dismiss}
        />
        <TextInput style={styles.addLoc}
          placeholder='add location...                            '
          onSubmitEditing={Keyboard.dismiss}
        />
        <TextInput style={styles.addStory}
          placeholder='add story... any memories with the item?   '
          onSubmitEditing={Keyboard.dismiss}
        />
        <TextInput style={styles.addDetails}
          placeholder='add exchange details... time? location?    '
          onSubmitEditing={Keyboard.dismiss}
        />
        <View>
          <Text style={styles.postTo}>post to:</Text>
            {/* Placeholder for group selection */}
            <FlatList
                horizontal
                data = {COMMUNITIES_TO_JOIN}
                renderItem={renderCommunities}
                keyExtractor={(item) => item.id}
            />
        </View>
      </View>
      
      <View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
              <View style={styles.modalView}>
                  <Text style={styles.modalText}>Are you sure you want to post this?</Text>
                  <Pressable
                    style={[styles.buttonEdit, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>Keep editing</Text>
                  </Pressable>

                  <Pressable
                    style={[styles.buttonPost, styles.buttonClose]}
                    onPress={() => {setModalVisible(!modalVisible), navigation.navigate('Profile')}}
                  >
                    <Text style={styles.textStyle}>Post</Text>
                  </Pressable>
              </View>
          </View>
        </Modal>
      </View>
      

      <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
      >
          <Image source={require('./assets/Icons/post-gray.png')} style={styles.postFirst} />
      </Pressable>
    </SafeAreaView>
      
  );
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    header: {
      width: '100%',
      height: '10%',
    },
    clickable: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    backButton: {
      width: 48,
      height: 48,
      margin: 8,
    },
    screenText: {
        fontSize: 32,
    },
    details: {
      fontSize: 24,
      fontFamily: 'InterBlack',
      marginLeft: 60,
    },
    centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttonEdit: {
    borderRadius: 20,
    width: 200,
    paddingVertical: 12,
    margin: 8,
    elevation: 2,
    backgroundColor: '#81BBA4',
  },
  buttonPost: {
    borderRadius: 20,
    width: 200,
    paddingVertical: 12,
    margin: 8,
    elevation: 2
  },
  postFirst: {
    width: 120,
    resizeMode: 'contain',
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    fontFamily: 'InterBold',
    textAlign: "center",
    fontSize: 16,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  addTitle: {
    fontFamily: 'InterBlack',
    fontSize: 24,
    marginVertical: 8,
  },
  addLoc: {
    fontFamily: 'InterBold',
    fontSize: 18,
    marginVertical: 6,
  },
  addStory: {
    fontFamily: 'InterRegular',
    fontSize: 14,
    marginVertical: 8,
  },
  addDetails: {
    fontFamily: 'InterRegular',
    fontSize: 14,
    marginVertical: 8,
  },
  postTo: {
    fontFamily: 'InterBold',
    fontSize: 16,
    marginVertical: 8,
  },
  textInputs: {
    width: '80%',
    justifyContent: 'center',
  },
  modalText: {
    justifyContent: 'center',
    textAlign: 'center',
    margin: 8,
    fontFamily: 'InterSemiBold',
    fontSize: 20,
  },
});