import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux';

import lightTheme from './themes/light';
import { initStore } from './stores';

import App from './components/App';

const store = initStore({});
const theme = lightTheme;

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>, document.getElementById('root'));
