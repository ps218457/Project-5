import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/MaterialIcons";

const OefeningBeschrijvingGast = ({ navigation }) => {
    return (
        <View>
            <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />
            <Text>OefeningBeschrijvingGast</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
            </TouchableOpacity>
        </View>
    )
}

export default OefeningBeschrijvingGast

const styles = StyleSheet.create({})