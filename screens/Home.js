import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native'

export class Home extends Component {
	state = {
		search: '',
		results: {
			kind: '',
			totalItems: 0,
			items: []
		}
	}

	handleSearch = (text) => {
		this.setState({search: text})
	}

	submit = (search_input) => {
		alert('You entered: ' + search_input)
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
		return (
			<View style = {styles.container}>
				<Text style = {styles.title}> Book Finder! </Text>

				<TextInput style = {styles.input}
					placeholder = "Enter book name"
					placeholderTextColor = "#9a73ef"
					autoCapitalize = "none"
					onChangeText = {this.handleSearch} />

				<TouchableOpacity
					style = {styles.submitButton}
					onPress = {
						() => this.props.navigation.navigate('ResultsScreen',{books: this.state.search})
					}>
					<Text style = {styles.submitButtonText}> Search </Text>
				</TouchableOpacity>

			</View>
			)
	}
};

export default Home;

const styles = StyleSheet.create({
	container: {
		paddingTop:23
	},
	title: {
		fontFamily: 'Times New Roman',
		fontSize: 30,
		color: '#7a42f4',
		textAlign: 'center'
	},
	input: {
		margin:15,
		height:40,
		borderColor: '#7a42f4',
		borderWidth:1
	},
	submitButton: {
		backgroundColor: '#7a42f4',
		padding: 10,
		margin: 15,
		height: 40
	},
	submitButtonText: {
		color: 'white'
	},
	text: {
		color: 'black'
	}
})
