import {configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer';
import saga from './sagas';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2,
  },
  rootReducer,
);



const store = configureStore({
  reducer: persistedReducer,
  


});
sagaMiddleware.run(saga);

const persistor = persistStore(store);
export {store, persistor};