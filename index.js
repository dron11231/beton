import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import './axiosLogger';

AppRegistry.registerComponent(appName, () => App);
