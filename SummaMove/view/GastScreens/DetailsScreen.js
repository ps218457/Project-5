import React from 'react';
import { View, SafeAreaView, Image, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const DetailsScreen = ({ navigation, route }) => {
    const Oefening = route.params;
    console.log(Oefening);
    console.log(route);
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
                <Image source={{ uri: Oefening.foto }} style={{ resizeMode: 'contain', flex: 1, width: 250, height: 250 }} />
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
                    <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{Oefening.naam}</Text>

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
                        {Oefening.beschrijving}
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
});

export default DetailsScreen
