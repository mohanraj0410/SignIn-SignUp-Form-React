import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'


const persistConfig = {
    key: "root",
    version: 1,
    storage
}

const reducers = combineReducers({
    user: userSlice
})

const persistedReducer = persistReducer(persistConfig, reducers)

const AppStore = configureStore({
    reducer: persistedReducer
})


export default AppStore