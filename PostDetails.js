import { Image, Text, View, StyleSheet, SafeAreaView, FlatList, Pressable, Modal, Alert, TextInput, Keyboard } from 'react-native';
import React, { useState } from "react";

export default function PostDetails ({ route: { params }, navigation }) {
  const { image } = params;


  const [modalVisible, setModalVisible] = useState(false);

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
          <Text style={styles.textStyle}>Post!</Text>
      </Pressable>
    </SafeAreaView>
      
  );
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
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
  buttonOpen: {
    backgroundColor: "#F194FF",
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