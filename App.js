import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import PlaceInput from './src/components/placeinput/PlaceInput';
import PlaceList from './src/components/placelist/PlaceList';

export default class App extends React.Component {
  state = {
    places: []
  };

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat(placeName)
      };
    });
  };

  render() {
    return ( 
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
        <PlaceList places={this.state.places}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
