import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {init} from '@noriginmedia/norigin-spatial-navigation';
import MovieCard from './app/components/MovieCard';

init({
  // options
});
const App = () => {
  useEffect(() => {
    const appData = async () => {};
    appData();
  }, []);

  return (
    <ScrollView>
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </ScrollView>
  );
};

export default App;
