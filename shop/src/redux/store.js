import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartReducer'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const stripe = require('stripe')('sk_test_51NR6asSAeJMjDRqrRr5ourmjRY0bxEcJpJNzMB3ME2P6QRA3ILboKboX4Ce9T98d3uXtrPUTnrr93iEDIQAl94Gv00SDeYqCca');



const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, cartReducer)

 export const store = configureStore({
  reducer:{
    cart: persistedReducer ,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store) 