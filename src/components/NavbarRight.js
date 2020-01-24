import React from "react";
import { StyleSheet, Text, View, ListItem, Button } from 'react-native';
import { withNavigation } from 'react-navigation';

class NavBarRight extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Text
				onPress={() => this.props.navigation.navigate('Profile')}
			>Profile</Text>
		)
	}
}

export default withNavigation(NavBarRight);