import React, { useEffect } from 'react';
// import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
// import createSagaMiddleware from 'redux-saga';
// import { createStore, applyMiddleware, compose } from 'redux';
// import { setCustomText } from 'react-native-global-props';

import Routes from './routes';

const Navigation = createAppContainer(Routes);

const App = () => <Navigation />;

export default App;
