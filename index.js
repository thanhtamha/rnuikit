// Only import on native platforms
import 'react-native-gesture-handler';

// Mobile Entry
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
