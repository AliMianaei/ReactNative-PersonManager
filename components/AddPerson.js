import React from 'react'
import { Button, TextInput, View } from 'react-native'
import { styles } from './styles/globalStyle'

const AddPerson = ({person, setPerson, submitHandler}) => {
  return (
    <View style={styles.formContainer}>
        <TextInput 
            style={styles.formInput} 
            placeholder='New name'  
            placeholderTextColor='#888'
            // onChangeText={value => setPerson(value)} 
                // the above line is correct, followin line is the brief of this line, 
                // because when you use onChangeText method, it gives the value of input to our function which is setPerson here
            onChangeText={setPerson}
            value={person}
        />
        <Button color='#449977' title='Add Person' onPress={submitHandler} />
    </View>
  )
}

export default AddPerson