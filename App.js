import { useCallback, useEffect, useState } from 'react'
import { Alert, FlatList, Keyboard, SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font'

import AddPerson from './components/AddPerson';
import Header from './components/Header';
import Person from './components/Person';
import Playground from './components/Playground';

const getFonts = () => {
  return Font.loadAsync({
    lato: require('./assets/fonts/lato.ttf')
  })
}

const App = () => {

  const [fontLoading, setFontLoading] = useState(false)
  const [error, setError] = useState(false)
  const [person, setPerson] = useState('')
  const [persons, setPersons] = useState([
    {id: "1", name: "Ali Asghar", completed: false},
    {id: "2", name: "Maryam", completed: false},
    {id: "3", name: "Ali", completed: false},
    {id: "4", name: "Najmeh", completed: false},
    {id: "5", name: "Sina", completed: false},
  ]);

  const deleteHandler = id => {
    setPersons((prevPersons) => prevPersons.filter(person => person.id !== id));
  }

  const completedHandler = id => {
    const allPersons = [...persons];
    const personIndex = allPersons.findIndex(person => person.id == id);

    // const person = allPersons[personIndex];
    // // person.completed = true;
    // person.completed = !person.completed;
    // allPersons[personIndex] = person;

    // allPersons[personIndex].completed = true;
    allPersons[personIndex].completed = !allPersons[personIndex].completed;

    setPersons(allPersons);
  }

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

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          lato: require('./assets/fonts/lato.ttf')
        });
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setFontLoading(true);
      }
    }

    prepare();
    console.log({fontLoading})
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontLoading) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [fontLoading]);

  if (!fontLoading) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} onLayout={onLayoutRootView} >
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
                renderItem={({item}) => <Person person={item} deleteHandler={deleteHandler} completedHandler={completedHandler} />}
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
    // <Playground />
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