import { View, SafeAreaView, Image, Text, StyleSheet, Alert ,Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React, { useState, useEffect } from 'react';

const QROefeningScreen = ( {navigation , route} ) => {


const [oefening, setoefening] = useState(route.params);

  return (
    <SafeAreaView
        style={{
            flex: 1,
            backgroundColor: '#fff',
        }}>
        <View style={style.header}>
            <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />

        </View>
        <View style={style.imageContainer}>
            <Image source={{ uri: oefening.foto }} style={{ resizeMode: 'contain', flex: 1, width: 150, height: 150 }} />
        </View>
        <View style={style.detailsContainer}>
            <View
                style={{
                    marginLeft: 20,
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                }}>
                <View style={style.line} />
            </View>
            <View
                style={{
                    marginLeft: 20,
                    marginTop: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{oefening.naam}</Text>

            </View>
            <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Beschrijving</Text>
                <Text
                    style={{
                        color: 'grey',
                        fontSize: 16,
                        lineHeight: 22,
                        marginTop: 10,
                    }}>
                    {oefening.beschrijving}
                </Text>

            </View>
        </View>
    </SafeAreaView>
);

 };

const style = StyleSheet.create({
header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
},
imageContainer: {
    flex: 0.2,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
},
detailsContainer: {
    flex: 0.55,
    backgroundColor:  '#F1F1F1',
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 30,
    paddingTop: 30,
},
line: {
    width: 25,
    height: 2,
    backgroundColor: '#000',
    marginBottom: 5,
    marginRight: 3,
},
borderBtn: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 40,
},
borderBtnText: { fontWeight: 'bold', fontSize: 28 },
buyBtn: {
    width: 130,
    height: 50,
    backgroundColor:'#00B761',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
},
priceTag: {
    backgroundColor: '#00B761',
    width: 80,
    height: 40,
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
},
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default QROefeningScreen