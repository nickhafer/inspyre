import { Image, Text, View, StyleSheet, SafeAreaView, FlatList, Pressable, Modal, Alert } from 'react-native';
import React, { useState } from "react";

export default function PostDetails ({ navigation }) {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <SafeAreaView style={styles.screenContainer}>
            <Pressable style={styles.back} onPress={() => navigation.goBack()}>
                <Image style={styles.back} source={require('./assets/Icons/back-gray.png')} />
                <Text> Select a Different Photo</Text>
            </Pressable>

            {/* <Pressable onPress={() => navigation.navigate('PostDetails')}>
                <Text style={styles.screenText}>Post! -&gt;</Text>
            </Pressable> */}


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
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Let me keep editing</Text>
                        </Pressable>

                        <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => {setModalVisible(!modalVisible), navigation.navigate('Profile')}}
                        >
                            <Text style={styles.textStyle}>Yeah take me back to my profile</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

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
        justifyContent: 'center',
        alignItems: 'center',
    },
    screenText: {
        fontSize: 32,
    },
    centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});