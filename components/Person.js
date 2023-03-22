import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { styles } from './styles/globalStyle'

// import { styles } from './styles/globalStyle'

const Person = ({person, deleteHandler, completedHandler}) => {
  return (
    <TouchableOpacity onPress={() => completedHandler(person.id)}>
        <View style={[styles.container, person.completed && styles.completed]}>
          <Text style={styles.person}>{person.name}</Text>
          <MaterialCommunityIcons name="delete" size={24} color="#CC0044" onPress={() => deleteHandler(person.id)} />
        </View>
    </TouchableOpacity>
  )
}

export default Person
