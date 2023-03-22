import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles/globalStyle'

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Person Manager</Text>
        </View>
        )
}

export default Header
