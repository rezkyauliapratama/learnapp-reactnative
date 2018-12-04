import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import ListItem from './src/components/listitem/ListItem';

export default class App extends React.Component {
  state = {
    placeName: '',
    places: []
  }

  placeNameChangeHandler = textVal => {
    this.setState({
      placeName: textVal
    })
  }

  placeSubmitHandler = () =>{
    if (this.state.placeName.trim() === ""){
      return;
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      }
    })
  }

  render() {
    
    const placesOutput = this.state.places.map((place,index) => (
      <ListItem key={index} placeName={place}/>
    ));

    return ( 
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.placeInput}
            placeholder="An awesome place"
            value={this.state.placeName}
            onChangeText={this.placeNameChangeHandler}
            />

          <Button
            style={styles.placeButton}
            title="Add"
            onPress={this.placeSubmitHandler}
            />
        </View>
        
        {placesOutput}
        
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
  },
  inputContainer: {
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width:"70%",
    padding: 5,
    borderWidth: 1,
    borderColor: "black"
  },
  placeButton: {
    width:"30%",
  }
});
