import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';

class Welcome extends React.Component {

	componentDidMount() {
	}

	render() {

		return (
			<View>
				<Text>Signup page</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	categoryList: {
	}
});

const mapStateToProps = (state) => {
	return {
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)