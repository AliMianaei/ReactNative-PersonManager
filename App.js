import { useState } from 'react'
import { Alert, FlatList, Keyboard, SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import AddPerson from './components/AddPerson';
import Header from './components/Header';
import Person from './components/Person';

const App = () => {
  const [error, setError] = useState(false)
  const [person, setPerson] = useState('')
  const [persons, setPersons] = useState([
    {id: "1", name: "Ali Asghar"},
    {id: "2", name: "Maryam"},
    {id: "3", name: "Ali"},
    {id: "4", name: "Najmeh"},
    {id: "5", name: "Sina"},
  ]);

  const pressHandler = id => setPersons((prevPersons) => prevPersons.filter(person => person.id !== id));
  const submitHandler = () => {
    if(person.length > 2) {
      setPersons((prevPersons) => [...prevPersons, {id: Math.round(Math.random()*1000).toString(), name: person }])
      Keyboard.dismiss();
      setPerson('');
      setError(false);
    } else {
      setError(true);
      Alert.alert('OOPS!', 'Name must be more than 2 characters', [
        {text: 'OK', onPress: () => console.log('Alert closed.')}
      ])
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.androidSafeArea}>
        <View style={styles.container}>
          <Header/>
          <View style={styles.body}>
            <AddPerson person={person} setPerson={setPerson} submitHandler={submitHandler} />
            <Text style={{color: 'red', marginBottom: 10}}>{error && 'Name must be more than 2 characters'}</Text>
            <View style={styles.items}>
              <FlatList 
                contentContainerStyle={{gap: 16}}
                data={persons} 
                renderItem={({item}) => <Person person={item} pressHandler={pressHandler} />}
                keyExtractor={item => item.id}
              />
            </View>
          </View>
          <View style={{height: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: '#DDD'}}>
            <Text style={{}}>Footer</Text>
          </View>
        </View>
    </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default App

const styles = StyleSheet.create({
  androidSafeArea: {
    paddingTop: Platform.OS === 'android' ? 32 : 0,
    flex: 1,
    backgroundColor: '#EEE',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  body: {
    flex: 1, 
    paddingHorizontal: 8,
    paddingVertical: 16,

  },
  items: {
    flex: 1,
  },
})