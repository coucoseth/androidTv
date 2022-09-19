import React, {useState, useEffect} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useFocusable} from '@noriginmedia/norigin-spatial-navigation';

const MovieCard = ({name}) => {
  const {ref, focused, focusSelf} = useFocusable();

  return (
    <TouchableOpacity
      onPress={() => console.log('button pressed', name, focused)}
      ref={ref}
      onFocus={focusSelf}
      style={focused ? styles.buttonFocused : styles.button}>
      <Text>Press me</Text>
    </TouchableOpacity>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: '80%',
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 50,
  },
  buttonFocused: {
    borderWidth: 1,
    borderColor: '#76e789',
    backgroundColor: '#993276',
    height: 50,
    width: '80%',
  },
});
