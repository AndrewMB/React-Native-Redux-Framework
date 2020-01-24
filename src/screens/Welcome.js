import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Image, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { setCount } from "../actions/exampleCounter";
import styleVariables from '../constants/styles';

class Welcome extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log('component did mount function')
	}

	incrementCount = () => {
		this.props.setCount(this.props.count + 1)
	};

	render() {

		return (
			<View style={styles.wrapper}>
				<View style={styles.centerWrapper}>
					<Image
						source={require('../assets/images/Welcome.png')}
						style={styles.image}
					/>
					<View style={styles.textWrapper}>
						<Text style={styles.instructionText}>This is the home screen.</Text>
					</View>
					<TouchableOpacity style={{height: 50, width: 100, backgroundColor: 'gray'}} onPress={() => this.incrementCount()}>
						<Text>Increment counter!</Text>
					</TouchableOpacity>
					<View>
						<Text>Current count: {this.props.count}</Text>
					</View>
				</View>
				<TouchableOpacity style={styles.buttonWrapper} onPress={() => this.props.navigation.navigate('Signup')}>
					<Text style={styles.buttonText}>Get started</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: styleVariables.backgroundColor,
		alignItems: 'center'
	},
	centerWrapper: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	image: {
		height: 200,
		width: 256
	},
	textWrapper: {
		paddingTop: 20,
		width: 220
	},
	instructionText: {
		fontSize: 18,
		lineHeight: 25,
		textAlign: 'center'
	},
	buttonWrapper: {
		position: 'absolute',
		bottom: 40,
		width: '90%',
		height: 60,
		backgroundColor: styleVariables.lightPink,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 40,
		borderColor: '#000',
		borderWidth: 1
	},
	buttonText: {
		color: '#fff',
		fontSize: 24
	}
});

const mapStateToProps = (state) => {
	return {
		count: state.count
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setCount: (payload) => dispatch(setCount(payload))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)