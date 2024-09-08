import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const LessonFormScreen = () => {
  const [matiere, setMatiere] = useState('');
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [status, setStatus] = useState('public');
  const [studentCount, setStudentCount] = useState(1);
  const [student, setStudent] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirmDate = (selectedDate) => {
    const formattedDate = `${selectedDate.getDate().toString().padStart(2, '0')}-${(selectedDate.getMonth() + 1).toString().padStart(2, '0')}-${selectedDate.getFullYear()}`;
    setDate(formattedDate);
    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirmTime = (selectedTime) => {
    const formattedTime = `${selectedTime.getHours().toString().padStart(2, '0')}:${selectedTime.getMinutes().toString().padStart(2, '0')}`;
    setTime(formattedTime);
    hideTimePicker();
  };

  const handleStatusChange = (value) => {
    setStatus(value);
    if (value === 'private') {
      setStudentCount('');
    }
  };

  const getMinTime = () => {
    const minTime = new Date();
    minTime.setHours(8, 0, 0); // 8:00 AM
    return minTime;
  };

  const getMaxTime = () => {
    const maxTime = new Date();
    maxTime.setHours(17, 0, 0); // 5:00 PM
    return maxTime;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Matiere</Text>
      <RNPickerSelect
        onValueChange={(value) => setMatiere(value)}
        items={[
          { label: 'Math', value: 'math' },
          { label: 'Physics', value: 'physics' },
          { label: 'Chemistry', value: 'chemistry' },
        ]}
        style={pickerSelectStyles}
        placeholder={{ label: 'Select a subject...', value: null }}
      />

      <Text style={styles.label}>Date</Text>
      <Button title="Pick a date" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirmDate}
        onCancel={hideDatePicker}
      />
      <Text style={styles.selectedDate}>{date || 'No date selected'}</Text>

      <Text style={styles.label}>Time</Text>
      <Button title="Pick a time" onPress={showTimePicker} />
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleConfirmTime}
        onCancel={hideTimePicker}
        minimumDate={getMinTime()}
        maximumDate={getMaxTime()}
        is24Hour={true} // 24-hour format
      />
      <Text style={styles.selectedDate}>{time || 'No time selected'}</Text>

      <Text style={styles.label}>Status</Text>
      <RNPickerSelect
        onValueChange={handleStatusChange}
        items={[
          { label: 'Public', value: 'public' },
          { label: 'Private', value: 'private' },
        ]}
        style={pickerSelectStyles}
        value={status}
      />

      {status === 'public' && (
        <>
          <Text style={styles.label}>Number of Students</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={studentCount}
            onChangeText={(text) => setStudentCount(text)}
          />
        </>
      )}

      {status === 'private' && (
        <>
          <Text style={styles.label}>Student</Text>
          <TextInput
            style={styles.input}
            value={student}
            onChangeText={(text) => setStudent(text)}
          />
        </>
      )}

      <Button title="Submit" onPress={() => { console.log(matiere,time,date,status,) }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  selectedDate: {
    marginVertical: 10,
    fontSize: 16,
    color: '#333',
  },
});

const pickerSelectStyles = {
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    color: 'black',
    paddingRight: 30,
    backgroundColor: '#fff',
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: '#ccc',
    borderRadius: 5,
    color: 'black',
    paddingRight: 30,
    backgroundColor: '#fff',
  },
};

export default LessonFormScreen;
