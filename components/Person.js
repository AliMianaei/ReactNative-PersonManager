import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Person = ({person, pressHandler}) => {
  return (
    <TouchableOpacity onPress={() => pressHandler(person.id)}>
        <Text style={styles.person}>{person.name}</Text>
    </TouchableOpacity>
  )
}

export default Person

const styles = StyleSheet.create({
    person: {
        backgroundColor: '#3388FF55',
        fontSize: 16,
        fontWeight: 'bold',
        paddingVertical: 16,
        textAlign: 'center',
        borderRadius: 4, 
        // marginTop: 50
    }
})