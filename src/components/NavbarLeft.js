import React from "react";
import { StyleSheet, Text, View, ListItem, Button } from 'react-native';
import { withNavigation } from 'react-navigation';

class NavBarLeft extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Text
				onPress={() => this.props.navigation.navigate('Welcome')}
			>Profile</Text>
		)
	}
}

export default withNavigation(NavBarLeft);