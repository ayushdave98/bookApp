import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './screens/Home';
import Results from './screens/Results';
import Inputs from './inputs.js';

const AppNavigator = createStackNavigator({
	HomeScreen: { screen: Home },
	ResultsScreen: { screen: Results }
});

export default createAppContainer(AppNavigator);


//export default class App extends Component {
//	render() {
//		return (
//			<AppNavigator />
//			);
//	}
//}
//const App = () => {
 // return (
    //<View style={styles.container}>
      //<Text>Book Finder!</Text>
    //</View>
 //   <Inputs />
 // )
//}

//export default App

//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    backgroundColor: '#fff',
//    alignItems: 'center',
//    justifyContent: 'center',
//  },
//});
