import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {init, useFocusable} from '@noriginmedia/norigin-spatial-navigation';
// import MovieCard from './app/components/MovieCard';

init({
  // options
  nativeMode: true,
});

const MovieCard = ({name}) => {
  const {ref, focused, focusSelf} = useFocusable();

  return (
    <TouchableOpacity
      onPress={() => console.log('button pressed', name, focused)}
      ref={ref}
      onFocus={focusSelf}
      style={{...styles.button, ...(focused && styles.buttonFocused)}}>
      <Text style={styles.text}>Press me</Text>
    </TouchableOpacity>
  );
};

const App = () => {
  useEffect(() => {
    const appData = async () => {};
    appData();
  }, []);

  return (
    <ScrollView style={styles.app}>
      <MovieCard name="1" />
      <MovieCard name="2" />
      <MovieCard name="3" />
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#000',
  },
  button: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: '#FFF',
    backgroundColor: '#000',
  },
  buttonFocused: {
    backgroundColor: '#F0F',
  },
  text: {
    color: '#FFF',
    textAlign: 'center',
    lineHeight: 40,
  },
});
