import { Button, StyleSheet, TextInput, View } from 'react-native'
import React from 'react'

const AddPerson = ({person, setPerson, submitHandler}) => {
  return (
    <View style={styles.formContainer}>
        <TextInput 
            style={styles.formInput} 
            placeholder='New name'  
            placeholderTextColor='#888'
            onChangeText={value => setPerson(value)}
            value={person}
        />
        <Button color='#449977' title='Add Person' onPress={submitHandler} />
    </View>
  )
}

export default AddPerson

const styles = StyleSheet.create({
    formContainer: {
        flexDirection: 'row',
        columnGap: 16,
    },
    formInput: {
        flex: 1,
        flexGrow: 1,
        padding: 8,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 3,
    },
})