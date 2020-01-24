import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import { createStackNavigator } from 'react-navigation';
import { PersistGate } from 'redux-persist/integration/react'
import NavBar from './src/components/Navbar'
const { persistor, store } = configureStore();

export default class App extends React.Component {

    //TODO add a loader for large states behind rehydrated.  Not really necessary for small states though.
    render() {
        return (
            <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                <NavBar />
              </PersistGate>
            </Provider>
        );
    }
}

AppRegistry.registerComponent('Soapbox', () => App);