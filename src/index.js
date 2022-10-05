import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import {ReactComponent as Logo} from './logo.svg';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode='light'></ColorModeScript>
      <App />
    </ChakraProvider>
  </StrictMode>
);

export {Logo}

