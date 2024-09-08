import { View,StyleSheet,Text,TouchableOpacity} from 'react-native'
import {useState, useEffect } from "react";
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import Dialog from 'react-native-dialog';
const checkdisponibility = () => {
    const [visible, setVisible] = useState(false);

    const onDayPress = (day) => {
        const selectedDay = day.dateString;
        console.log('selected day', selectedDay);
        setVisible(true)
     
    };

  return (
    <View style={styles.container}>
        <View style={styles.calendar}>
                <Calendar
                    onDayPress={onDayPress}
                    markedDates={{
                        '2024-09-16': {selected: true, marked: true, selectedColor: 'blue'},
                        '2024-09-17': {marked: true},
                        '2024-09-20': {marked: true},
                        '2024-09-18': {marked: true, dotColor: 'red', activeOpacity: 0},
                        '2024-09-19': {disabled: true, disableTouchEvent: true}
                      }}
                    theme={{
                      // colore del testo del giorno selezionato
                        //todayTextColor:  '#2F6AAC', // colore del testo del giorno corrente
                       // colore delle frecce per navigare tra i mesi
                        //dotColor: '#2F6AAC', // colore del punto sotto i giorni marcati

                    }}
                />
            </View>
            
            <Dialog.Container visible={visible} contentStyle ={styles.dialogcontainer}> 
                <Dialog.Title>Available Lessons</Dialog.Title>
                
                    <View  style={styles.lessonContainer}>
                        <Text style={styles.lessonDescription}>
                            {" matier :math profjames"}
                        </Text>
                        <TouchableOpacity
                            onPress={() => {
                                // handle onPress
                              }}
                            style={styles.dialogButton}>
                            <Text style={styles.dialogButtonText}>{"confirm"}</Text>
                        </TouchableOpacity>
                    </View>
               
                <Dialog.Button label="Cancel" onPress={() => setVisible(false)} />
            </Dialog.Container>
    </View>
  )
}
const styles = StyleSheet.create({
    
    dialogcontainer:{
        width: '80%',  // Customize width (percentage or fixed)
         // Customize height (fixed height)
        padding: 20,   // Optional: Add padding for content

    },
    
    container: {
        width: '100%',
        marginTop: 20,
        padding: 20,
        flex: 1,
    },
    calendar:{
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#2F6AAC',
    },
    lessonContainer: {
        marginVertical: 10,
        alignItems: 'center'
    },
    lessonDescription: {
        marginBottom: 10,
        fontSize: 16,
        textAlign: 'left'
    },
    dialogButton: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#2F6AAC',
        borderRadius: 5,
        alignItems: 'center'
    },
    dialogButtonText: {
        color: 'white',
        fontSize: 16
    },

    item: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
    },
})

export default checkdisponibility