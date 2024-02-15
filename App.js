//import 'react-native-gesture-handler';

import React from 'react';
//import {StatusBar} from 'react-native';
//import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
//import { View,Text } from 'react-native';
//import {Provider} from 'react-redux';
//import {PersistGate} from 'redux-persist/integration/react';
//import {ToastProvider} from 'react-native-toast-notifications';

import RootNavigator from './src/navigations';
//import {persistor, store} from './src/stores';

const App = () => {
  return (
    <NavigationContainer>
    <RootNavigator />
 </NavigationContainer>
    // <Provider store={store}>
    //   <PersistGate loading={null} persistor={persistor}>
    //      <SafeAreaProvider>
    //        <StatusBar barStyle="default" />
           
    //          <ToastProvider>
         
   
               
    //        </ToastProvider>
          
    //      </SafeAreaProvider>
    //    </PersistGate>
    //  </Provider>
  );
};

export default App;
