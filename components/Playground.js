import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Playground = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textOne}>Text one</Text>
      <Text style={styles.textTwo}>Text two</Text>
      <Text style={styles.textThree}>Text three</Text>
      <Text style={styles.textFour}>Text four</Text>
    </View>
  )
}

export default Playground

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 50,
        backgroundColor: '#ccc',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        
    },
    textOne: {
        padding: 10,
        backgroundColor: 'orange',
    },
    textTwo: {
        padding: 30,
        backgroundColor: 'skyblue',
    },
    textThree: {
        padding: 20,
        backgroundColor: 'pink',
    },
    textFour: {
        padding: 40,
        backgroundColor: 'green',
    },
})