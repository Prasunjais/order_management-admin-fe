import { Fragment } from 'react';
import { Toaster } from 'react-hot-toast';
import './App.css';
import {
  BaseWrap
} from './styles/BaseWrap'
import BaseRoute from './router';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * 
 * @returns {ReactElement}
 */

function App() {
  return (
    <Fragment>
      <Toaster />
      <BaseWrap id='base'>
        <BaseRoute />
      </BaseWrap> 
    </Fragment>
  );
}

export default App;
