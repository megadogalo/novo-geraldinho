import { Text, View, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function Perfil() {
    return (
    <View style={styles.container} >
        <Image style={styles.profilePicture} source={require('../assets/profile-picture.png')} />

        <Text style={styles.text }> Mylene Cavalcanti </Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0'
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333'
    },
    profilePicture: {
        height: 200,
        width: 200,
        borderRadius: 100,
        marginBottom: 40
    }
});