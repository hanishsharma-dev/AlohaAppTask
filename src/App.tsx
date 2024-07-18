import React from 'react';
import {StyleSheet} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';

import AppNavigator from './navigation/AppNavigator';
import {Colors} from './constants';

const App = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <AppNavigator />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.APP_BACKGROUND_COLOR,
  },
});

export default App;
