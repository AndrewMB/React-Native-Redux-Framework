import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { persistStore, persistReducer } from 'redux-persist'
import { AsyncStorage } from 'react-native';

/**
 * Configuration for persisting items in storage.
 * Add things to the blacklist that you don't want to persist when the app is restarted
 */
const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	blacklist: ['count']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore(initialState) {
	let store = createStore(
		persistedReducer,
		initialState,
		applyMiddleware(thunk)
	);
	let persistor = persistStore(store);
	return { store, persistor }
}