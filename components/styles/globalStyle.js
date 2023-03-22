import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#3388FF55',
      borderRadius: 4, 
      paddingHorizontal: 16,
      paddingVertical: 16,
    },
    person: {        
      fontSize: 16,
      // fontWeight: 'bold',
      fontFamily: 'lato',
    },
    completed: {
      backgroundColor: '#88DD66'
    },
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