
import React from 'react';
import { Platform, StyleSheet, Button, View, Text } from 'react-native';

const helloFrom = Platform.select({
    ios: 'Hello from IOS',
    android:
      'Hello from android',
  });  

export default class DetailsScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
          <Text style={styles.helloFrom}>{helloFrom}</Text>
          <Button
            title="Go to Details... again"
            onPress={() => this.props.navigation.push('Details')}
          />
          <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}
          />
          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    helloFrom: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });