import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
//import Home from './screens/Home';

export class Results extends Component {
	state = {
		search: '',
		results: {
			kind: '',
			totalItems: 0,
			items: []
		}
	}

	fetchData (search_input)  {
		fetch("https://www.googleapis.com/books/v1/volumes?q=" + search_input)
		.then((response) => response.json())
		.then((responseData) => {
			this.setState({results: responseData}, this.displayData);
			//console.log(responseData)
		})
		.catch(error => {
			console.error(error);
		});
	}

	displayData ()  {
		//await this.fetchData(search_input)
		//var title = this.state.results.items[0].volumeInfo.title;
		var i;
		var title = this.state.results.items[0].volumeInfo.title;
		var author = this.state.results.items[0].volumeInfo.authors[0];
		for (i = 0; i < this.state.results.items.length; i++) {
			console.log("Title: " + this.state.results.items[i].volumeInfo.title + " By " + this.state.results.items[i].volumeInfo.authors[0] + "\n")
		}
		//alert("Title: " + title + " By " + author)
	}

  render() {

  	const { navigation } = this.props;
  	const data = navigation.getParam('books','MyBook')
  	this.fetchData(data)

  	var bookOutput = [];

  	for (let i = 0; i < this.state.results.items.length; i++) {
  		bookOutput.push(
  				<Text style={styles.item}>Title: {this.state.results.items[i].volumeInfo.title} By  {this.state.results.items[i].volumeInfo.authors[0]}</Text>
  			)
  	}

    return (
    	<ScrollView>
    		{ bookOutput }
    	</ScrollView>
    )
  }
}

export default Results

const styles = StyleSheet.create ({
   item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 30,
      margin: 2,
      borderColor: '#2a4944',
      borderWidth: 1,
      backgroundColor: '#7a42f4'
   }
})