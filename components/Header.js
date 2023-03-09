import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Person Manager</Text>
        </View>
        )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        paddingHorizontal: 8,
        paddingVertical: 16,
        backgroundColor: '#EEE',
    },
    headerText: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#995588'
    }
})