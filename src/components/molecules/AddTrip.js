import React from 'react';
import { StyleSheet, Button, TextInput, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/reducers/userSlice';
import { useAddTripMutation } from '../../redux/api/apiSlice';

const AddTrip = () => {
  const [date, onChangeDate] = React.useState('');
  const [time, onChangeTime] = React.useState('');
  const [odo, onChangeOdo] = React.useState('');
  const [start, onChangeStart] = React.useState('');

  const currentUser = useSelector(selectUser);
  const [addTrip] = useAddTripMutation();

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter The Date"
        onChangeText={onChangeDate}
        value={date}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter The Time"
        onChangeText={onChangeTime}
        value={time}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter The Odometer"
        onChangeText={onChangeOdo}
        value={odo}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter The Start Location"
        onChangeText={onChangeStart}
        value={start}
      />
      <Button
        style={styles.button}
        onPress={async () => {
          try {
            const response = await addTrip({
              username: currentUser,
              date: date,
              time: time,
              odo: odo,
              start: start,
            }).unwrap();
            console.log('response in AddTrip-->', response);
          } catch (error) {
            console.log('an error has occurred in UI AddTrip', error);
          }
        }}
        title={'ADD TRIP'}
      />
      {/* </Button> */}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    paddingHorizontal: 10,
  },
  button: {
    paddingHorizontal: 10,
  },
  input: {
    backgroundColor: 'white',
    color: 'blue',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default AddTrip;
