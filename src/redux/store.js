import contactsReducer from './contacts/contacts-reducer';
import { searchReducer } from './search/search-reducer';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/auth-reducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    search: searchReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
